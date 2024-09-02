import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import Container from "../Container";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { TTestimonial } from "../../../types";

const Testimonial = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://sm-technology-server.vercel.app/testimonials"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
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
          {properties.map((item: TTestimonial) => (
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
                    alt="image"
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
