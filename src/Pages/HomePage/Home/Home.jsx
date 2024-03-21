import Header from "../Sections/Header/Header";
import PackagesPlan from "../Sections/PackagesPlan/PackagesPlan";
import AboutOurAgency from "../Sections/AboutOurAgency/AboutOurAgency";
import OurFeatures from "../Sections/OurFetures/OurFetures";
import OurExpertise from "../Sections/OurExpertise/OurExpertise";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <AboutOurAgency></AboutOurAgency>
      <OurFeatures></OurFeatures>
      <OurExpertise></OurExpertise>
      {/* <PackagesPlan></PackagesPlan> */}
    </div>
  );
};

export default Home;
