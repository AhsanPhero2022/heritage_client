const BookConsultation = () => {
  return (
    <div className="mx-auto px-[50px] md:px-[112px] w-full mb-[64px] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-[32px]">
      {/* Left Part */}
      <div className="w-full lg:w-2/3">
        <div className="flex items-center space-x-[16px] mb-[16px]">
          <div className="w-[51px] border-t-[4px] border-[#EE6611]"></div>
          <div className="text-[#EE6611] font-poppins text-[18px] font-semibold leading-[21.6px]">
            Meet the Team for Book consultation
          </div>
        </div>
        <div className="text-left text-[#111827] font-montserrat text-[40px] font-bold leading-[48px] mb-[24px]">
          Meet the stewards of your heritage journey
        </div>
        <div className="font-poppins text-left text-[#6B7280] text-[16px] font-medium leading-[24px] mb-[48px]">
          each member an embodiment of expertise and warmth, dedicated to
          guiding you home, every step of the way.
        </div>
        <button className="bg-[#0059B1] text-white font-montserrat text-[18px] font-semibold leading-[21.6px] px-[24px] py-[14px]">
          Book Consultation Now
        </button>
      </div>

      <div className="w-full lg:w-[384px] h-[304px]">
        <img
          src="https://propertyprofessional.co.za/wp-content/uploads/2023/07/Can-investment-properties-enable-you-to-retire.jpg"
          alt="Book Consultation"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default BookConsultation;
