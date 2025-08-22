export default function Portfolio() {
  return (
    <div>
      <Partners />
    </div>
  );
}
function Partners() {
  return (
    <div className="p-24 w-full h-full items-center justify-center text-center bg-black">
      <div className="max-w-7xl p-10 mx-auto bg-[url('/solutions-bg.png')] bg-cover bg-center bg-no-repeat rounded-[30px] grid md:grid-cols-2 gap-12 items-stretch mt-10">
        <div className="w-full h-auto  p-8  space-y-6 flex flex-col justify-between">
          <div className="space-y-6 flex flex-col items-start">
            <h3 className="text-[40px] text-left text-white max-w-4xl font-bold leading-[150%] tracking-[0]">
              Get a reliable partner that provides solutions for your success
            </h3>

            <button className=" bg-[#D9D9D9] hover:bg-[#983232] text-[#983232] hover:text-white text-3xl font-bold px-6 py-3 rounded-2xl mt-10 cursor-pointer">
              Hire
            </button>
          </div>
        </div>
        <div className="relative  flex items-center justify-center  overflow-hidden  w-full mt-10 h-[300px]">
          <Image
            src="/av-lab-3.png"
            alt="Project Showcase"
            fill
            className="object-contain rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}
