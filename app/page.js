'use client';

import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const sections = [
  { 
    title: 'Introduction', 
    images: [
      './assets/img/1.png', './assets/img/2.png', './assets/img/4.png', './assets/img/5.png', './assets/img/6.png'
    ]
  },
  { 
    title: 'Health', 
    images: [
      './assets/img/30.png',
    ]
  },
  { 
    title: 'Education', 
    images: [
      './assets/img/24.png', 
    ]
  },
  { 
    title: 'Agriculture', 
    images: [
      './assets/img/25.png', 
    ]
  },
  { 
    title: 'MSMEs', 
    images: [
      './assets/img/31.png', 
    ]
  }
];

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    gsap.fromTo('.image-container', { rotationY: -90, opacity: 0 }, { rotationY: 0, opacity: 1, duration: 0.5 });
  }, [currentImage]);

  const goToNextSection = () => {
    setCurrentSection((prev) => (prev < sections.length - 1 ? prev + 1 : 0));
    setCurrentImage(0);
  };

  const goToPrevSection = () => {
    setCurrentSection((prev) => (prev > 0 ? prev - 1 : sections.length - 1));
    setCurrentImage(0);
  };

  const goToNextImage = () => {
    setCurrentImage((prev) => (prev < sections[currentSection].images.length - 1 ? prev + 1 : 0));
  };

  const goToPrevImage = () => {
    setCurrentImage((prev) => (prev > 0 ? prev - 1 : sections[currentSection].images.length - 1));
  };

  return (
    <div className="relative h-screen w-screen flex bg-gray-900 text-white overflow-hidden">
      {/* Sidebar Navigation */}
      <div className="absolute left-40 top-1/4 bg-gray-800 p-4 flex flex-col space-y-2 w-48 shadow-lg rounded-r-lg z-10">
        {sections.map((section, index) => (
          <button
            key={index}
            className={`text-left text-white py-2 px-4 w-full text-sm rounded-lg transition duration-300 ${index === currentSection ? 'bg-[#E8BA78]' : 'hover:bg-[#E8BA78]'}`}
            onClick={() => {
              setCurrentSection(index);
              setCurrentImage(0);
            }}
          >
            {section.title}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center items-center relative">
        <button
          className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-transparent text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
          onClick={goToPrevSection}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
        </button>

        <div className="content flex flex-col justify-center items-center h-3/4 w-[750px] bg-black rounded-lg shadow-lg ml-32 p-10 relative">
          <div className="image-container w-full h-full flex justify-center items-center relative">
            <button className="absolute left-5 text-white bg-gray-700 p-2 rounded-full" onClick={goToPrevImage}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <img src={sections[currentSection].images[currentImage]} alt={sections[currentSection].title} className="w-full h-full object-contain rounded-lg transition-transform" />
            <button className="absolute right-5 text-white bg-gray-700 p-2 rounded-full" onClick={goToNextImage}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        </div>

        <button
          className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-transparent text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
          onClick={goToNextSection}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>
    </div>
  );
}