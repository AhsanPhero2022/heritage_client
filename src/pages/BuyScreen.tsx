import BuyScreenBanner from "../components/ui/BuyScreen/BuyScreenBanner";
import PostPropertyCTA from "../components/ui/BuyScreen/PostProperty";
import PropertySearchSection from "../components/ui/BuyScreen/PropertySearchSection";
import Properties from "../components/ui/shared/Properties";
import StateData from "../components/ui/shared/StateData";
import Testimonial from "../components/ui/shared/Testimonial";

const BuyScreen = () => {
  return (
    <div>
      <BuyScreenBanner />
      <PropertySearchSection />
      <StateData />
      <Properties title="Popular Properties" />
      <Properties title="New Listed Properties" />
      <Testimonial />
      <PostPropertyCTA />
    </div>
  );
};

export default BuyScreen;
