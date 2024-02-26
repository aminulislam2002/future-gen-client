import { Outlet } from "react-router-dom";
import NavBar from "../../Pages/HomePage/SharedPages/NavBar/NavBar";
import Footer from "../../Pages/HomePage/SharedPages/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
