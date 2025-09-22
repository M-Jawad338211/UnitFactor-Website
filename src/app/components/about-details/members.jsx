import Image from "next/image";

export default function Members() {
  return (
    <div className="w-full px-6 md:px-28 pt-4 pb-6 lg:pt-12 lg:pb-20 xl:pt-16 xl:pb-24 bg-black">
      <div className="   items-center justify-center text-center ">
        <div className="flex flex-col  gap-6 p-6 sm:p-10 xl:p-40 mx-auto bg-[url('/members-bg.png')] bg-cover bg-center bg-no-repeat justify-center rounded-[20px] sm:rounded-[30px] items-center mt-6 sm:mt-10">
          <div className="flex flex-wrap gap-4 justify-center">
            {Array(7)
              .fill(0)
              .map((_, i) => (
                <Image
                  key={i}
                  src="/team-member.png"
                  alt="team member"
                  height={86}
                  width={86}
                  className="w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24"
                />
              ))}
          </div>

          <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl  font-bold text-white mt-6">
            55+ Team Members
          </p>
        </div>
      </div>
    </div>
  );
}
