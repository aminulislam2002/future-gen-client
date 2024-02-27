import bg5 from "../../../../assets/bg/bg5.png";
import bg6 from "../../../../assets/bg/bg6.png";

import "./Header.css";

const Header = () => {
  return (
    <div className="">
      <div
        className="banner bg-primary"
        style={{
          backgroundImage: `url(${bg5}), url(${bg6}), linear-gradient(90deg, #111c58 0, #5c2782 51%, #111c58)`,
        }}
      >
        <div className="container">
          <div className="z-[99] position-relative" style={{ paddingTop: "200px" }}>
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="banner-content text-white">
                  <h6 className="sub-title text-warning">We Are Product Designer From Bangladesh</h6>
                  <h1 className="m-b20">We Design Interfaces That Users Love</h1>
                  <p className="m-b30">
                    Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque vitae ante at elit fringilla ac
                    at purus.
                  </p>
                  <button className="gradient text-white fw-bold text-decoration-none border-none border-0 rounded-2 py-3 px-5">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="col-md-6">
                <div>{/* <img src={bg5} alt="" /> */}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
