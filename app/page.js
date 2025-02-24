'use client';

import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const sections = [
  { title: 'Introduction', image: './assets/img/1.png' },
  { title: 'Partners', image: './assets/img/2.png' },
  { title: 'A brief history', image: './assets/img/7.png' },
  { title: 'Beyond the Data', image: '' },
  { title: 'Health', image: './assets/img/30.png' },
  { title: 'Education', image: '' },
  { title: 'Agriculture', image: '' },
  { title: 'MSMEs', image: '' }
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    gsap.from('.content', { opacity: 0, y: 50, duration: 0.5 });
  }, [currentIndex]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev < sections.length - 1 ? prev + 1 : 0));
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : sections.length - 1));
  };

  return (
    <div className="relative h-screen w-screen flex bg-gray-900 text-white overflow-hidden">
      {/* Sidebar Navigation */}
      <div className="absolute left-40 top-1/4 bg-gray-800 p-4 flex flex-col space-y-2 w-48 shadow-lg rounded-r-lg z-10">
        {sections.map((section, index) => (
          <button
            key={index}
            className={`text-left text-white py-2 px-4 w-full text-sm rounded-lg transition duration-300 ${index === currentIndex ? 'bg-purple-700' : 'hover:bg-purple-700'}`}
            onClick={() => setCurrentIndex(index)}
          >
            {section.title}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center items-center relative">
        
        <button
          className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-transparent text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
          onClick={goToPrev}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <div className="content flex justify-center items-center h-3/4 w-[750px] bg-black rounded-lg shadow-lg ml-32 p-10 relative">
        {sections[currentIndex].image ? (
            <img src={sections[currentIndex].image} alt={sections[currentIndex].title} className="absolute inset-0 w-full h-full object-cover rounded-lg" />
          ) : (
            <h1 className="text-4xl font-bold text-center p-6 relative z-10">{sections[currentIndex].title}</h1>
          )}
        </div>
        <button
          className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-transparent text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
          onClick={goToNext}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>
    </div>
  );
}
