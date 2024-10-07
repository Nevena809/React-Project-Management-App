import img from "../assets/no-projects.png";
export default function NoProjectSelected() {
  return (
    <div>
      <img src={img} />
      <h2>No projects selected</h2>
      <p>Select a project or get started with a new one.</p>
    </div>
  );
}
