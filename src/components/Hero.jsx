import React from 'react';
import HeroImage from '../assets/hero-image.jpg';

const Hero = () => {
  return (
    <section id="home" className='relative min-h-screen bg-gradient-dark flex items-center justify-center overflow-hidden'>
      {/* Background decoration */}
      <div className='absolute inset-0 bg-gradient-to-br from-primary-900/20 to-secondary-900/20'></div>
      <div className='absolute top-20 left-20 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse'></div>
      <div className='absolute bottom-20 right-20 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-pulse'></div>

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='max-w-4xl mx-auto text-center'>
          {/* Profile Image */}
          <div className='mb-12 animate-slide-down'>
            <div className='relative inline-block'>
              <img
                src={HeroImage}
                alt="Emmanuel Nzai"
                className='w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-primary-400/30 shadow-2xl shadow-primary-500/25 animate-scale-in'
              />
              <div className='absolute -inset-2 bg-gradient-to-r from-primary-400 to-secondary-500 rounded-full opacity-20 blur-lg animate-pulse'></div>
            </div>
          </div>

          {/* Main Heading */}
          <div className='animate-slide-up'>
            <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-6'>
              I'm{" "}
              <span className='text-gradient animate-fade-in'>Emmanuel Nzai</span>
            </h1>
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-300 mb-8'>
              Full-Stack Developer
            </h2>

            {/* Description */}
            <p className='text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed'>
              I specialize in building modern and responsive web applications with cutting-edge technologies,
              creating seamless user experiences that bring ideas to life.
            </p>

            {/* CTA Buttons */}
            <div className='flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in'>
              <button className='btn-primary text-lg px-8 py-4'>
                Get In Touch
              </button>
              <button className='btn-secondary text-lg px-8 py-4'>
                View My Work
              </button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow'>
            <div className='w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center'>
              <div className='w-1 h-3 bg-primary-400 rounded-full mt-2 animate-pulse'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;