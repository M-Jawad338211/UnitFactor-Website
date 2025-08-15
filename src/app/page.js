import Header from "./header/page";

export default function Home() {
  return (
    <div>
      <Hiring />
      <Solutions />
    </div>
  );
}
function Hiring() {
  return (
    <div
      className="w-full h-full bg-cover bg-center"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      <Header />
      <div>
        <div className="flex flex-col items-center justify-center h-full mt-20">
          <div className="flex items-center gap-3">
            <p className="text-[20px] font-bold text-white">
              Web Development &amp; UI/UX Design
            </p>

            {["SaaS", "Web 3.0", "AI"].map((label) => (
              <span
                key={label}
                className="border border-white text-white px-4 py-1 rounded-full"
              >
                {label}
              </span>
            ))}
          </div>
          <div className="flex flex-col items-center mt-8 mb-10">
            <p className="text-[40px] font-bold text-white text-center max-w-4xl">
              Crafting Unique, Purpose-Driven Designs That Capture Attention,
              Build Trust, and Turn Visitors into Loyal Customers
            </p>
            <button className="bg-[#D9D9D9] text-[#0A3253] text-[40px] font-bold px-6 py-3 rounded-2xl mt-10 cursor-pointer">
              Hire Us
            </button>
            <p className="text-[20px] font-bold text-white max-w-xs ml-auto mt-4 ">
              Subscribe to our services on a monthly basis and get an
              experienced product designer that will integrate in your team like
              an in-house professional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Solutions() {
  return (
    <div className="flex flex-col p-28 w-full h-full bg-[url('/Rectangle.png')] bg-no-repeat bg-center bg-cover">
      <p className="text-[64px] font-normal text-white">OUR SOLUTION</p>
      <p className="text-[24px] font-medium text-white max-w-5xl">
        We offer a wide range of digital services designed to elevate your
        business. From custom website development to complete IT solutions, our
        team delivers innovative, scalable, and results-driven products tailored
        to your needs.
      </p>
    </div>
  );
}
