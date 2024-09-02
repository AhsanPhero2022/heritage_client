import { Link } from "react-router-dom";
import imageCount from "../assets/icons/Image count.png";
import { FiLoader } from "react-icons/fi";
import location from "../assets/icons/fi-bs-marker.png";
import Container from "../components/ui/Container";
import { Button } from "../components/ui/button";
import { BsTextarea } from "react-icons/bs";
import { VscLayoutStatusbar } from "react-icons/vsc";
import { useEffect, useState } from "react";
import { PropertyProps } from "../types";
import HomeLoanSlider from "../components/ui/HomeLoanSlider";
import Testimonial from "../components/ui/shared/Testimonial";

const AllProperties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://sm-technology-server.vercel.app/properties"
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
    <div className="my-20">
      <Container>
        <div className="flex justify-between sm:items-center mb-6 flex-col sm:flex-row">
          <h1 className="text-3xl text-[#111827] font-semibold mb-3 sm:mb-0">
            All Properties
          </h1>
        </div>
        <div className="">
          {properties.map((property: PropertyProps) => (
            <div key={property._id}>
              <div className="bg-[#F9FAFB] grid lg:grid-cols-12 my-8">
                <div className="max-h-[200px] lg:col-span-4 ">
                  <img
                    className="w-full lg:w-80 max-h-[200px]"
                    src={property.image}
                    alt={property.name}
                  />

                  <img
                    src={imageCount}
                    className="w-10 h-5 -mt-[30px] ml-2"
                    alt=""
                  />
                </div>
                <div className="p-4 lg:col-span-8 ">
                  <div className="flex justify-between items-center my-3">
                    <p className="text-3xl font-bold ">{property.name}</p>

                    <p className="text-3xl font-bold">${property.price}</p>
                  </div>

                  <div className="flex justify-between items-center">
                    <p className="flex items-center gap-1 text-[#6B7280] font-normal mt-1">
                      <img src={location} alt="" className="size-4" />
                      {property.location}
                    </p>
                    <Link to={`/propertyDetails/${property._id}`}>
                      <Button variant={"outline"}>Bid Now</Button>
                    </Link>
                  </div>
                  <div className="flex justify-start items-center">
                    <p className="w-[150px]">Property details</p>
                    <hr className=" bg-yellow-500 w-full text-[#D8DCE1] border-[#D8DCE1] mx-auto" />
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1">
                      <FiLoader className="w-8 h-8 bg-orange-500 p-1 rounded" />
                      <p>
                        Total Area <br />
                        <span className="text-sm flex-none">891 sqft</span>
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <BsTextarea className="w-8 h-8 bg-orange-500 p-1 rounded" />
                      <p>
                        Total Area <br />
                        <span className="text-sm flex-none">Ready to move</span>
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <VscLayoutStatusbar className="w-8 h-8 bg-orange-500 p-1 rounded" />
                      <p>
                        Total Area <br />
                        <span className="text-sm flex-none">891 sqft</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <HomeLoanSlider />
      </Container>
      <Testimonial />
    </div>
  );
};

export default AllProperties;
