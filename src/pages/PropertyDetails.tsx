import Amenities from "../components/ui/PropertyDetails/Amenities";
import PropertyDetailsAll from "../components/ui/PropertyDetails/PropertyDetailsAll";
import OtherServices from "../components/ui/shared/OtherServices";
import Properties from "../components/ui/shared/Properties";

const PropertyDetails = () => {
  return (
    <div>
      <PropertyDetailsAll />
      <Amenities />
      <OtherServices />
      <Properties title="Others Nearby Properties" />
    </div>
  );
};

export default PropertyDetails;
