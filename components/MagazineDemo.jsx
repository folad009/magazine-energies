"use client"

import gsap from 'gsap'
import React, { useEffect, useState } from 'react'

const MagazineDemo = () => {
    const sections = [
        'Introduction',
        'A brief history',
        'Beyond the Data',
        'Health',
        'Education',
        'Agriculture',
        'MSMEs'
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        gsap.from('.content', { opacity: 0, y:50, duration: 0.5})
    }, [currentIndex])

    const goToNext = () => {
        setCurrentIndex((prev) => (prev < sections.length - 1 ? prev + 1 : prev))
    }

    const goToPrev = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : sections.length - 1));
    }
  return (
    <div className="relative h-screen w-screen flex overflow-hidden bg-gray-900 text-white">
      {/* Sidebar Navigation */}
      <div className="sidebar bg-purple-900 p-4 flex flex-col space-y-2 w-48 shadow-lg rounded-r-lg">
        {sections.map((section, index) => (
          <button
            key={index}
            className={`text-left text-white py-2 px-4 rounded-lg transition duration-300 ${index === currentIndex ? 'bg-purple-700' : 'hover:bg-purple-700'}`}
            onClick={() => setCurrentIndex(index)}
          >
            {section}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center items-center relative">
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg hover:bg-gray-300"
          onClick={goToPrev}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <div className="content flex justify-center items-center h-full bg-gray-800 rounded-lg shadow-lg p-10">
          <h1 className="text-4xl font-bold text-center bg-opacity-50 bg-black rounded-lg p-6">{sections[currentIndex]}</h1>
        </div>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg hover:bg-gray-300"
          onClick={goToNext}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>
    </div>
  )
}

export default MagazineDemo