function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-top">
        <h3>{project.name}</h3>

        <span
          className={
            project.status === 'Completed'
              ? 'status completed'
              : 'status'
          }
        >
          {project.status}
        </span>
      </div>

      <p>{project.description}</p>

      <div className="progress-info">
        <span>Progress</span>
        <span>{project.progress}%</span>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${project.progress}%` }}
        ></div>
      </div>

      <div className="task-count">{project.tasks}</div>
    </div>
  )
}

export default ProjectCard