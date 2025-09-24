import React from "react";

const projects = [
  {
    id: 1,
    name: "Django Tutorial",
    technologies: "Django Framework",
    image: "/django-framework.jpg",
    github: "https://github.com/emman-creator/djangotutorial.git",
    description: "A comprehensive Django tutorial project demonstrating best practices and modern development techniques.",
    features: ["RESTful APIs", "Authentication", "Database Design", "Modern UI"],
  },
  {
    id: 2,
    name: "E-Commerce Platform",
    technologies: "MERN Stack",
    image: "/react.svg",
    github: "https://github.com/emman-creator",
    description: "Full-featured e-commerce platform with payment integration and admin dashboard.",
    features: ["React Frontend", "Node.js Backend", "MongoDB", "Stripe Integration"],
  },
  {
    id: 3,
    name: "Task Management App",
    technologies: "React & Firebase",
    image: "/react.svg",
    github: "https://github.com/emman-creator",
    description: "Real-time collaborative task management application with user authentication.",
    features: ["Real-time Updates", "User Authentication", "Team Collaboration", "Mobile Responsive"],
  },
  {
    id: 4,
    name: "Portfolio Website",
    technologies: "React & Tailwind CSS",
    image: "/react.svg",
    github: "https://github.com/emman-creator",
    description: "Modern portfolio website showcasing projects and skills with beautiful animations.",
    features: ["Responsive Design", "Dark Theme", "Smooth Animations", "SEO Optimized"],
  },
  {
    id: 5,
    name: "Weather Dashboard",
    technologies: "Vue.js & API",
    image: "/react.svg",
    github: "https://github.com/emman-creator",
    description: "Interactive weather dashboard with location-based forecasts and beautiful visualizations.",
    features: ["Weather API", "Location Services", "Interactive Charts", "PWA Support"],
  },
  {
    id: 6,
    name: "Blog Platform",
    technologies: "Next.js & Sanity",
    image: "/react.svg",
    github: "https://github.com/emman-creator",
    description: "Modern blog platform with CMS integration and SEO optimization.",
    features: ["Headless CMS", "SEO Optimization", "Image Optimization", "Fast Performance"],
  },
];

const Projects = () => {
  return (
    <section className="py-20 bg-gradient-dark" id="project">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for creating exceptional digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="card group overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-t-xl">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Tech Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary-500/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.technologies}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-colors duration-300">
                    {project.name}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.features.slice(0, 2).map((feature, idx) => (
                        <span
                          key={idx}
                          className="bg-dark-700 text-gray-300 px-2 py-1 rounded-md text-xs"
                        >
                          {feature}
                        </span>
                      ))}
                      {project.features.length > 2 && (
                        <span className="bg-dark-700 text-gray-300 px-2 py-1 rounded-md text-xs">
                          +{project.features.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-primary-400 to-secondary-500 text-white text-center px-4 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
                    >
                      View Code
                    </a>
                    <button className="bg-dark-700 text-gray-300 px-4 py-2 rounded-lg hover:bg-dark-600 transition-colors duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <button className="btn-secondary">
              View All Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;