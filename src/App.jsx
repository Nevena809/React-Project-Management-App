import { useState } from "react";
import AddProject from "./components/AddProject";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  const [showNewProject, setShowNewProject] = useState(false);

  function handleShowNewProjects() {
    setShowNewProject(true);
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <AddProject click={handleShowNewProjects}></AddProject>
      {showNewProject ? (
        <NewProject></NewProject>
      ) : (
        <NoProjectSelected></NoProjectSelected>
      )}
    </main>
  );
}

export default App;
