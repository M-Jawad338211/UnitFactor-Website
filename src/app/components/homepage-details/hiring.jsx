export default function Hiring() {
  return (
    <div
      className="w-full h-screen bg-cover bg-center  overflow-hidden "
      style={{ backgroundImage: "url('/background.png')" }}
    >
      <div className="flex flex-col items-center justify-center h-full  mt-0 md:mt-10 px-4 sm:px-12 lg:px-16 xl:px-28">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <h2 className="text-lg sm:text-[20px] font-semibold text-white text-center">
            Web Development &amp; UI/UX Design
          </h2>
          <div className="flex gap-2">
            {["SaaS", "Web 3.0", "AI"].map((label) => (
              <span
                key={label}
                className="border-2 border-white text-white font-semibold text-xs md:text-base px-3 sm:px-4 py-1 rounded-full"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center mt-6 sm:mt-8 mb-8 sm:mb-10">
          <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white text-center max-w-sm sm:max-w-4xl leading-snug sm:leading-tight">
            Crafting Unique, Purpose-Driven Designs That Capture Attention,
            Build Trust, and Turn Visitors into Loyal Customers
          </h1>

          <a
            href="contacts"
            target="_blank"
            className="bg-[#D9D9D9] hover:bg-[#983232] text-[#0A3253]
            hover:text-white text-lg md:text-2xl font-bold px-3 py-2 md:px-5
            md:py-3 rounded-xl sm:rounded-2xl mt-6 sm:mt-10 cursor-pointer active:scale-95 duration-150 ease-in-out"
          >
            Hire Us
          </a>
        </div>
      </div>
    </div>
  );
}
