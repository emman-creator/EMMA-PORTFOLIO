import React from "react";

const services = [
  {
    id: 1,
    title: "Web Design",
    description: "Creating visually appealing and user-friendly web designs that captivate your audience and enhance user experience.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces using modern frameworks like React, Vue, and Angular.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Backend Development",
    description: "Developing robust server-side logic and databases using Node.js, Python, and various database technologies.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Full-Stack Development",
    description: "Combining both frontend and backend development skills to create complete, end-to-end web applications.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Content Writing",
    description: "Creating engaging, SEO-optimized content that drives traffic and converts visitors into customers.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Digital Marketing",
    description: "Strategic digital marketing campaigns that increase brand visibility and drive business growth.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const Service = () => {
  return (
    <section className="py-20 bg-gradient-dark" id="service">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              My Services
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              I offer comprehensive web development services to help bring your digital vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="card group hover:scale-105 hover:-translate-y-2 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-400 to-secondary-500 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>

                  <div className="text-2xl font-bold text-gradient mb-2">
                    {service.id.toString().padStart(2, '0')}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gradient transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-auto">
                  <a
                    href="#"
                    className="inline-flex items-center text-primary-400 hover:text-secondary-400 font-medium transition-colors duration-300 group-hover:translate-x-2 transform"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;