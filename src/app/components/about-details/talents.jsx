export default function Talents() {
  return (
    <div
      className="w-full h-full bg-cover bg-center py-16 px-4 md:px-8 lg:px-16"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      <div className="flex flex-col items-center justify-center h-full mt-10 md:mt-20">
        <div className="flex flex-col items-center text-center mt-8 mb-10">
          <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-snug max-w-[500px] lg:max-w-xl xl:max-w-2xl">
            We provide innovative design solutions & expert talents
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#CACACA] font-medium mt-4 max-w-lg">
            From a small team of five people to a leading global remote team of
            professional designers & developers that strive to develop valuable
            digital products for people worldwide.
          </p>

          <a
            href="/contacts"
            target="_blank"
            className="bg-[#D9D9D9] hover:bg-[#983232] text-[#0A3253] hover:text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold px-6 py-3 cursor-pointer rounded-2xl transition-all mt-8 active:scale-95 duration-150 ease-in-out"
          >
            Talk to our Experts
          </a>
        </div>
      </div>
    </div>
  );
}
