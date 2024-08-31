import downArrowBlue from "../../../assets/icons/downArrowBlue.png";
import downArrowOrange from "../../../assets/icons/downArrowOrange.png";
import Container from "../Container";

const StateData = () => {
  const states = [
    {
      count: "2k+",
      bgColor: "bg-[#FDF0E7]",
      textColor: "text-[#D95D0F]",
      description: "New Flat Listed",
      viewAllColor: "text-[#EE6611]",
      iconColor: downArrowOrange,
    },
    {
      count: "2k+",
      bgColor: "bg-[#ECF5FF]",
      textColor: "text-[#0051A1]",
      description: "New Flat Listed",
      viewAllColor: "text-[#0059B1]",
      iconColor: downArrowBlue,
    },
    {
      count: "2k+",
      bgColor: "bg-[#FDF0E7]",
      textColor: "text-[#D95D0F]",
      description: "New Flat Listed",
      viewAllColor: "text-[#EE6611]",
      iconColor: downArrowOrange,
    },
    {
      count: "2k+",
      bgColor: "bg-[#ECF5FF]",
      textColor: "text-[#0051A1]",
      description: "New Flat Listed",
      viewAllColor: "text-[#0059B1]",
      iconColor: downArrowBlue,
    },
  ];

  return (
    <div className="my-16 w-full">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[32px] mx-auto">
          {states.map((state, index) => (
            <div
              key={index}
              className={`${state.bgColor} flex flex-col p-0 lg:min-w-[230px] min-h-[155px] lg:max-w-[280px] lg:w-full w-[280px] h-[185px] mx-auto`}
            >
              <div
                className={`${state.textColor} font-montserrat font-bold text-left text-[40px] leading-[48.76px] ml-[24px] mt-[24px]`}
              >
                {state.count}
              </div>
              <div className="font-poppins text-left text-[#1F2937] text-[16px] leading-[24px] ml-[24px] mt-1">
                {state.description}
              </div>
              <div className="flex justify-between items-center mt-[32px] mx-[24px]">
                <div
                  className={`${state.viewAllColor} font-poppins text-[16px] leading-[24px] underline`}
                >
                  view all
                </div>
                <div className={`w-[32px] h-[32px] border-t`}>
                  <img src={`${state.iconColor}`} alt="icon" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default StateData;
