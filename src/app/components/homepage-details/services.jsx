"use client";
import React, { useState } from "react";
export default function Services() {
  const [activeCategory, setActiveCategory] = useState("Strategy");

  const strategyServices = [
    {
      stack: "Market Research",
      technology: "Competitor Analysis, SWOT, Surveys",
      icon: (
        <img
          src="./vector1.png"
          alt="arrow"
          className="hidden md:block w-6 h-3 sm:w-[42px] sm:h-[18px]"
        />
      ),
    },
    {
      stack: "Business Strategy",
      technology: "Roadmapping, OKRs, Business Models",
      icon: (
        <img
          src="./vector1.png"
          alt="arrow"
          className="hidden md:block w-6 h-3 sm:w-[42px] sm:h-[18px]"
        />
      ),
    },
    {
      stack: "Product Strategy",
      technology: "MVP Planning, User Journey Mapping",
      icon: (
        <img
          src="./vector1.png"
          alt="arrow"
          className="hidden md:block w-6 h-3 sm:w-[42px] sm:h-[18px]"
        />
      ),
    },
  ];

  const designServices = [
    {
      stack: "UI/UX Design",
      technology: "Wireframes, Prototypes, User Flows",
      icon: (
        <img
          src="./vector1.png"
          alt="arrow"
          className="hidden md:block w-6 h-3 sm:w-[42px] sm:h-[18px]"
        />
      ),
    },
    {
      stack: "Brand Identity",
      technology: "Logos, Color Palettes, Typography",
      icon: (
        <img
          src="./vector1.png"
          alt="arrow"
          className="hidden md:block w-6 h-3 sm:w-[42px] sm:h-[18px]"
        />
      ),
    },
    {
      stack: "Visual Design",
      technology: "Mockups, Design Systems, Style Guides",
      icon: (
        <img
          src="./vector1.png"
          alt="arrow"
          className="hidden md:block w-6 h-3 sm:w-[42px] sm:h-[18px]"
        />
      ),
    },
  ];

  const development = [
    {
      stack: "Web Development",
      technology: "React JS, Next JS, Node JS, Express JS",
      icon: (
        <img
          src="./vector1.png"
          alt="arrow1"
          className="hidden md:block w-6 h-3 sm:w-[42px] sm:h-[18px]"
        />
      ),
    },
    {
      stack: "Mobile Development",
      technology: "React Native, Flutter, iOS, Android",
      icon: (
        <img
          src="./vector1.png"
          alt="arrow"
          className="hidden md:block w-6 h-3 sm:w-[42px] sm:h-[18px]"
        />
      ),
    },
    {
      stack: "DevOps Solutions",
      technology: "CloudFormation, Terraform, Docker",
      icon: (
        <img
          src="./vector1.png"
          alt="arrow"
          className="hidden md:block w-6 h-3 sm:w-[42px] sm:h-[18px]"
        />
      ),
    },
    {
      stack: "Landing Page",
      technology: "HTML, CSS,Tailwind, JavaScript",
      icon: (
        <img
          src="./vector1.png"
          alt="arrow"
          className="hidden md:block w-6 h-3 sm:w-[42px] sm:h-[18px]"
        />
      ),
    },
  ];

  let activeServices = [];
  if (activeCategory === "Strategy") activeServices = strategyServices;
  if (activeCategory === "Design") activeServices = designServices;
  if (activeCategory === "Web Development") activeServices = development;

  return (
    <div className="px-4 sm:px-12 lg:px-16 xl:px-28  py-12 md:py-20 xl:py-28 w-full h-full items-center justify-center text-center bg-[url('/animation-bg.png')] bg-no-repeat bg-center bg-cover overflow-hidden">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-[#E8E8E8] text-xl md:text-3xl lg:text-4xl xl:text-5xl font-normal">
          Our Services
        </h2>
        <p className="text-[#E8E8E8] text-base md:text-xl font-normal max-w-xl sm:max-w-3xl mt-4">
          We’ve helped many startups and companies design high-quality digital
          products, websites, platforms, and mobile apps that meet business
          goals and user needs.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8 sm:mt-10">
        {["Strategy", "Design", "Web Development"].map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`text-lg lg:text-2xl font-bold rounded-xl sm:rounded-2xl px-6 sm:px-10 py-2 sm:py-4 cursor-pointer ${
              activeCategory === category
                ? "bg-white text-[#983232]"
                : "bg-[url('/services-bg.png')] bg-cover bg-center text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="flex flex-col mt-8 sm:mt-10 bg-[#D9D9D9] rounded-2xl sm:rounded-[30px] p-6 sm:p-10">
        {activeServices.map((service, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 mb-6"
          >
            <span className="text-lg md:text-xl lg:text-3xl font-medium leading-[150%] ">
              {service.stack}
            </span>
            <h4 className="text-base md:text-lg lg:text-2xl text-[#7E7E7E] font-medium leading-[150%]">
              {service.technology}
            </h4>
            <a href="/portfolio">{service.icon}</a>
          </div>
        ))}
      </div>
    </div>
  );
}
