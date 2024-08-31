import Container from "../Container";
import { Button } from "../button";

const PostPropertyCTA = () => {
  return (
    <div className="bg-[#FDECE2] rounded-md flex flex-col lg:flex-row items-center justify-between gap-4 mt-12 -mb-12">
      <Container>
        <div className="w-full bg-[#FDF0E7] py-12">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-[64px]">
            <div className="w-full md:w-[784px]">
              <h2 className="font-montserrat text-[20px] font-semibold leading-[30px] text-center md:text-left text-[#101828]">
                Post your Property for free
              </h2>
              <p className="font-poppins text-[16px] font-normal leading-[24px] text-center md:text-left text-[#475467] mt-[8px]">
                List it on Your Propriety and get genuine leads
              </p>
            </div>
            <div>
              <Button className="py-4 px-7 bg-[#F06224] hover:bg-[#F06224] hover:text-white text-white">
                Post Property
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PostPropertyCTA;
