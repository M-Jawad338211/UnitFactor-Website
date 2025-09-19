"use client";
import "./app.css";
import "./globals.css";

import Hiring from "./components/homepage-details/hiring";
import Solutions from "./components/homepage-details/solutions";
import Experiences from "./components/homepage-details/experiences";
import Animation from "./components/homepage-details/animation";
import Faqs from "./components/homepage-details/faqs";
import Services from "./components/homepage-details/services";
import Projects from "./components/homepage-details/projects";
import Partners from "./components/homepage-details/partners";
import CardCarousel from "./components/homepage-details/carousel";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hiring />
      <Solutions />
      <Experiences />
      <Animation />
      <CardCarousel />
      <Services />
      <Faqs />
      <Projects />
      <Partners />
    </div>
  );
}
