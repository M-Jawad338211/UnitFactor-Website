import Image from "next/image";
export default function Projects() {
  const strategies = [
    "Flexible collaboration & fixed monthly rate",
    "Guaranteed on-time deliverables",
    "Hiring system with immediate start",
  ];

  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-28 py-12 sm:py-16 md:py-20 lg:py-24 w-full h-full text-center bg-[url('/project-bg.png')] bg-no-repeat bg-center bg-cover">
      <div className="flex flex-col items-center">
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-[150%] text-[#E8E8E8]">
          170+ Successful Projects
        </p>
        <h2 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight lg:leading-snug text-[#E8E8E8] mt-2">
          Our custom approach leads <br className="hidden sm:block" />
          projects to success
        </h2>
      </div>

      <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-2 items-stretch mt-16">
        <div className="relative w-full overflow-hidden ">
          <Image
            src="/av-lab-3.png"
            alt="Project Showcase"
            width={746}
            height={651}
            className="object-cover rounded-2xl lg:h-[390px] xl:w-[746px] xl:h-[651px]"
          />
        </div>

        <div className="w-full h-auto bg-[url('/checks-bg.png')] bg-no-repeat bg-center bg-cover p-6 xl:p-10 2xl:p-16 rounded-2xl shadow-lg space-y-6 flex flex-col justify-between">
          <div className="space-y-6 xl:space-y-16">
            <h3 className="text-xl  md:text-3xl xl:text-4xl 2xl:text-[40px] text-left text-[#E8E8E8] font-bold leading-[110%] xl:leading-[150%] max-w-2xl">
              Unitfactor is your perfect choice in terms of:
            </h3>

            <ul className="space-y-3 xl:space-y-8">
              {strategies.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 xl:gap-5">
                  <Image
                    src={"/check.png"}
                    alt="Check Icon"
                    width={20}
                    height={17}
                    className="mt-1 xl:mt-2 2xl:mt-3 md:w-[26px] md:h-[26px]"
                  />
                  <span className="text-lg md:text-xl  xl:text-2xl 2xl:text-[32px] text-[#E8E8E8] font-medium leading-[150%]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <button className="group self-start flex items-center cursor-pointer mt-4 px-4 xl:px-8 py-2 xl:py-4 rounded-[30px] bg-white text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl 2xl:text-[28px] text-[#0A3253] font-bold hover:bg-[#983232] hover:text-white transition w-auto">
            <span>Discover More About Us</span>
            <svg
              width="46"
              height="22"
              viewBox="0 0 46 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 sm:ml-4 text-[#0A3253] group-hover:text-white w-[40px] h-[18px] xl:w-[46px] xl:h-[22px]"
            >
              <path
                d="M0 11.3547C0.362413 12.4199 1.12684 12.7873 2.24048 12.7861C14.5613 12.7671 26.8821 12.7742 39.203 12.7742C39.377 12.7742 39.551 12.7742 39.8222 12.7742C39.6266 12.9757 39.5006 13.1119 39.3686 13.2423C37.4389 15.1406 35.508 17.0401 33.576 18.9372C33.0611 19.4432 32.8967 20.0535 33.0911 20.7277C33.282 21.3889 33.7536 21.8108 34.4388 21.9577C35.1084 22.1011 35.6712 21.8807 36.1513 21.4091C37.9009 19.6873 39.6542 17.9691 41.4062 16.2497C42.7119 14.9676 44.0175 13.6855 45.3208 12.401C46.2256 11.5087 46.2292 10.4956 45.322 9.60328C42.2787 6.60888 39.2318 3.61685 36.1837 0.627192C35.3712 -0.169102 34.2864 -0.207022 33.5472 0.520544C32.7971 1.25878 32.8463 2.34183 33.6732 3.1559C35.5812 5.03525 37.4905 6.91223 39.4022 8.78802C39.5186 8.90178 39.653 8.99895 39.779 9.10322C39.767 9.1447 39.755 9.18499 39.743 9.22646C39.5786 9.22646 39.4142 9.22646 39.251 9.22646C26.9157 9.22646 14.5793 9.23357 2.24408 9.21461C1.12804 9.21224 0.363613 9.58076 0 10.6449C0 10.8819 0 11.1177 0 11.3547Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
