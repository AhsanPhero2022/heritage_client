import AboutBanner from "../components/ui/About/AboutBanner";
import BookConsultation from "../components/ui/About/BookConsultation";
import OurStory from "../components/ui/About/OurStory";
import OurTeam from "../components/ui/About/OurTeam";
import StateData from "../components/ui/shared/StateData";
import Testimonial from "../components/ui/shared/Testimonial";

const About = () => {
  return (
    <div>
      <AboutBanner />
      <StateData />
      <OurStory />
      <OurTeam />
      <BookConsultation />
      <Testimonial />
    </div>
  );
};

export default About;
