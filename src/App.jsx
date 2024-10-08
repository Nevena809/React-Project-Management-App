import { useEffect, useState } from "react";
import AddProject from "./components/AddProject";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(text) {
    setProjectState((prevProject) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevProject.selectedProjectId,
        id: taskId,
      };
      return {
        ...prevProject,
        tasks: [newTask, ...prevProject.tasks],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectState((prevProject) => {
      return {
        ...prevProject,
        tasks: prevProject.tasks.filter((task) => task.id !== id),
      };
    });
  }

  function handleDeleteProject() {
    setProjectState((prevProject) => {
      return {
        ...prevProject,
        selectedProjectId: undefined,
        projects: prevProject.projects.filter(
          (project) => project.id !== prevProject.selectedProjectId
        ),
      };
    });
  }

  function handleSelectProject(id) {
    setProjectState((prevProject) => {
      return {
        ...prevProject,
        selectedProjectId: id,
      };
    });
  }

  function handleStartAddProjects() {
    setProjectState((prevProject) => {
      return {
        ...prevProject,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelAddProject() {
    setProjectState((prevProject) => {
      return {
        ...prevProject,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectState((prevProject) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };
      return {
        ...prevProject,
        selectedProjectId: undefined,
        projects: [...prevProject.projects, newProject],
      };
    });
  }

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectState.tasks}
    ></SelectedProject>
  );

  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject
        onAdd={handleAddProject}
        onCancel={handleCancelAddProject}
      ></NewProject>
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = (
      <NoProjectSelected
        onStartAddPoject={handleStartAddProjects}
      ></NoProjectSelected>
    );
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <AddProject
        onSelectProject={handleSelectProject}
        onStartAddPoject={handleStartAddProjects}
        projects={projectState.projects}
        selectedProjectId={projectState.selectedProjectId}
      ></AddProject>
      {content}
    </main>
  );
}

export default App;
