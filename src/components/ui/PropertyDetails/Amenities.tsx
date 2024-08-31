import Container from "../Container";
//Icons
import power from "../../../assets/icons/power.png";
import lift from "../../../assets/icons/lift.png";
import club from "../../../assets/icons/clubHouse.png";
import gymnasium from "../../../assets/icons/gym.png";
import park from "../../../assets/icons/park.png";
import reservedParking from "../../../assets/icons/parking.png";
import security from "../../../assets/icons/securities.png";
import water from "../../../assets/icons/water.png";
import privateGarden from "../../../assets/icons/privateGarden.png";
import vaastuCompliant from "../../../assets/icons/vaastuCompliant.png";
import ServiceGoodsLift from "../../../assets/icons/ServiceGoodsLift.png";
import VisitorParking from "../../../assets/icons/VisitorParking.png";

import intercom from "../../../assets/icons/intercom.png";
import maintenance from "../../../assets/icons/maintenance.png";
import waste from "../../../assets/icons/waste.png";
import laundry from "../../../assets/icons/laundry.png";
import internet from "../../../assets/icons/internet.png";
import dthTelevision from "../../../assets/icons/dthTelevision.png";
import pipegas from "../../../assets/icons/Pipegas.png";
import jogging from "../../../assets/icons/jogging.png";
import outdoor from "../../../assets/icons/outdoor.png";
import earlyLearning from "../../../assets/icons/earlyLearning.png";
import kidsPlay from "../../../assets/icons/kidsPlay.png";
import indoor from "../../../assets/icons/indoor.png";

const amenitiesList = [
  { name: "Power Back Up", icon: power },
  { name: "Lift", icon: lift },
  { name: "Club House", icon: club },
  { name: "Gymnasium", icon: gymnasium },
  { name: "Park", icon: park },
  { name: "Reserved Parking", icon: reservedParking },
  { name: "Security", icon: security },
  { name: "Water Storage", icon: water },
  { name: "Private Terrace/Garden", icon: privateGarden },
  { name: "Vaastu Compliant", icon: vaastuCompliant },
  { name: "Service/Goods Lift", icon: ServiceGoodsLift },
  { name: "Visitor Parking", icon: VisitorParking },
  { name: "Intercom Facility", icon: intercom },
  { name: "Maintenance Staff", icon: maintenance },
  { name: "Waste Disposal", icon: waste },
  { name: "Laundry Service", icon: laundry },
  { name: "Internet/Wi-Fi Connectivity", icon: internet },
  { name: "DTH Television Facility", icon: dthTelevision },
  { name: "Piped Gas", icon: pipegas },
  { name: "Jogging and Strolling Track", icon: jogging },
  { name: "Outdoor Tennis Courts", icon: outdoor },
  { name: "Early Learning Centre", icon: earlyLearning },
  { name: "Kids Play Area", icon: kidsPlay },
  { name: "Indoor Squash & Badminton Courts", icon: indoor },
];

const Amenities = () => {
  return (
    <Container>
      <div className="p-6 bg-[#F9FAFB] rounded border border-[#F9FAFB] shadow">
        <h2 className="text-2xl font-semibold mb-8">Amenities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-6">
          {amenitiesList.map((amenity, index) => (
            <div key={index} className="flex items-center p-4 rounded ">
              <div>
                <img src={amenity.icon} alt="" className="size-10" />
              </div>
              <span className="text-[#101010]">{amenity.name}</span>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Amenities;
