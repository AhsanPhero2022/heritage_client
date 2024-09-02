import Container from "../Container";
import { Button } from "../button";
import backgroundVideo from "../../../assets/videos/thumbnail.mp4";
import search from "../../../assets/icons/search.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative h-screen lg:h-[600px] flex justify-center items-center text-center">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={backgroundVideo}
        autoPlay
        loop
        muted
      ></video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>
      <Container className="relative z-20">
        <div className="flex justify-center items-center text-center flex-col">
          <h2 className="text-white text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold sm:w-[70%] md:w-[60%] leading-[60px] md:leading-[70px] lg:leading-[75px]">
            Your Portal to India's Exquisite Real Estate
          </h2>

          <p className="text-[#F9FAFB] mt-8 sm:text-sm md:text-base lg:text-lg mb-12">
            Seamlessly connecting you to the heartbeat of India's prime
            properties.
          </p>
          <div>
            <Link to="/buyScreen">
              <Button className="bg-[#005EAE] border border-[#005EAE] hover:bg-[#005EAE] hover:border-[#005EAE] text-white px-4 py-7 flex justify-center items-center rounded-[8px]">
                <span>
                  <img src={search} alt="" />
                </span>
                <span className="ml-1 md:text-lg">Find Property</span>
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
