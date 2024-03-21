import Header from "../Sections/Header/Header";
import OurFetures from "../Sections/OurFetures/OurFetures";
import PackagesPlan from "../Sections/PackagesPlan/PackagesPlan";
import AboutOurAgency from "../Sections/AboutOurAgency/AboutOurAgency"

const Home = () => {
  return (
    <div>
      <Header></Header>
      <AboutOurAgency></AboutOurAgency>
      <OurFetures></OurFetures>
      <PackagesPlan></PackagesPlan>
    </div>
  );
};

export default Home;
