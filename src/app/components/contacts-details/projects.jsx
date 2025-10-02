export default function Partners() {
  return (
    <div className="px-4 sm:px-12 lg:px-16 xl:px-28 pt-6 pb-12 lg:pt-8 lg:pb-16 xl:pt-12 xl:pb-20 w-full items-center justify-center text-center bg-black">
      <div className="w-full px-6 sm:px-10 py-12 md:py-16 lg:py-20 xl:py-28 mx-auto bg-[url('/solutions-bg.png')] bg-cover bg-center bg-no-repeat rounded-[20px] sm:rounded-[30px] mt-6 sm:mt-10">
        <div className="w-full h-auto p-4 sm:p-8 space-y-2 flex flex-col justify-between">
          <div className="space-y-6 flex flex-col items-center">
            <h3 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl   text-center text-white max-w-xl font-semibold leading-[140%] tracking-[0]">
              Got a project in mind? Tell us about it.
            </h3>

            <a
              href="/contacts"
              target="_blank"
              className="bg-[#D9D9D9] hover:bg-[#983232] text-[#983232] hover:text-white text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl mt-6 sm:mt-10 cursor-pointer active:scale-95 duration-150 ease-in-out"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
