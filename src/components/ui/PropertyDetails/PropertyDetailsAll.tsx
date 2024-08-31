import location from "../../../assets/icons/fi-bs-marker.png";

import bed from "../../../assets/icons/bed.png";
import bathtub from "../../../assets/icons/bathtub.png";
import balcony from "../../../assets/icons/balcony.png";
import shelves from "../../../assets/icons/shelves.png";

import Container from "../Container";
import MultiRangeSlider from "../MultiRangeSlider";

const PropertyDetailsAll = () => {
  return (
    <div className="my-11">
      <Container>
        {/* //*Header  */}
        <div className="">
          <div className="flex flex-col lg:flex-row lg:items-center mb-2">
            <h1 className=" text-xl font-semibold text-[#010101]">
              3 BHK Builder Floor for Sale in Site Ram Bazar Hyderabad
            </h1>
            <span className=" lg:ml-16 font-extrabold text-2xl">$ 300k</span>
          </div>
          <div className="flex items-center mb-8">
            <img src={location} alt="" className="size-4 mr-2" />
            <p className="text-[#606060] font-normal">
              Meadowshire Park, Greenfield, USA
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-3  gap-4 ">
          {/* //*Image and Overview */}
          <div className="col-span-2">
            {/* //*Image Section */}
            <div>
              <img
                src="https://blog.burtonacoustix.com/wp-content/uploads/2023/12/rippyfairy_hotel_room_with_sound_wave_on_windows_b416a12f-9faa-4f0a-b37d-87e98ad088ed-1024x574.png"
                alt="image1"
                className=" w-full"
              />
              <div className="flex items-center gap-2 lg:gap-5 my-4 flex-wrap">
                <img
                  src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/585385994.jpg?k=9c28ef0fa548707cf93afee1b775822d92306257c7bfb8821d6d332705aa76c7&o=&hp=1"
                  alt="image1"
                  className="max-w-[70px] max-h-[40px] sm:max-w-[100px] sm:max-h-[80px]  md:max-w-[150px] md:max-h-[120px] xl:max-w-[200px] xl:max-h-[150px] max-auto"
                />
                <img
                  src="https://fhfurnishings.com/wp-content/uploads/2019/02/LSX-045-Fess-BAcker-Double-Tree-1.jpg"
                  alt="image1"
                  className="max-w-[70px] max-h-[40px] sm:max-w-[100px] sm:max-h-[80px]  md:max-w-[150px] md:max-h-[120px] xl:max-w-[200px] xl:max-h-[150px] max-auto"
                />
                <div className="relative">
                  <img
                    src="https://thechatwalny.agencydominion.net/uploads/2024/06/The-Chatwal-Luxury-Collection-Hotel-New-York-Deluxe-Double-Beds-01.jpg"
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
                  <span className="text-[#252323] font-normal">$ 280k</span>
                </div>
                <p className="text-sm text-[#252323] font-normal mb-1">Max</p>
                <div className="px-4 py-3 bg-white">
                  <span className="text-[#252323] font-normal">$ 320k</span>
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
                <button className="px-6 py-3 bg-[#0059B1] rounded-md text-white btn">
                  Bid Property
                </button>
              </div>
            </div>
            <div className="mt-6  ">
              <img
                className="w-full h-[354px] rounded"
                src="https://img.freepik.com/premium-vector/abstract-city-map-with-pins-navigation-app_95169-1513.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PropertyDetailsAll;
