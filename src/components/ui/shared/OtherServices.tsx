import icons from "../../../assets/icons/Icons.png";
import Container from "../Container";

const services = [
  {
    id: 1,
    title: "Advanced Property Search",
    description:
      "Effortlessly find your dream property with advanced search filters.",
  },
  {
    id: 2,
    title: "Virtual Tours and Multimedia",
    description:
      "Explore properties through immersive virtual tours and HD photos.",
  },
  {
    id: 3,
    title: "Secure Online Transactions",
    description:
      "Ensure secure transactions and e-sign documents seamlessly online.",
  },
];

const OtherServices = () => {
  return (
    <div>
      <h1 className="my-16 text-center text-[40px] font-semibold">
        Other Services
      </h1>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((services) => (
            <div
              key={services.id}
              className=" max-w-[384px] mx-auto md:mx-0 bg-[#ECF5FF] p-6 flex justify-between items-start gap-5"
            >
              <div className="h-12 min-w-12 bg-[#EE6611] rounded-[4px] flex justify-center items-center">
                <img src={icons} alt="" />
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-[#111827]">
                  {services.title}
                </h1>
                <p className="text-[#6B7280] text-base mt-4 font-medium">
                  {services.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default OtherServices;
