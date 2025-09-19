export default function Bookings() {
  return (
    <div className="px-4 md:px-18 xl:px-32  py-16 w-full h-full  items-center justify-center text-center bg-black">
      <div
        className="w-full mx-auto rounded-[30px] mt-10 p-6 md:p-10 
        bg-gradient-to-r from-[#983232]/90 via-[#000000]/80 to-[#0A3253]/90 backdrop-blur-md"
      >
        <div className="w-full h-auto space-y-6 flex flex-col justify-between">
          <div className="space-y-4 flex flex-col items-center">
            <h2 className="text-xl md:text-2xl lg:text-5xl xl:text-6xl  text-center font-semibold leading-snug tracking-tight text-white">
              Wondering if we’re your
              <br /> UI/UX design match?
            </h2>

            <p className="font-normal text-base md:text-xl lg:text-2xl xl:text-3xl  leading-relaxed tracking-wide text-white max-w-[600px]">
              We offer you a free 3-day trial work with one of our experienced
              designers to cover your questions about our working process.
            </p>

            <button
              className="bg-[#983232] hover:bg-[#0A3253] transition-colors duration-300 
              text-white text-base md:text-xl xl:text-[40px] font-bold px-6 py-3 rounded-2xl mt-6 cursor-pointer"
            >
              Book a free trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
