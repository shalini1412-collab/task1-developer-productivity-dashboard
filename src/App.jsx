import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import StatsCard from './components/StatsCard'
import ProjectCard from './components/ProjectCard'
import './App.css'

const initialProjects = [
  {
    name: 'AI Study Assistant',
    description: 'Build an AI-powered study assistant for students.',
    progress: 72,
    status: 'In Progress',
    tasks: '8 of 11 tasks completed',
  },
  {
    name: 'Portfolio Website',
    description: 'Create a professional developer portfolio.',
    progress: 45,
    status: 'In Progress',
    tasks: '5 of 10 tasks completed',
  },
  {
    name: 'E-Commerce App',
    description: 'Full-stack shopping application with authentication.',
    progress: 100,
    status: 'Completed',
    tasks: '12 of 12 tasks completed',
  },
]

function App() {
  const [projects, setProjects] = useState(initialProjects)
  const [searchTerm, setSearchTerm] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const [projectName, setProjectName] = useState('')
  const [projectDescription, setProjectDescription] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1200)

    return () => clearTimeout(timer)
  }, [])

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleCreateProject = (e) => {
    e.preventDefault()

    if (!projectName.trim() || !projectDescription.trim()) {
      return
    }

    const newProject = {
      name: projectName,
      description: projectDescription,
      progress: 0,
      status: 'In Progress',
      tasks: '0 of 0 tasks completed',
    }

    setProjects([...projects, newProject])

    setProjectName('')
    setProjectDescription('')
    setShowForm(false)
  }

  return (
    <>
      <Navbar />

      <main className="dashboard">
        <section className="welcome">
          <div>
            <h1>Good morning, Shalini 👋</h1>
            <p>Here’s what’s happening with your projects today.</p>
          </div>

          <button
            className="add-project-btn"
            onClick={() => setShowForm(true)}
          >
            + New Project
          </button>
        </section>

        <section className="stats">
          <StatsCard title="Total Projects" value={projects.length} />
          <StatsCard title="Active Tasks" value="24" />
          <StatsCard title="Completed" value="18" />
          <StatsCard title="Productivity" value="76%" />
        </section>

        <section className="projects-section">
          <div className="section-header">
            <div>
              <h2>My Projects</h2>
              <p>Track your ongoing work and progress.</p>
            </div>

            <input
              type="text"
              placeholder="Search projects..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {isLoading ? (
            <div className="empty-state">
              <h3>Loading your projects...</h3>
              <p>Please wait while we load your project data.</p>
            </div>
          ) : (
            <div className="project-grid">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.name}
                    project={project}
                  />
                ))
              ) : (
                <div className="empty-state">
                  <h3>No projects found</h3>
                  <p>Try searching with a different project name.</p>
                </div>
              )}
            </div>
          )}
        </section>
      </main>

      {showForm && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <div>
                <h2>Create New Project</h2>
                <p>Add a new project to your dashboard.</p>
              </div>

              <button
                className="close-btn"
                onClick={() => setShowForm(false)}
              >
                ×
              </button>
            </div>

            <form onSubmit={handleCreateProject}>
              <label>Project Name</label>

              <input
                type="text"
                placeholder="e.g. AI Resume Analyzer"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
              />

              <label>Description</label>

              <textarea
                placeholder="What is this project about?"
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
                rows="4"
              ></textarea>

              <div className="modal-actions">
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>

                <button type="submit" className="create-btn">
                  Create Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default App