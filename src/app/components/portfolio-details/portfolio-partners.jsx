import Image from "next/image";

export default function PortfolioPartners() {
  return (
    <div className="px-4 md:px-6 xl:px-24  w-full h-full items-center justify-center text-center bg-[url('/portfolio-bg.png')] bg-center bg-no-repeat bg-cover pt-20 md:pt-40">
      <div className=" w-full p-6 md:p-10 mx-auto rounded-[30px] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12  items-stretch mt-6 md:mt-10">
        <div className="w-full  flex flex-col">
          <div className=" flex flex-col gap-8 xl:gap-6 2xl:gap-13 items-center md:items-start w-full">
            <h2 className="text-xl  md:text-2xl lg:text-3xl xl:text-5xl xl:pr-16  text-center md:text-left xl:text-center  text-white  font-bold leading-[142%] tracking-[0] max-w-xs xl:max-w-lg">
              We transform Ideas into design Success Stories
            </h2>

            <p className="bg-white rounded-[15px] px-4 py-2 sm:p-3 text-xl  lg:text-2xl xl:text-[40px] font-bold">
              500+ Projects done
            </p>

            <div className="w-2/3 h-[1px] bg-white/75 mt-3 sm:mt-5"></div>

            <button className="bg-[#983232] hover:bg-[#D9D9D9] text-white hover:text-[#983232] text-lg lg:text-2xl xl:text-[40px] font-bold px-6 py-2 lg:px-6 lg:py-3 xl:px-6  xl:py-2 rounded-2xl mt-3 cursor-pointer">
              All Cases
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-6 md:gap-6  items-center  w-full mt-4 md:mt-0">
          <div className="relative w-ful h-full">
            <Image
              src="/portfolio-main.png"
              alt="Project Showcase"
              width={682}
              height={444}
              className="object-contain rounded-3xl "
            />
          </div>

          <div className="flex flex-wrap justify-center items-center w-full 2xl:w-[86%] gap-2 lg:gap-10 xl:gap-16 bg-[#983232] rounded-2xl p-2 lg:p-4 ">
            {["SaaS", "Web 3.0", "AI"].map((label) => (
              <span
                key={label}
                className="border-2 border-white text-white text-sm  lg:text-[16px] px-3 lg:px-4 py-1 rounded-full"
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
