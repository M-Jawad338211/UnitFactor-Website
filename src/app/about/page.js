import Image from "next/image";

export default function AboutPage() {
  return (
    <div>
      <Talents />
      <Team />
      <Recognition />
      <Members />
    </div>
  );
}

function Talents() {
  return (
    <div
      className="w-full h-full bg-cover bg-center pt-30"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      <div>
        <div className="flex flex-col items-center justify-center h-full mt-20">
          <div className="flex flex-col items-center mt-8 mb-10">
            <p className="text-[40px] font-bold text-white text-center max-w-2xl">
              We provide innovative design solutions & expert talents
            </p>
            <p className="text-[#CACACA] text-xl font-medium items-center text-center max-w-lg mt-4">
              From a small team of five people to a leading global remote team
              of professional designers & developers that strive to develop
              valuable digital products for people worldwide.
            </p>
            <a href="#" target="_blank">
              <button className="bg-[#D9D9D9] hover:bg-[#983232] text-[#0A3253] hover:text-white text-3xl font-bold px-6 py-3 rounded-2xl mt-10 cursor-pointer">
                Talk to our Experts{" "}
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Team() {
  return (
    <div className="flex p-24 w-full h-full items-center justify-center text-center bg-[url('/animation-bg.png')] bg-no-repeat bg-center bg-cover">
      <Image
        src="/Mask-group.png"
        alt="Mask group illustration"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-full object-contain"
      />
    </div>
  );
}

function Recognition() {
  const strategies = [
    "Flexible collaboration & fixed monthly rate",
    "Guaranteed on-time deliverables",
    "Hiring system with immediate start",
  ];
  return (
    <section className=" p-24 w-full h-full items-center justify-center text-center bg-[url('/recognition-bg.png')] bg-no-repeat bg-center bg-cover">
      <div className="flex items-center justify-center text-center">
        <h2 className="text-4xl md:text-5xl max-w-4xl text-center font-bold leading-[150%] tracking-[0] text-[#E8E8E8] ">
          Today Unitfactor stands on market- leading positions and is recognized
          globally
        </h2>
      </div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-4 items-stretch mt-10">
        <div className="relative w-full h-auto rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/av-lab-3.png"
            alt="Project Showcase"
            fill
            className="object-cover rounded-2xl"
          />
        </div>

        <div className="w-full h-auto bg-[url('/choices.png')] bg-no-repeat bg-center bg-cover p-8 rounded-2xl shadow-lg space-y-6 flex flex-col justify-between">
          <div className="space-y-6">
            <h3 className="text-[40px] text-left text-[#E8E8E8] font-bold leading-[150%] tracking-[0]">
              Unitfactor is your perfect choice in terms of:
            </h3>

            <ul className="space-y-4 ">
              {strategies.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Image
                    src={"/check.png"}
                    alt="Check Icon"
                    width={15}
                    height={10}
                    className="mt-1"
                  />
                  <span className="text-[#E8E8E8] font-medium tracking-[0] leading-[150%]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <button className="group self-start flex items-center cursor-pointer mt-4 px-6 py-3 rounded-[30px] bg-white text-[28px] text-[#0A3253] font-bold hover:bg-[#0A3253] hover:text-white transition w-auto">
            <span>Discover More About Us</span>
            <svg
              width="46"
              height="22"
              viewBox="0 0 46 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#0A3253] ml-4 group-hover:text-white "
            >
              <g clipPath="url(#clip0_1168_69)">
                <path
                  d="M0 11.3547C0.362413 12.4199 1.12684 12.7873 2.24048 12.7861C14.5613 12.7671 26.8821 12.7742 39.203 12.7742C39.377 12.7742 39.551 12.7742 39.8222 12.7742C39.6266 12.9757 39.5006 13.1119 39.3686 13.2423C37.4389 15.1406 35.508 17.0401 33.576 18.9372C33.0611 19.4432 32.8967 20.0535 33.0911 20.7277C33.282 21.3889 33.7536 21.8108 34.4388 21.9577C35.1084 22.1011 35.6712 21.8807 36.1513 21.4091C37.9009 19.6873 39.6542 17.9691 41.4062 16.2497C42.7119 14.9676 44.0175 13.6855 45.3208 12.401C46.2256 11.5087 46.2292 10.4956 45.322 9.60328C42.2787 6.60888 39.2318 3.61685 36.1837 0.627192C35.3712 -0.169102 34.2864 -0.207022 33.5472 0.520544C32.7971 1.25878 32.8463 2.34183 33.6732 3.1559C35.5812 5.03525 37.4905 6.91223 39.4022 8.78802C39.5186 8.90178 39.653 8.99895 39.779 9.10322C39.767 9.1447 39.755 9.18499 39.743 9.22646C39.5786 9.22646 39.4142 9.22646 39.251 9.22646C26.9157 9.22646 14.5793 9.23357 2.24408 9.21461C1.12804 9.21224 0.363613 9.58076 0 10.6449C0 10.8819 0 11.1177 0 11.3547Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0_1168_69">
                  <rect
                    width="46"
                    height="22"
                    fill="white"
                    transform="matrix(1 0 0 -1 0 22)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center mt-6 gap-4">
        <div className="bg-gradient-to-r from-[#2B2B2B] to-[#983232] hover:from-[#0A3253] hover:to-[#0A3253] rounded-[30px] flex items-center justify-center h-[120px] w-[630px] cursor-pointer">
          <p className="text-[#E8E8E8] font-bold text-[40px] leading-[150%] tracking-[0] text-center">
            7+ Years In Business
          </p>
        </div>
        <div className="group bg-white hover:bg-[#0A3253] rounded-[30px] flex items-center justify-center h-[120px] w-[630px] cursor-pointer">
          <p className="text-black group-hover:text-white font-bold text-[40px] leading-[150%] tracking-[0] text-center">
            170+ Successful Projects
          </p>
        </div>
      </div>
    </section>
  );
}

function Members() {
  return (
    <div className="p-24 w-full h-full items-center justify-center text-center bg-black">
      <div className="flex flex-col max-w-7xl gap-2 p-10 mx-auto bg-[url('/members-bg.png')] bg-cover bg-center bg-no-repeat  justify-center rounded-[30px]  items-stretch mt-10">
        <div className="flex gap-2 justify-center mt-10">
          <div>
            <Image
              src={"/team-member.png"}
              alt="team members"
              height={86}
              width={86}
            />
          </div>
          <div>
            <Image
              src={"/team-member.png"}
              alt="team members"
              height={86}
              width={86}
            />
          </div>
          <div>
            <Image
              src={"/team-member.png"}
              alt="team members"
              height={86}
              width={86}
            />
          </div>
          <div>
            <Image
              src={"/team-member.png"}
              alt="team members"
              height={86}
              width={86}
            />
          </div>
          <div>
            <Image
              src={"/team-member.png"}
              alt="team members"
              height={86}
              width={86}
            />
          </div>
          <div>
            <Image
              src={"/team-member.png"}
              alt="team members"
              height={86}
              width={86}
            />
          </div>
          <div>
            <Image
              src={"/team-member.png"}
              alt="team members"
              height={86}
              width={86}
            />
          </div>
        </div>
        <p className="text-[64px] font-bold text-white">55+ Team Members</p>
      </div>
    </div>
  );
}
