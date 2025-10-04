import React from 'react';

const Projects = () => {
  const projects = [
    {
      name: "TravelEase Cloud-Native Deployment",
      description: "Enterprise-grade microservices deployment with automated CI/CD pipelines, chaos engineering, and comprehensive observability dashboards built during Xebia internship.",
      tags: ["Docker", "Kubernetes", "Jenkins", "Monitoring", "DevOps", "Xebia"],
      category: "Enterprise",
      link: "https://github.com/TravelEase-Xebia/TravelEase"
    },
    {
      name: "Insync",
      description: "Built an academic project management system using Java Servlets, JSP, and JDBC with a MySQL database. Features secure user authentication and session management, with collaborative development managed by Git.",
      tags: ["JavaScript", "JSP", "Java Servlets"],
      category: "Full Stack",
      link: "https://github.com/Bhavesh-Kapur/Insync"
    }
  ];

  return (
    <section className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        <div className="projects-grid">
            
          {projects.map((project, index) => (
            <a href={project.link} target = "_blank" style={{ textDecoration: 'none' }}>
            <div key={index} className="project-card">
              <div className="project-header">
                <h3 className="project-name">{project.name}</h3>
                <span className="project-category">{project.category}</span>

              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
