import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { 
  Building2, 
  FolderOpen, 
  Users, 
  CheckSquare, 
  Calendar, 
  DollarSign,
  FileText,
  BarChart3,
  LogOut,
  Plus
} from 'lucide-react';

interface Workspace {
  id: string;
  name: string;
  subdomain: string;
  created_at: string;
}

interface Project {
  id: string;
  name: string;
  description: string;
  status: string;
  created_at: string;
}

interface Task {
  id: string;
  title: string;
  status: string;
  priority: string;
  created_at: string;
}

export default function Dashboard() {
  const { user, signOut } = useAuth();
  const { toast } = useToast();
  const [workspaces, setWorkspaces] = useState<Workspace[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [activeWorkspace, setActiveWorkspace] = useState<string | null>(null);
  const [newWorkspaceName, setNewWorkspaceName] = useState('');
  const [newProjectName, setNewProjectName] = useState('');
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [loading, setLoading] = useState(true);

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    if (activeWorkspace) {
      fetchWorkspaceData(activeWorkspace);
    }
  }, [activeWorkspace]);

  const fetchUserData = async () => {
    try {
      // Fetch user's workspaces
      const { data: workspacesData, error: workspacesError } = await supabase
        .from('workspaces')
        .select('*')
        .order('created_at', { ascending: false });

      if (workspacesError) throw workspacesError;
      
      setWorkspaces(workspacesData || []);
      if (workspacesData && workspacesData.length > 0) {
        setActiveWorkspace(workspacesData[0].id);
      }
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message
      });
    }
    setLoading(false);
  };

  const fetchWorkspaceData = async (workspaceId: string) => {
    try {
      // Fetch projects
      const { data: projectsData, error: projectsError } = await supabase
        .from('projects')
        .select('*')
        .eq('workspace_id', workspaceId)
        .order('created_at', { ascending: false });

      if (projectsError) throw projectsError;
      setProjects(projectsData || []);

      // Fetch tasks
      const { data: tasksData, error: tasksError } = await supabase
        .from('tasks')
        .select('*')
        .eq('workspace_id', workspaceId)
        .order('created_at', { ascending: false })
        .limit(10);

      if (tasksError) throw tasksError;
      setTasks(tasksData || []);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message
      });
    }
  };

  const createWorkspace = async () => {
    if (!newWorkspaceName.trim()) return;

    try {
      const subdomain = newWorkspaceName.toLowerCase().replace(/[^a-z0-9]/g, '-');
      
      const { data, error } = await supabase
        .from('workspaces')
        .insert({
          name: newWorkspaceName,
          subdomain,
          owner_id: user.id
        })
        .select()
        .single();

      if (error) throw error;

      // Add user as owner to workspace_members
      const { error: memberError } = await supabase
        .from('workspace_members')
        .insert({
          workspace_id: data.id,
          user_id: user.id,
          role: 'owner'
        });

      if (memberError) throw memberError;

      setWorkspaces([data, ...workspaces]);
      setActiveWorkspace(data.id);
      setNewWorkspaceName('');
      
      toast({
        title: "Workspace Created",
        description: `${newWorkspaceName} has been created successfully.`
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message
      });
    }
  };

  const createProject = async () => {
    if (!newProjectName.trim() || !activeWorkspace) return;

    try {
      const { data, error } = await supabase
        .from('projects')
        .insert({
          name: newProjectName,
          workspace_id: activeWorkspace,
          owner_id: user.id
        })
        .select()
        .single();

      if (error) throw error;

      setProjects([data, ...projects]);
      setNewProjectName('');
      
      toast({
        title: "Project Created",
        description: `${newProjectName} has been created successfully.`
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message
      });
    }
  };

  const createTask = async () => {
    if (!newTaskTitle.trim() || !activeWorkspace) return;

    try {
      const { data, error } = await supabase
        .from('tasks')
        .insert({
          title: newTaskTitle,
          workspace_id: activeWorkspace,
          created_by: user.id
        })
        .select()
        .single();

      if (error) throw error;

      setTasks([data, ...tasks]);
      setNewTaskTitle('');
      
      toast({
        title: "Task Created",
        description: `${newTaskTitle} has been created successfully.`
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message
      });
    }
  };

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/50 to-primary/10">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              BusinessOS
            </h1>
            {workspaces.length > 0 && (
              <select 
                className="px-3 py-1 border rounded-md"
                value={activeWorkspace || ''}
                onChange={(e) => setActiveWorkspace(e.target.value)}
              >
                {workspaces.map((workspace) => (
                  <option key={workspace.id} value={workspace.id}>
                    {workspace.name}
                  </option>
                ))}
              </select>
            )}
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">
              Welcome, {user.email}
            </span>
            <Button variant="outline" size="sm" onClick={handleSignOut}>
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {workspaces.length === 0 ? (
          // No workspaces - onboarding
          <div className="max-w-md mx-auto text-center">
            <Card>
              <CardHeader>
                <CardTitle>Welcome to BusinessOS</CardTitle>
                <CardDescription>
                  Create your first workspace to get started
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="workspace">Workspace Name</Label>
                  <Input
                    id="workspace"
                    value={newWorkspaceName}
                    onChange={(e) => setNewWorkspaceName(e.target.value)}
                    placeholder="My Company"
                    onKeyPress={(e) => e.key === 'Enter' && createWorkspace()}
                  />
                </div>
                <Button onClick={createWorkspace} className="w-full">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Workspace
                </Button>
              </CardContent>
            </Card>
          </div>
        ) : (
          // Main dashboard
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="tasks">Tasks</TabsTrigger>
              <TabsTrigger value="team">Team</TabsTrigger>
              <TabsTrigger value="calendar">Calendar</TabsTrigger>
              <TabsTrigger value="finance">Finance</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
                    <FolderOpen className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{projects.length}</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Tasks</CardTitle>
                    <CheckSquare className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {tasks.filter(t => t.status !== 'completed').length}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Team Members</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">1</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Workspaces</CardTitle>
                    <Building2 className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{workspaces.length}</div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Projects</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {projects.length === 0 ? (
                      <p className="text-muted-foreground">No projects yet</p>
                    ) : (
                      <div className="space-y-2">
                        {projects.slice(0, 5).map((project) => (
                          <div key={project.id} className="flex items-center justify-between p-2 border rounded">
                            <span className="font-medium">{project.name}</span>
                            <span className="text-sm text-muted-foreground">{project.status}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Recent Tasks</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {tasks.length === 0 ? (
                      <p className="text-muted-foreground">No tasks yet</p>
                    ) : (
                      <div className="space-y-2">
                        {tasks.slice(0, 5).map((task) => (
                          <div key={task.id} className="flex items-center justify-between p-2 border rounded">
                            <span className="font-medium">{task.title}</span>
                            <span className="text-sm text-muted-foreground">{task.status}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="projects" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">Projects</h2>
                <div className="flex items-center space-x-2">
                  <Input
                    placeholder="New project name"
                    value={newProjectName}
                    onChange={(e) => setNewProjectName(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && createProject()}
                    className="w-64"
                  />
                  <Button onClick={createProject}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Project
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <Card key={project.id}>
                    <CardHeader>
                      <CardTitle>{project.name}</CardTitle>
                      <CardDescription>{project.description || 'No description'}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Status</span>
                        <span className="capitalize">{project.status}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="tasks" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">Tasks</h2>
                <div className="flex items-center space-x-2">
                  <Input
                    placeholder="New task title"
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && createTask()}
                    className="w-64"
                  />
                  <Button onClick={createTask}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Task
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                {tasks.map((task) => (
                  <Card key={task.id}>
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold">{task.title}</h3>
                          <p className="text-sm text-muted-foreground">Priority: {task.priority}</p>
                        </div>
                        <span className="capitalize px-2 py-1 bg-primary/10 text-primary rounded-md text-sm">
                          {task.status}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Placeholder tabs for other modules */}
            {['team', 'calendar', 'finance', 'reports', 'settings'].map((tab) => (
              <TabsContent key={tab} value={tab} className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="capitalize">{tab} Module</CardTitle>
                    <CardDescription>
                      This module is coming soon! Part of the comprehensive BusinessOS platform.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Features will include advanced {tab} management capabilities.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        )}
      </div>
    </div>
  );
}