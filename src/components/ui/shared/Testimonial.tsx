import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import Container from "../Container";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";

const images = [
  {
    id: 1,
    src: "https://r2.erweima.ai/imgcompressed/img/compressed_b4b0fe5f13483d0500a81c915929f106.webp",
    alt: "Slide 1",
    name: "Tony Stark",
    title: "Marketing Manager",
    description:
      "The level of security provided by CypherPlay is unmatched. I feel confident using my card for both everyday purchases and travel. It's the peace of mind I was looking for.",
  },
  {
    id: 2,
    src: "https://media.licdn.com/dms/image/v2/D4D12AQFUrM6o_8m-WQ/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1705940547574?e=1730332800&v=beta&t=MlNxztddf7QhaANGuvOVSM15mDGa02gH4jYTkq2CViw",
    alt: "Slide 2",
    name: "Bruce Wayne",
    title: "Chief Technology Officer",
    description:
      "CypherPlay's user-friendly interface and robust features make it the best choice for managing my business expenses. I highly recommend it to anyone looking for a secure payment solution.",
  },
  {
    id: 3,
    src: "https://images.playground.com/431368d570ca4388b55d5efde628fda8.jpeg",
    alt: "Slide 3",
    name: "Diana Prince",
    title: "Human Resources Manager",
    description:
      "The level of security provided by CypherPlay is unmatched. I feel confident using my card for both everyday purchases and travel. It's the peace of mind I was looking for.",
  },
  {
    id: 4,
    src: "https://images.playground.com/431368d570ca4388b55d5efde628fda8.jpeg",
    alt: "Slide 4",
    name: "Clark Kent",
    title: "Public Relations Specialist",
    description:
      "CypherPlay's user-friendly interface and robust features make it the best choice for managing my business expenses. I highly recommend it to anyone looking for a secure payment solution.",
  },

  {
    id: 5,
    src: "https://images.playground.com/431368d570ca4388b55d5efde628fda8.jpeg",
    alt: "Slide 4",
    name: "Clark Kent",
    title: "Public Relations Specialist",
    description:
      "CypherPlay's user-friendly interface and robust features make it the best choice for managing my business expenses. I highly recommend it to anyone looking for a secure payment solution.",
  },
];

const Testimonial = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-16">Testimonials</h1>
      <Container>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          freeMode={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper text-white"
        >
          {images.map((item) => (
            <SwiperSlide className="mb-20">
              <div className="bg-[#ECF5FF] p-8">
                <div className="flex gap-1 items-center justify-center mb-8">
                  <FaStar className="size-6 text-[#FEC84B]" />
                  <FaStar className="size-6 text-[#FEC84B]" />
                  <FaStar className="size-6 text-[#FEC84B]" />
                  <FaStar className="size-6 text-[#FEC84B]" />
                  <FaRegStarHalfStroke className="size-6 text-[#F4E6C5]" />
                </div>
                <div className="text-center ">
                  <p className="text-[#818181] text-lg  mb-8">
                    {" "}
                    {item.description}
                  </p>
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="mx-auto rounded-full w-12 h-12 mt-8"
                  />
                  <p className="text-xl font-semibold  text-[#111827]">
                    {item.name}
                  </p>
                  <p className="text-base font-normal text-[#6B7280]">
                    {item.title}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default Testimonial;
