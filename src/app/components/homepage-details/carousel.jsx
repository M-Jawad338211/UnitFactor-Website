import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
export default function CardCarousel() {
  const cards = [
    {
      id: 1,
      type: "video",
      title: "Complete IT Solutions",
      videoUrl: "https://www.youtube.com/embed/47EBBIg977Q?si=c5hQewodfKyXBYKs",
    },
    {
      id: 2,
      type: "text",
      name: "Jawad Ahmad",
      designation: "CEO",
      description: `Their technical skills and project management of 
unitfactor are top-notch. From custom software
to backend integration, they handled everything 
professionally and on time`,
      icon: (
        <svg
          width="36"
          height="14"
          viewBox="0 0 46 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
        >
          <path
            d="M0 11.3547C0.362413 12.4199 1.12684 12.7873 2.24048 12.7861C14.5613 12.7671 26.8821 12.7742 39.203 12.7742C39.377 12.7742 39.551 12.7742 39.8222 12.7742C39.6266 12.9757 39.5006 13.1119 39.3686 13.2423C37.4389 15.1406 35.508 17.0401 33.576 18.9372C33.0611 19.4432 32.8967 20.0535 33.0911 20.7277C33.282 21.3889 33.7536 21.8108 34.4388 21.9577C35.1084 22.1011 35.6712 21.8807 36.1513 21.4091C37.9009 19.6873 39.6542 17.9691 41.4062 16.2497C42.7119 14.9676 44.0175 13.6855 45.3208 12.401C46.2256 11.5087 46.2292 10.4956 45.322 9.60328C42.2787 6.60888 39.2318 3.61685 36.1837 0.627192C35.3712 -0.169102 34.2864 -0.207022 33.5472 0.520544C32.7971 1.25878 32.8463 2.34183 33.6732 3.1559C35.5812 5.03525 37.4905 6.91223 39.4022 8.78802C39.5186 8.90178 39.653 8.99895 39.779 9.10322C39.767 9.1447 39.755 9.18499 39.743 9.22646C39.5786 9.22646 39.4142 9.22646 39.251 9.22646C26.9157 9.22646 14.5793 9.23357 2.24408 9.21461C1.12804 9.21224 0.363613 9.58076 0 10.6449C0 10.8819 0 11.1177 0 11.3547Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      id: 3,
      type: "svg",
      title: "UI/UX & Graphic Design",
      description:
        "Our creative team ensures every design is intuitive, attractive, and aligned with your identity.",
    },
  ];

  return (
    <div className="w-full bg-[url('/main.png')] bg-cover bg-center mx-auto py-12 px-4 sm:px-6">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className=" relative"
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="p-4 sm:p-6 md:p-10  min-h-[320px] sm:min-h-[360px] md:min-h-[400px] flex flex-col items-center justify-center text-center">
              {card.type === "video" && (
                <div className="w-full flex justify-center">
                  <iframe
                    src={card.videoUrl}
                    title={card.title}
                    className="w-full max-w-[600px] aspect-video "
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}

              {card.type === "text" && (
                <div className="flex flex-col items-center justify-center h-full">
                  <h3 className="text-xl sm:text-2xl md:text-3xl text-white font-bold mb-2">
                    {card.name}
                  </h3>
                  <p className="text-white/75 text-base sm:text-lg md:text-xl mb-4">
                    {card.designation}
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-white max-w-lg leading-relaxed">
                    {card.description}
                  </p>
                  <button className="flex items-center gap-2 mt-6 bg-[#0A3253] hover:bg-[#983232] text-white px-5 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base">
                    <span className="font-semibold">View Case Study</span>
                    {card.icon}
                  </button>
                </div>
              )}

              {card.type === "svg" && (
                <div className="flex flex-col items-center justify-center h-full">
                  <h3 className="text-xl sm:text-2xl md:text-3xl text-white font-bold mb-4">
                    {card.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-white max-w-lg leading-relaxed">
                    {card.description}
                  </p>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
