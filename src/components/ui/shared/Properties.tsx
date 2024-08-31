import { Swiper, SwiperSlide } from "swiper/react";
import imageCount from "../../../assets/icons/Image count.png";
import rectangle from "../../../assets/icons/Rectangle 26.png";
import location from "../../../assets/icons/fi-bs-marker.png";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import Container from "../Container";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { PropertyProps } from "../../../types";

const Properties = ({
  title = "",
  allProperty = true,
}: {
  title?: string;
  allProperty?: boolean;
}) => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/properties");
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
    <div className="mt-20">
      <Container>
        <div className="flex justify-between sm:items-center mb-6 flex-col sm:flex-row">
          <h1 className="text-3xl text-[#111827] font-semibold mb-3 sm:mb-0">
            {title}
          </h1>
          {allProperty ? (
            <Link to="/allProperties">
              <p className="text-[#0059B1] font-semibold text-lg underline cursor-pointer ">
                See all propeety
              </p>
            </Link>
          ) : (
            ""
          )}
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },

            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },

            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          {properties.map((property: PropertyProps) => (
            <SwiperSlide className="" key={property.id}>
              <div>
                <div className="bg-[#F9FAFB] max-w-385px">
                  <div className="max-h-[200px]">
                    <img
                      className="w-full max-h-[200px]"
                      src={property.image}
                      alt={property.name}
                    />

                    <img
                      src={imageCount}
                      className="w-10 h-5 -mt-[30px] ml-2"
                      alt=""
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-center my-3">
                      <p className="bg-[#C5E2FF] text-[#00254A] text-sm px-2 py-1 rounded">
                        Apartment
                      </p>

                      <div className="flex items-center">
                        <img src={rectangle} className="w-2 h-2 mr-1 " alt="" />
                        <p className="text-[#111827]">Ready to Move</p>
                      </div>
                    </div>
                    <hr className=" bg-[#D8DCE1] text-[#D8DCE1] border-[#D8DCE1] mx-auto" />
                    <h3 className="text-xl font-semibold text-[#111827] mt-1">
                      {property.name}
                    </h3>
                    <p className="flex items-center gap-1 text-[#6B7280] font-normal mt-1">
                      <img src={location} alt="" className="size-4" />
                      {property.location}
                    </p>
                    <p className="font-semibold text-2xl mt-5">
                      ${property.price}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default Properties;
