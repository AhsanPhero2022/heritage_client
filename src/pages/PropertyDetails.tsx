import Amenities from "../components/ui/PropertyDetails/Amenities";
import PropertyDetailsAll from "../components/ui/PropertyDetails/PropertyDetailsAll";
import OtherServices from "../components/ui/shared/OtherServices";

const PropertyDetails = () => {
  return (
    <div>
      <PropertyDetailsAll />
      <Amenities />
      <OtherServices />
    </div>
  );
};

export default PropertyDetails;
