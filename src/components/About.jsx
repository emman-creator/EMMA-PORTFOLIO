import React from "react";
import AboutImage from "../assets/aboutme-image.jpg";

const About = () => {
  return (
    <section className="py-20 bg-gradient-dark" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
            About Me
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Section */}
            <div className="relative">
              <div className="relative">
                <img
                  src={AboutImage}
                  alt="About Emmanuel Nzai"
                  className="w-full max-w-md mx-auto rounded-2xl object-cover shadow-2xl shadow-primary-500/25"
                />
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-400 to-secondary-500 rounded-2xl opacity-20 blur-lg"></div>
              </div>

              {/* Floating stats */}
              <div className="absolute -top-4 -right-4 bg-dark-800 rounded-xl p-4 shadow-lg border border-dark-700">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient">3+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-dark-800 rounded-xl p-4 shadow-lg border border-dark-700">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient">60+</div>
                  <div className="text-sm text-gray-400">Projects Done</div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  I am a passionate full-stack developer with a focus on building
                  modern and responsive web applications. With a strong foundation
                  in both frontend and backend technologies, I strive to create
                  seamless and efficient user experiences.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed">
                  My journey in web development has equipped me with expertise in
                  modern frameworks and tools, allowing me to deliver high-quality
                  solutions that meet both user needs and business objectives.
                </p>
              </div>

              {/* Skills Section */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gradient">Technical Skills</h3>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-gray-300 font-medium">HTML & CSS</label>
                      <span className="text-sm text-gray-400">95%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-fill w-[95%]"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-gray-300 font-medium">React JS</label>
                      <span className="text-sm text-gray-400">90%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-fill w-[90%]"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-gray-300 font-medium">Node JS</label>
                      <span className="text-sm text-gray-400">85%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-fill w-[85%]"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-gray-300 font-medium">Python/Django</label>
                      <span className="text-sm text-gray-400">80%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-fill w-[80%]"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient mb-2">3+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient mb-2">60+</div>
                  <div className="text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient mb-2">10+</div>
                  <div className="text-gray-400">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;