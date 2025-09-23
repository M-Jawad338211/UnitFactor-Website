export default function Animation() {
  return (
    <div className="flex flex-col w-full h-full items-center justify-center text-center bg-[url('/animation-bg.png')] bg-no-repeat bg-center bg-cover overflow-hidden px-4 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-16 md:py-20 xl:py-28">
      <h2 className="text-2xl   md:text-5xl font-normal leading-snug md:leading-14 lg:leading-[150%] tracking-normal text-white max-w-sm md:max-w-lg ">
        Turning projects into trusting partnerships
      </h2>

      <div className="scroll-container mt-8 sm:mt-12 w-full overflow-hidden">
        <div className="scroll-track track-1">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="scroll-item">
              <span>
                <img
                  src="Frame.png"
                  className="w-24 sm:w-32 md:w-40 lg:w-48 object-contain"
                  alt="logo"
                />
              </span>
            </div>
          ))}
        </div>

        <div className="scroll-track track-2">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="scroll-item">
              <span>
                <img
                  src="Frame.png"
                  className="w-24 sm:w-32 md:w-40 lg:w-48 object-contain"
                  alt="logo"
                />
              </span>
            </div>
          ))}
        </div>

        <div className="scroll-track track-3">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="scroll-item">
              <span>
                <img
                  src="Frame.png"
                  className="w-24 sm:w-32 md:w-40 lg:w-48 object-contain"
                  alt="logo"
                />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
