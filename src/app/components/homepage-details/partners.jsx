import Image from "next/image";
export default function Partners() {
  return (
    <div className="px-6 sm:px-12 md:px-24 py-16 w-full h-full items-center justify-center text-center bg-black">
      <div className="max-w-7xl p-6 sm:p-10 mx-auto bg-[url('/solutions-bg.png')] bg-cover bg-center bg-no-repeat rounded-[20px] md:rounded-[30px] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mt-10">
        <div className="w-full h-auto space-y-6 flex flex-col items-center md:items-start justify-center md:justify-between text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-xl lg:text-3xl xl:text-4xl text-white font-bold leading-snug sm:leading-[140%] tracking-normal ">
            Get a reliable partner that provides solutions for your success
          </h2>

          <button className="w-fit bg-[#D9D9D9] hover:bg-[#983232] text-[#983232] hover:text-white text-lg sm:text-xl lg:text-2xl font-bold px-3 py-2 md:px-5 md:py-3 rounded-xl md:rounded-2xl mt-6 lg:mt-8 cursor-pointer transition">
            Hire Us
          </button>
        </div>

        <div className="relative flex items-center justify-center w-full h-[200px] sm:h-[250px] lg:h-[300px] lg:mt-8 ">
          <Image
            src="/av-lab-3.png"
            alt="Project Showcase"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
