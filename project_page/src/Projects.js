import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newProject, setNewProject] = useState({ name: '', description: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };

  const handleSaveProject = () => {
    setProjects([...projects, newProject]);
    setNewProject({ name: '', description: '' });
    setShowModal(false);
  };

  return (
    <div className="projects-container">
      <div className="header">
        <button className="btn" onClick={() => setShowModal(true)}>New project</button>
        <input type="text" className="search" placeholder="Search for a project" />
      </div>
      <div className="projects">
        <h2>Kishore Fuzionest</h2>
        {projects.length === 0 ? (
          <div className="no-projects">
            <p>No projects</p>
            <p>Get started by creating a new project.</p>
            <button className="new-project-btn" onClick={() => setShowModal(true)}>+ New Project</button>
          </div>
        ) : (
          <div className="project-list">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>New Project</h2>
            <div className="input-group">
              <label htmlFor="project-name">Project Name</label>
              <input 
                type="text" 
                id="project-name"
                name="name" 
                placeholder="Project Name" 
                value={newProject.name} 
                onChange={handleInputChange} 
              />
            </div>
            <div className="input-group">
              <label htmlFor="project-description">Project Description</label>
              <input 
                type="text" 
                id="project-description"
                name="description" 
                placeholder="Project Description" 
                value={newProject.description} 
                onChange={handleInputChange} 
              />
            </div>
            <button className="btn" onClick={handleSaveProject}>Save</button>
            <button className="btn" onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
