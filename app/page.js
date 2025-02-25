"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";

const sections = [
  {
    title: "Cover",
    images: ["/assets/img/1.png"],
  },
  {
    title: "Introduction",
    images: [
      "/assets/img/2.png",
      "/assets/img/3.png",
      "/assets/img/4.png",
      "/assets/img/5.png",
      "/assets/img/6.png",
      "/assets/img/7.png",
      "/assets/img/8.png",
      "/assets/img/9.png",
      "/assets/img/10.png",
      "/assets/img/11.png",
      "/assets/img/12.png",
      "/assets/img/13.png",
      "/assets/img/14.png",
    ],
  },
  {
    title: "Beyond the Data",
    images: [
      "/assets/img/15.png",
      "/assets/img/16.png",
      "/assets/img/17.png",
      "/assets/img/18.png",
      "/assets/img/19.png",
      "/assets/img/20.png",
      '/assets/img/21.png',
      '/assets/img/22.png',
      '/assets/img/23.png',
      '/assets/img/24.png',
      '/assets/img/25.png',
      '/assets/img/26.png',
      '/assets/img/27.png',
      '/assets/img/28.png',

    ],
  },
  {
    title: "Health",
    images: [
      "/assets/img/29.png",
      "/assets/img/30.png",
      "/assets/img/31.png",
      "/assets/img/32.png",
    ]
  },
  { title: "Education", images: ["/assets/img/38.jpeg", "/assets/img/37.jpeg", "/assets/img/36.jpeg", "/assets/img/35.jpeg"] },
  { title: "Agriculture", images: ["/assets/img/31.png"] },
  { title: "MSMEs", images: ["/assets/img/39.jpeg", "/assets/img/40.jpeg", "/assets/img/41.jpeg", "/assets/img/42.jpeg"] },
];

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    gsap.fromTo(
      ".image-container",
      { opacity: 0 },
      { opacity: 1 }
    );
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
    setCurrentImage((prev) =>
      prev < sections[currentSection].images.length - 1 ? prev + 1 : 0
    );
  };

  const goToPrevImage = () => {
    setCurrentImage((prev) =>
      prev > 0 ? prev - 1 : sections[currentSection].images.length - 1
    );
  };

  return (
    <div className="relative h-screen w-screen flex flex-col lg:flex-row bg-gray-900 text-white overflow-hidden">
      {/* Sidebar Navigation */}
      <div className="lg:absolute lg:left-[13.3rem] lg:top-1/4 xl:absolute xl:left-[18.3rem] xl:top-1/3 bg-gray-800 p-4 flex lg:flex-col flex-row space-x-2 lg:space-x-0 lg:space-y-2 w-full lg:w-48 shadow-lg rounded-b-lg lg:rounded-r-lg z-10 overflow-x-auto">
        {sections.map((section, index) => (
          <button
            key={index}
            className={`text-left text-white py-2 px-4 w-full text-sm rounded-lg transition duration-300 ${
              index === currentSection ? "bg-[#E8BA78]" : "hover:bg-[#E8BA78]"
            }`}
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="content flex flex-col justify-center items-center rounded-lg ml-32 p-10 relative">
          <div className="image-container group w-[600px] h-[600px] flex justify-center items-center relative">
            {/* Previous Image Button */}
            <button
              className="absolute left-5 text-white bg-gray-700 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={goToPrevImage}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* Image */}
            <Image
              src={sections[currentSection].images[currentImage]}
              alt={sections[currentSection].title}
              width={600}
              height={600}
              className="w-full h-full object-cover rounded-lg transition-transform"
              
            />

            {/* Next Image Button */}
            <button
              className="absolute right-5 text-white bg-gray-700 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={goToNextImage}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <button
          className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-transparent text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
          onClick={goToNextSection}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
