import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Container from "../ui/Container";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { PiHandPeace } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="bg-blue-50 text-gray-600">
      <Container>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="lg:grid lg:grid-cols-10  gap-8 md:px-8">
            {/* //*Company Details */}
            <div className=" lg:col-start-1 lg:col-end-4 mb-10 lg:mb-0">
              <Link to="/" className="cursor-pointer ">
                <img src={logo} className="w-[53px] h-20" alt="" />
              </Link>
              <p className="ml-3 text-base text-[#475467] mt-4">
                Design amazing digital experiences that create more happy in the
                world.
              </p>
            </div>
            <div className=" lg:col-start-5 lg:col-end-11 ">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-2 lg:justify-items-end ">
                {/* Product Items */}
                <div className="md:col-span-1 lg:col-span-2 mb-10 lg:mb-0">
                  <h3 className="text-sm font-semibold text-gray-400 uppercase">
                    Product
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li className="hover:underline cursor-pointer text-base">
                      Overview
                    </li>
                    <li className="hover:underline cursor-pointer text-base">
                      Features
                    </li>
                    <li className="hover:underline cursor-pointer text-base">
                      Solutions
                    </li>
                    <li className="hover:underline cursor-pointer text-base">
                      Tutorials
                    </li>
                    <li className="hover:underline cursor-pointer text-base">
                      Pricing
                    </li>
                    <li className="hover:underline cursor-pointer text-base">
                      Releases
                    </li>
                  </ul>
                </div>
                {/* Company Items */}
                <div className="md:col-span-1 lg:col-span-2 mb-10 lg:mb-0">
                  <h3 className="text-sm font-semibold text-gray-400 uppercase">
                    Company
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li className="hover:underline cursor-pointer text-base">
                      About us
                    </li>
                    <li className="hover:underline cursor-pointer text-base">
                      Careers
                    </li>
                    <li className="hover:underline cursor-pointer text-base">
                      Press
                    </li>
                    <li className="hover:underline cursor-pointer text-base">
                      News
                    </li>
                    <li className="hover:underline cursor-pointer text-base">
                      Media kit
                    </li>
                    <li className="hover:underline cursor-pointer text-base">
                      Contact
                    </li>
                  </ul>
                </div>
                {/* Resources Items */}
                <div className="md:col-span-1 lg:col-span-2 mb-10 lg:mb-0">
                  <h3 className="text-sm font-semibold text-gray-400 uppercase">
                    Resources
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li className="hover:underline cursor-pointer text-base">
                      Blog
                    </li>
                    <li className="hover:underline cursor-pointer text-base">
                      Newsletter
                    </li>
                    <li className="hover:underline cursor-pointer text-base">
                      Events
                    </li>
                    <li className="hover:underline cursor-pointer text-base">
                      Help centre
                    </li>
                    <li className="hover:underline cursor-pointer text-base">
                      Tutorials
                    </li>
                    <li className="hover:underline cursor-pointer text-base">
                      Support
                    </li>
                  </ul>
                </div>
                {/* Social Items */}
                <div className="md:col-span-1 lg:col-span-2 mb-10 lg:mb-0">
                  <h3 className="text-sm font-semibold text-gray-400 uppercase">
                    Social
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li className="hover:underline cursor-pointer text-base">
                      Twitter
                    </li>
                    <li className="hover:underline cursor-pointer text-base">
                      LinkedIn
                    </li>
                    <li className="hover:underline cursor-pointer text-base">
                      Facebook
                    </li>
                    <li className="hover:underline cursor-pointer text-base">
                      GitHub
                    </li>
                    <li className="hover:underline cursor-pointer text-base">
                      AngelList
                    </li>
                    <li className="hover:underline cursor-pointer text-base">
                      Dribbble
                    </li>
                  </ul>
                </div>
                {/* Legal Items */}
                <div className="md:col-span-1 lg:col-span-2 mb-10 lg:mb-0">
                  <h3 className="text-sm font-semibold text-gray-400 uppercase">
                    Legal
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li className="hover:underline cursor-pointer text-base">
                      Terms
                    </li>
                    <li className="hover:underline cursor-pointer text-base">
                      Privacy
                    </li>
                    <li className="hover:underline cursor-pointer text-base">
                      Cookies
                    </li>
                    <li className="hover:underline cursor-pointer text-base">
                      Licenses
                    </li>
                    <li className="hover:underline cursor-pointer text-base">
                      Settings
                    </li>
                    <li className="hover:underline cursor-pointer text-base">
                      Contact
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* //*Date company and social */}
        <hr className="w-full mx-auto mt-20 bg-[#CEE7FF] text-[#CEE7FF] border-[#CEE7FF] h-[2px]" />
        <div className="sm:flex justify-between items-center py-8">
          <div className="text-center text-gray-400 mb-5 sm:mb-0">
            © 2024 Heritage- Nest. All rights reserved.
          </div>

          <div className="flex space-x-4 text-center justify-center ">
            <span className="cursor-pointer">
              <FaTwitter className="text-[#0059B1] text-2xl" />
            </span>
            <span className="cursor-pointer">
              <FaLinkedin className="text-[#0059B1] text-2xl" />
            </span>
            <span className="cursor-pointer">
              <FaFacebook className="text-[#0059B1] text-2xl" />
            </span>
            <span className="cursor-pointer">
              <PiHandPeace className="text-[#0059B1] text-2xl" />
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
