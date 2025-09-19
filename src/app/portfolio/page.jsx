"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
export default function Portfolio() {
  return (
    <div>
      <Partners />
      <ServicesAccordion />
      <Testimonials />
      <Bookings />
    </div>
  );
}

function Partners() {
  return (
    <div className="px-6  md:p-24 w-full h-full items-center justify-center text-center bg-[url('/portfolio-bg.png')] bg-center bg-no-repeat bg-cover pt-20 md:pt-40">
      <div className="max-w-7xl p-6 md:p-10 mx-auto rounded-[30px] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch mt-6 md:mt-10">
        <div className="w-full h-auto p-4 sm:p-8 space-y-6 flex flex-col justify-between">
          <div className="space-y-4 flex flex-col items-center md:items-start w-full">
            <p className="text-2xl  md:text-3xl pr-0 md:pr-10 text-center  text-white max-w-xs font-bold leading-[150%] tracking-[0]">
              We transform Ideas into design Success Stories
            </p>

            <p className="bg-white rounded-[15px] px-4 py-2 sm:p-3 text-xl  md:text-2xl font-bold">
              500+ Projects done
            </p>

            <div className="w-full h-[1px] bg-white/75 mt-3 sm:mt-5"></div>

            <button className="bg-[#983232] hover:bg-[#D9D9D9] text-white hover:text-[#983232] text-lg md:text-2xl font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-2xl mt-3 cursor-pointer">
              All Cases
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full mt-4 md:mt-0">
          <div className="relative w-full h-[250px] md:h-[300px]">
            <Image
              src="/av-lab-3.png"
              alt="Project Showcase"
              fill
              className="object-contain rounded-3xl"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-10 md:gap-12 bg-[#983232] rounded-2xl p-3 mt-6 sm:mt-10">
            {["SaaS", "Web 3.0", "AI"].map((label) => (
              <span
                key={label}
                className="border-2 border-white text-white text-sm sm:text-base md:text-lg px-3 sm:px-4 py-1 rounded-full"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ServicesAccordion() {
  const services = [
    "MVP (12)",
    "UI/UX Design (12)",
    "Branding (5)",
    "Web Development (78)",
    "Website Design (77)",
  ];
  const works = [
    {
      id: 1,
      title: "Environmental Ovulation",
      description:
        "Tell about environmental factors Tell about environmental factors Tell about environmental factors",
      tags: ["SaaS", "Web 3.0", "AI"],
      img: "/mockup.png",
    },
    {
      id: 2,
      title: "Environmental Ovulation",
      description:
        "Tell about environmental factors Tell about environmental factors Tell about environmental factors",
      tags: ["SaaS", "Web 3.0", "AI"],
      img: "/mockup.png",
    },
    {
      id: 3,
      title: "Environmental Ovulation",
      description:
        "Tell about environmental factors Tell about environmental factors Tell about environmental factors",
      tags: ["SaaS", "Web 3.0", "AI"],
      img: "/mockup.png",
    },
    {
      id: 4,
      title: "Environmental Ovulation",
      description:
        "Tell about environmental factors Tell about environmental factors Tell about environmental factors",
      tags: ["SaaS", "Web 3.0", "AI"],
      img: "/mockup.png",
    },
    {
      id: 5,
      title: "Environmental Ovulation",
      description:
        "Tell about environmental factors Tell about environmental factors Tell about environmental factors",
      tags: ["SaaS", "Web 3.0", "AI"],
      img: "/mockup.png",
    },
    {
      id: 6,
      title: "Environmental Ovulation",
      description:
        "Tell about environmental factors Tell about environmental factors Tell about environmental factors",
      tags: ["SaaS", "Web 3.0", "AI"],
      img: "/mockup.png",
    },
  ];

  return (
    <div className="px-6 sm:px-12 md:px-24 py-16 md:py-24 w-full h-full items-center justify-center text-center bg-[url('/cards.png')] bg-center bg-no-repeat bg-cover">
      <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12">
        <div className="flex flex-col items-center md:items-start mt-6 md:mt-22">
          <div className="bg-black border border-[#A7A7A7] text-white rounded-2xl p-4 sm:p-5 w-full sm:w-[320px]">
            <div className="flex justify-between items-center cursor-pointer">
              <h2 className="text-lg sm:text-xl font-semibold">Services</h2>
            </div>

            <div className="mt-4 flex flex-col gap-3">
              <p className="bg-[#3D3D3D] text-lg sm:text-xl font-bold rounded-[20px] mt-6 px-4 py-2 text-center sm:text-left">
                All Services
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className={`px-3 sm:px-4 py-2 rounded-[20px] text-xs sm:text-sm font-bold ${
                      index === 0 ? "bg-[#141414]" : "bg-[#1A1A1A]"
                    }`}
                  >
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button className="bg-[#0A3253] hover:bg-[#D9D9D9] text-white hover:text-[#983232] text-lg sm:text-xl md:text-2xl font-bold px-5 sm:px-6 py-2 sm:py-3 rounded-2xl mt-4 cursor-pointer">
            Have a Project?
          </button>
        </div>
        <div className="flex-1 w-full">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center lg:text-left mb-6 lg:ml-5">
              Works that Power Growth
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {works.map((work) => (
                <div
                  key={work.id}
                  className="bg-transparent rounded-2xl p-4 sm:p-6 text-center text-white"
                >
                  <div className="overflow-hidden rounded-2xl mb-4 sm:mb-6">
                    <Image
                      src={work.img}
                      alt={work.title}
                      width={450}
                      height={300}
                      className="rounded-xl w-full h-auto"
                    />
                  </div>

                  <h3 className="text-xl sm:text-2xl text-left font-bold mb-2">
                    {work.title}
                  </h3>

                  <p className="text-sm sm:text-base font-medium text-[#B7B7B7] text-left mb-3 sm:mb-4">
                    {work.description}
                  </p>

                  <div className="flex items-start gap-2 sm:gap-3 flex-wrap">
                    {work.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="border-2 border-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm md:text-base font-bold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    {
      id: 1,
      name: "Ola Matafor",
      role: "Vice President at WordPress",
      text: `"Throughout the entire project all I saw was sheer will to keep pushing forward and adapting to whatever the next request was. Terrific job and we couldn’t have done it without you."`,
      image: "/team-member.png",
    },
    {
      id: 2,
      name: "John Doe",
      role: "CEO at Voxe",
      text: `"Amazing collaboration! The team is skilled and professional. Terrific job and we couldn’t have done it without you."`,
      image: "/team-member.png",
    },
  ];
  const visibleCards = cards.slice(currentIndex, currentIndex + 1);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <section className="w-full bg-[url('/checks-bg.png')] bg-cover bg-no-repeat bg-center py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        <h2 className="text-white text-2xl  md:text-4xl max-w-sm md:max-w-xl font-bold leading-tight text-center md:text-left">
          Our Partners find numerous reasons to Love Us
        </h2>

        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="flex flex-col gap-4 w-full md:w-1/3">
            <div className="bg-[#983232]/50 p-4 rounded-xl text-center text-white text-xl sm:text-2xl font-bold">
              WordPress.com
            </div>
            <div className="bg-[#983232]/50 p-4 rounded-xl text-center text-white text-xl sm:text-2xl font-bold">
              VOXE
            </div>
            <div className="bg-[#983232]/50 p-4 rounded-xl text-center text-white text-xl sm:text-2xl font-bold">
              MYSO Finance
            </div>
          </div>

          <div className="bg-[#FFC192] rounded-2xl p-6 shadow-lg w-full md:w-2/3 flex items-center justify-center">
            {visibleCards.map((card) => (
              <div
                key={card.id}
                className="flex flex-col md:flex-row gap-6 items-start w-full max-w-[600px] h-[400px] md:h-[350px]"
              >
                <Image
                  src={card.image}
                  alt={card.name}
                  width={120}
                  height={120}
                  className="rounded-xl object-cover mx-auto md:mx-0"
                />

                <div className="flex flex-col justify-between h-full w-full">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                      {card.name}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      {card.role}
                    </p>
                    <p className="text-black text-lg sm:text-xl leading-relaxed font-medium mt-3 line-clamp-6">
                      {card.text}
                    </p>
                  </div>
                  <div className="flex justify-end gap-3 mt-6">
                    <button
                      onClick={prevSlide}
                      className="p-3 rounded-full bg-black text-white hover:bg-gray-800 transition"
                    >
                      <ArrowLeft size={20} />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="p-3 rounded-full bg-black text-white hover:bg-gray-800 transition"
                    >
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Bookings() {
  return (
    <div className="px-6 md:px-24 py-16 w-full h-full  items-center justify-center text-center bg-black">
      <div
        className="max-w-7xl mx-auto rounded-[30px] mt-10 p-6 md:p-10 
        bg-gradient-to-r from-[#983232]/90 via-[#000000]/80 to-[#0A3253]/90 backdrop-blur-md"
      >
        <div className="w-full h-auto space-y-6 flex flex-col justify-between">
          <div className="space-y-4 flex flex-col items-center">
            <h3 className="text-2xl md:text-5xl  text-center font-semibold leading-snug tracking-tight text-white">
              Wondering if we’re your
              <br /> UI/UX design match?
            </h3>

            <p className="font-normal text-base md:text-xl  leading-relaxed tracking-wide text-white max-w-lg">
              We offer you a free 3-day trial work with one of our experienced
              designers to cover your questions about our working process.
            </p>

            <button
              className="bg-[#983232] hover:bg-[#0A3253] transition-colors duration-300 
              text-white text-lg md:text-xl font-bold px-6 py-3 rounded-2xl mt-6 cursor-pointer"
            >
              Book a free trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
