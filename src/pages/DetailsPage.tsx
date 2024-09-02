import location from "../assets/icons/fi-bs-marker.png";
import bed from "../assets/icons/bed.png";
import bathtub from "../assets/icons/bathtub.png";
import balcony from "../assets/icons/balcony.png";
import shelves from "../assets/icons/shelves.png";
import Container from "../components/ui/Container";
import Amenities from "../components/ui/PropertyDetails/Amenities";
import OtherServices from "../components/ui/shared/OtherServices";
import Properties from "../components/ui/shared/Properties";
import MultiRangeSlider from "../components/ui/MultiRangeSlider";
import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { TPropertyProps } from "../types";

const DetailsPage = () => {
  const [property, setProperty] = useState<TPropertyProps | null>(null);
  const [minProperty, setMinProperty] = useState<TPropertyProps | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await fetch(
          "https://sm-technology-server.vercel.app/properties"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: TPropertyProps[] = await response.json();

        // Find the property with the maximum price
        const maxPriceProperty = data.reduce((max, property) =>
          property.price > max.price ? property : max
        );
        const minPriceProperty = data.reduce((min, property) =>
          property.price < min.price ? property : min
        );

        // Store the max price property in the state
        setProperty(maxPriceProperty);
        setMinProperty(minPriceProperty);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, []);

  console.log(property?.price);
  console.log(minProperty);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="my-11">
      <Container>
        {/* //*Header  */}
        <div className="">
          <div className="flex flex-col lg:flex-row lg:items-center mb-2">
            <h1 className=" text-xl font-semibold text-[#010101]">
              {property?.name}
            </h1>
            <span className=" lg:ml-16 font-extrabold text-2xl">
              $ {property?.price}k
            </span>
          </div>
          <div className="flex items-center mb-8">
            <img src={location} alt="" className="size-4 mr-2" />
            <p className="text-[#606060] font-normal">{property?.location}</p>
          </div>
        </div>
        <div className="grid lg:grid-cols-3  gap-4 ">
          {/* //*Image and Overview */}
          <div className="col-span-2">
            {/* //*Image Section */}
            <div>
              <img src={property?.image} alt="image1" className=" w-full" />
              <div className="flex items-center gap-2 lg:gap-5 my-4 flex-wrap">
                <img
                  src={minProperty?.image}
                  alt="image1"
                  className="max-w-[70px] max-h-[40px] sm:max-w-[100px] sm:max-h-[80px]  md:max-w-[150px] md:max-h-[120px] xl:max-w-[200px] xl:max-h-[150px] max-auto"
                />
                <img
                  src={property?.image}
                  alt="image1"
                  className="max-w-[70px] max-h-[40px] sm:max-w-[100px] sm:max-h-[80px]  md:max-w-[150px] md:max-h-[120px] xl:max-w-[200px] xl:max-h-[150px] max-auto"
                />
                <div className="relative">
                  <img
                    src="https://okl.scene7.com/is/image/OKL/one%20kings%20lane_bunny%20williams_BEDROOM?wid=1066&op_sharpen=1"
                    alt="image1"
                    className="max-w-[70px] h-[40px] sm:max-w-[100px] sm:h-[80px] md:max-w-[150px] md:h-[90px] xl:max-w-[200px] xl:h-[110px] max-auto"
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    View more
                  </div>
                </div>
              </div>
            </div>
            {/* //*Overview */}
            <div className="my-8 px-4 lg:px-12 bg-[#F9FAFB] border border-[#E5E7EB] rounded py-8">
              <h1 className="text-2xl font-semibold">Overview</h1>
              <div className="grid w-full items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-4 border shadow-lg pt-4 px-4 rounded my-6">
                <p className="font-bold flex items-center mb-5">
                  <img src={bed} className="size-6" alt="" />
                  <span className="text-[#303030] font-bold">2 Beds</span>
                </p>
                <p className="font-bold flex items-center mb-5">
                  <img src={bathtub} className="size-6" alt="" />
                  <span className="text-[#303030] font-bold">2 Bath</span>
                </p>
                <p className="font-bold flex items-center mb-5">
                  <img src={balcony} className="size-6" alt="" />
                  <span className="text-[#303030] font-bold">2 Balcony</span>
                </p>
                <p className="font-bold flex items-center mb-5">
                  <img src={shelves} className="size-6" alt="" />
                  <span className="text-[#303030] font-bold">
                    Fully Furnished
                  </span>
                </p>
              </div>
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-5">
                  <div>
                    <p className="text-sm text-[#5C5C5C]">Carpet Area</p>
                    <h1 className="text-[#101010]">2000 sqft</h1>
                    <p className="text-sm text-[#535353]">$ 225/sqft</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#5C5C5C]">Floor</p>
                    <h1 className="text-[#101010]">
                      Second (Out of 6th floor)
                    </h1>
                  </div>
                  <div>
                    <p className="text-sm text-[#5C5C5C]">Transaction Type</p>
                    <h1 className="text-[#101010]">Ready to move</h1>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Lift</p>
                    <h1 className="text-[#101010]">1</h1>
                  </div>
                </div>
              </div>
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  <div>
                    <p className="text-[#5C5C5C]">Facing</p>
                    <h1 className="text-[#101010]">North - East</h1>
                  </div>
                  <div>
                    <p className="text-[#5C5C5C]">Additional Rooms</p>
                    <h1 className="text-[#101010]">
                      1 servant room & 1 gust room
                    </h1>
                  </div>
                  <div>
                    <p className="text-[#5C5C5C]">Age of construction</p>
                    <h1 className="text-[#101010]">New Construction</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* //*property value and map start */}
          <div className=" col-span-3 lg:col-span-1">
            <div className="bg-[#ECF5FF] p-6">
              <p className="font-normal text-[#6B7280]">Property Value</p>
              <h1 className="text-[#252323] text-2xl font-bold mt-2 mb-4">
                $ 300k - $ 310k
              </h1>
              <p className="font-medium text-[#6B7280] mb-8">
                Your bid can not be than 10% of the property Minimum value.
              </p>
              <div>
                <p className="text-sm text-[#252323] font-normal mb-1">Min</p>
                <div className="px-4 py-3 bg-white mb-2">
                  <span className="text-[#252323] font-normal">
                    $ {minProperty?.price}k
                  </span>
                </div>
                <p className="text-sm text-[#252323] font-normal mb-1">Max</p>
                <div className="px-4 py-3 bg-white">
                  <span className="text-[#252323] font-normal">
                    $ {property?.price}k
                  </span>
                </div>
              </div>
              <div className="mt-6">
                <MultiRangeSlider
                  min={280}
                  max={305}
                  minVal={280}
                  maxVal={305}
                />
              </div>
              <div className="text-center ">
                <Link to="/manage-rentals/testimonials">
                  <Button variant={"outline"} className="px-6 py-3">
                    Add a Testimonial
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mt-6  ">
              <div>
                <iframe
                  className="h-[300px] md:h-[400px] w-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.7585546584483!2d90.37906557487813!3d23.756004191582336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c752e6a245a9%3A0x5b5b0754d1d7fc4d!2zTmV3IE1hcmtldCwgRGhha2EgUGFyaywgRGhha2EsIEJhbmcgMTIwOQ!5e0!3m2!1sen!2sbd!4v1693085560040!5m2!1sen!2sbd"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <Amenities />
        <OtherServices />
        <Properties title="Others Nearby Properties" />
      </Container>
    </div>
  );
};

export default DetailsPage;
