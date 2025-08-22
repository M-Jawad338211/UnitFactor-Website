"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
export default function Portfolio() {
  return (
    <div>
      <Partners />
      <ServicesAccordion />
    </div>
  );
}
function Partners() {
  return (
    <div className="p-24 w-full h-full items-center justify-center text-center bg-[url('/portfolio-bg.png')] bg-center bg-no-repeat bg-cover pt-40">
      <div className="max-w-7xl p-10 mx-auto  rounded-[30px] grid md:grid-cols-2 gap-12 items-stretch mt-10">
        <div className="w-full h-auto  p-8  space-y-6 flex flex-col justify-between">
          <div className="space-y-4 flex flex-col items-start w-full">
            <p className="text-[40px] text-center text-white max-w-[400px] font-bold leading-[150%] tracking-[0]">
              We transform Ideas into design Success Stories
            </p>

            <p className="bg-white rounded-[15px] p-3 text-[40px] font-bold">
              500+ Projects done
            </p>

            <div className="w-full h-[1px] bg-white/75 mt-5"></div>

            <button className="bg-[#983232] hover:bg-[#D9D9D9] text-white hover:text-[#983232] text-3xl font-bold px-6 py-3 rounded-2xl mt-3  cursor-pointer">
              All Cases
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full mt-0">
          <div className="relative w-full h-[300px] ">
            <Image
              src="/av-lab-3.png"
              alt="Project Showcase"
              fill
              className="object-contain rounded-2xl "
            />
          </div>

          <div className="flex gap-14 bg-[#983232] rounded-2xl p-3 mt-10">
            {["SaaS", "Web 3.0", "AI"].map((label) => (
              <span
                key={label}
                className="border border-white text-white px-4 py-1 rounded-full"
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
  const [isOpen, setIsOpen] = useState(true);

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
    <div className="p-24 w-full h-full items-center justify-center text-center bg-[url('/cards.png')] bg-center bg-no-repeat bg-cover pt-40">
      <div className="flex justify-between gap-4">
        <div className="flex flex-col">
          <div className="bg-black border-1 border-[#A7A7A7] text-white rounded-2xl p-5 w-[320px]">
            <div
              className="flex  justify-between items-center cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="flex flex-col">
                <h2 className="text-[20px] font-semibold">Services</h2>
              </div>

              {isOpen ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </div>

            {isOpen && (
              <div className="mt-4 flex flex-col gap-3">
                <p className="bg-[#3D3D3D] text-2xl font-bold rounded-[20px] mt-6  px-4 py-2">
                  All Services
                </p>
                <div className="flex flex-wrap gap-3">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className={`px-4 py-2 rounded-[20px] text-sm font-bold ${
                        index === 0 ? "bg-[#141414]" : "bg-[#1A1A1A]"
                      }`}
                    >
                      {service}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button className="bg-[#0A3253] hover:bg-[#D9D9D9] text-white hover:text-[#983232] text-3xl font-bold px-6 py-3 rounded-2xl mt-3  cursor-pointer">
            Have a Project?
          </button>
        </div>
        <section className="  flex-1">
          <div className="max-w-6xl mx-auto ">
            <h2 className="text-3xl md:text-5xl font-bold text-white text-left ml-5 mb-12">
              Works that Power Growth
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {works.map((work) => (
                <div
                  key={work.id}
                  className="bg-transparent rounded-2xl p-6 text-center text-white"
                >
                  <div className="overflow-hidden rounded-2xl mb-6">
                    <Image
                      src={work.img}
                      alt={work.title}
                      width={450}
                      height={450}
                      className="rounded-xl"
                    />
                  </div>

                  <h3 className="text-2xl text-left font-bold mb-2">
                    {work.title}
                  </h3>

                  <p className="text-[16px] font-medium text-[#B7B7B7] text-left mb-4">
                    {work.description}
                  </p>

                  <div className="flex items-left gap-3 flex-wrap">
                    {work.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="border border-white px-4 py-1 rounded-full text-[16px] font-bold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
