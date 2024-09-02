import search from "../../../assets/icons/propertySearch.png";
import player from "../../../assets/icons/player.png";
import { Button } from "../button";
import Container from "../Container";
import { Link } from "react-router-dom";

const PropertySection = () => {
  const properties = [
    {
      id: 1,
      title: "Efficient and Transparent Home Buying Solutions",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      imageUrl:
        "https://w0.peakpx.com/wallpaper/460/608/HD-wallpaper-hotel-room-hotel-beautiful-art-house-romantic-black-yellow-luxury-rooms-bedrooms-decor-nice-beige-style.jpg",
      extendImageUrl:
        "https://dropinblog.net/34246798/files/featured/Brilliant_Tips_for_Stone_Types_Newbies.jpg",
    },
    {
      id: 2,
      title: "Efficient and Transparent Home Buying Solutions",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      imageUrl:
        "https://www.mydomaine.com/thmb/J9stD5A6cnbHUYbyYKYRfWqZw2w=/1080x0/filters:no_upscale():strip_icc()/181219536_173148221261634_2809155301053617388_n-55b543c4aa494c6a830c7afc167bf7bd.jpeg",
      extendImageUrl:
        "https://www.checkatrade.com/blog/wp-content/uploads/2023/11/Yellow-bedroom-ideas-blue-and-yellow.jpg",
    },
    {
      id: 3,
      title: "Efficient and Transparent Home Buying Solutions",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      imageUrl:
        "https://st.hzcdn.com/simgs/pictures/bedrooms/corsica-model-master-bedroom-masterpiece-design-group-img~b5b1d08a00f5641d_14-8525-1-b0bb72d.jpg",
      extendImageUrl:
        "https://cdn.decoist.com/wp-content/uploads/2015/01/Add-a-couple-of-throw-pillows-to-infuse-yellow-zest-to-the-room.jpg",
    },
  ];

  return (
    <div className="my-16">
      <Container>
        {properties.map((property, index) => (
          <div
            key={property.id}
            className={`flex flex-col lg:flex-row lg:justify-between mb-56 ${
              property.id === 2
                ? "lg:flex-row-reverse mb-10 lg:mt-64"
                : index === 2
                ? "-mt-28 "
                : ""
            }`}
          >
            <div className="lg:w-1/2 mb-4 lg:mb-0 relative mx-auto">
              <img
                src={property.imageUrl}
                alt="Property"
                className="w-[280px] h-[180px] sm:min-w-[358px] sm:min-h-[300px] max-w-[458px] max-h-[400px] xl:w-[458px] xl:h-[400px] object-cover rounded-[8px] shadow-lg"
              />
              <img
                src={property.extendImageUrl}
                alt="Property-Extend"
                className={`w-[220px] h-[130px] sm:min-w-[352px] sm:min-h-[240px] max-w-[452px] max-h-[240px] xl:w-[452px] xl:h-[240px] object-cover rounded-[8px] shadow-lg absolute left-[60px] bottom-[-104px] sm:left-[60px] sm:-bottom-[104px] md:left-[60px] md:-bottom-[104px] lg:left-[80px] lg:-bottom-[104px] xl:left-[104px]xl-bottom-[104px] ${
                  property.id === 2
                    ? " lg:left-[40px] lg:-top-[110px] xl:left-[104px] xl:-top-[110px]"
                    : ""
                }`}
              />
              <img
                src={player}
                alt="player"
                className={`absolute top-[150px] left-[20px] sm:top-[230px] sm:left-[360px] md:top-[230px] md:left-[360px] lg:top-[200px] lg:left-[320px] xl:left-[422px] h-[72px] ${
                  property.id === 2
                    ? `
                    sm:left-[35px] sm:top-[-20px] md:left-[35px] md:top-[20px] lg:left-[40px] lg:-top-[20px] xl:left-[70px] xl:top-[-20px]
                    `
                    : property.id === 1 || property.id === 3
                    ? "xl:top-[228px]"
                    : "xl:top-[2280px]"
                }`}
              />
            </div>
            <div
              className={`lg:w-1/2 lg:pl-8 text-center lg:text-left mt-32 lg:mt-0 `}
            >
              <div className="flex items-center">
                <hr className="w-[51px] bg-[#F06711] text-[#F06711] border-[#F06711] h-[3px]" />

                <span className="text-[#F06711] text-lg font-semibold ml-2">
                  Property buying
                </span>
              </div>
              <h3 className="text-[40px] leading-[52px] font-bold text-[#111827] mt-4 mb-6">
                {property.title}
              </h3>
              <p className="text-[#667085] mb-12">{property.description}</p>
              <Link to="allProperties">
                <Button className="bg-[#E6EFF7] border border-[#E6EFF7] hover:bg-[#E6EFF7] hover:border-[#E6EFF7] text-[#00437C] px-3 py-5 flex justify-center items-center rounded-[8px] mx-auto lg:mx-0">
                  <span>
                    <img src={search} alt="" />
                  </span>
                  <span className="ml-1 md:text-base">Find Property</span>
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default PropertySection;
