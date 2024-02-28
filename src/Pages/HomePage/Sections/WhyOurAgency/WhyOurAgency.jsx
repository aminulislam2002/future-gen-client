import image from "../../../../assets/section/why-our-agency.png";

import "./WhyOurAgency.css";

const WhyOurAgency = () => {
  return (
    <div className="content-inner">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 h-100">
            <div className="d-flex justify-content-center align-items-center">
              <img src={image} alt="Why our agency?" className="img-fluid woa-image" />
            </div>
          </div>
          <div className="col-lg-6 h-100">
            <div className="section-head style-3 mb-4">
              <h2 className="title">Why Our Agency</h2>
              <div className="woa-separator gradient"></div>
            </div>
            <p className="woa-text">
              In dictum aliquam turpis lacinia iaculis. Fusce vel malesuada magna. Nulla vel maximus risus. Donec volutpat
              metus lacinia risus accumsan, ac bibendum libero efficitur. Pellentesque nec nisi sit amet magna tempus
              hendrerit ut a odio.
            </p>
            <p className="woa-text m-b30">
              Praesent rhoncus commodo tortor, id pulvinar nisl blandit at. Nulla facilisi. Quisque turpis ante, vehicula
              condimentum arcu.
            </p>
            <div className="row">
              <div className="col-sm-4 m-b30">
                <div className="woa-content-box text-center">
                  <div className="icon-content">
                    <h2 className="counter m-b0">
                      <span>10</span>
                    </h2>
                    <span className="sub-title">Satisfied Clients</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 m-b30">
                <div className="woa-content-box text-center">
                  <div className="icon-content">
                    <h2 className="counter m-b0">
                      <span>17</span>
                    </h2>
                    <span className="sub-title">Project Launched</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 m-b30">
                <div className="woa-content-box text-center">
                  <div className="icon-content">
                    <h2 className="counter m-b0">
                      <span>01</span>
                    </h2>
                    <span className="sub-title">Years Completed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyOurAgency;
