import Image from "next/image";

export default function ServicesAccordion() {
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
    <div className="px-6 sm:px-12 xl:px-28  py-16 xl:py-24 w-full h-full items-center justify-center text-center bg-[url('/cards.png')] bg-center bg-no-repeat bg-cover">
      <div className="flex flex-col xl:flex-row justify-between gap-8 2xl:gap-0  ">
        <div className="flex flex-col items-center xl:items-start ">
          <div className="bg-black border border-[#A7A7A7] text-white rounded-2xl p-4 sm:p-10 w-full sm:w-[320px]">
            <div className="flex justify-between items-center cursor-pointer">
              <h2 className="text-lg sm:text-xl font-semibold">Services</h2>
            </div>

            <div className="mt-4 flex flex-col gap-3">
              <p className="bg-[#3D3D3D] text-lg sm:text-xl xl:text-2xl font-bold rounded-[20px] mt-6 px-4 py-2 text-center sm:text-left">
                All Services
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className={`px-3 sm:px-4 py-2 rounded-[20px] text-xs sm:text-sm xl:text-2xl font-bold ${
                      index === 0 ? "bg-[#141414]" : "bg-[#1A1A1A]"
                    }`}
                  >
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button className="bg-[#0A3253] hover:bg-[#D9D9D9] text-white hover:text-[#983232] text-lg sm:text-xl md:text-2xl xl:text-4xl font-bold px-5 sm:px-8 py-2 sm:py-4 rounded-2xl mt-6 cursor-pointer">
            Have a Project?
          </button>
        </div>
        <div className="flex-1 w-full">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-white text-center lg:text-left mb-6 xl:mb-16 lg:ml-5">
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
