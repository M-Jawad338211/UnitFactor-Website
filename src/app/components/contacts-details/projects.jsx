export default function Partners() {
  return (
    <div className="px-4 sm:px-12 lg:px-16 xl:px-28  py-16 w-full items-center justify-center text-center bg-black">
      <div className="w-full p-6 sm:p-10 mx-auto bg-[url('/solutions-bg.png')] bg-cover bg-center bg-no-repeat rounded-[20px] sm:rounded-[30px] mt-6 sm:mt-10">
        <div className="w-full h-auto p-4 sm:p-8 space-y-2 flex flex-col justify-between">
          <div className="space-y-6 flex flex-col items-center">
            <h3 className="text-xl md:text-3xl lg:text-4xl xl:text-6xl text-center text-white max-w-2xl font-semibold leading-[140%] tracking-[0]">
              Got a project in mind? Tell us about it.
            </h3>

            <button className="bg-[#D9D9D9] hover:bg-[#983232] text-[#983232] hover:text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[40px] font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl mt-6 sm:mt-10 cursor-pointer">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
