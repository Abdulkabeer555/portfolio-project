import React from 'react';

function Projects() {
  return (
    <section id="projects" className="py-5 bg-white">
      <div className="container">
        <h2 className="mb-4 text-center">My Projects</h2>
        <div className="row">
          
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Gym Fintess Center</h5>
                <p className="card-text">
                  A simple and clean todo app built with React. Features add, delete, and mark as done functionality.
                </p>
                <a href="https:/abdulkabeer555.github.io/fitness-center-project/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Softy Pinko Clone</h5>
                <p className="card-text">
                  A React-based weather app that fetches real-time data using OpenWeatherMap API.
                </p>
                <a href="https://abdulkabeer555.github.io/softy-pinko-clone/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">E-Electronics Site Project</h5>
                <p className="card-text">
                  A responsive personal portfolio made with React and Bootstrap to showcase projects and skills.
                </p>
                <a href="https://e-electronics-site-project.netlify.app/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;
