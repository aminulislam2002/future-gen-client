import image from "../../../../assets/section/why-our-agency.png";

import "./AboutOurAgency.css";

const AboutOurAgency = () => {
  return (
    <div className="content-inner">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 h-100">
            <div className="d-flex justify-content-center align-items-center">
              <img src={image} alt="About our agency?" className="img-fluid woa-image" />
            </div>
          </div>
          <div className="col-lg-6 h-100">
            <div className="mb-30">
              <h2 className="section-title">About Our Agency</h2>
              <div className="woa-separator gradient"></div>
            </div>
            <p className="description">
              In dictum aliquam turpis lacinia iaculis. Fusce vel malesuada magna. Nulla vel maximus risus. Donec volutpat
              metus lacinia risus accumsan, ac bibendum libero efficitur. Pellentesque nec nisi sit amet magna tempus
              hendrerit ut a odio.
            </p>
            <p className="description mb-30">
              Praesent rhoncus commodo tortor, id pulvinar nisl blandit at. Nulla facilisi. Quisque turpis ante, vehicula
              condimentum arcu.
            </p>
            <div className="row">
              <div className="col-sm-4 mb-30">
                <div className="woa-content-box text-center">
                  <div className="icon-content">
                    <h2 className="counter m-b0">
                      <span>30</span>
                    </h2>
                    <span className="sub-section-title">Satisfied Clients</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 mb-30">
                <div className="woa-content-box text-center">
                  <div className="icon-content">
                    <h2 className="counter m-b0">
                      <span>33</span>
                    </h2>
                    <span className="sub-section-title">Project Launched</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 mb-30">
                <div className="woa-content-box text-center">
                  <div className="icon-content">
                    <h2 className="counter m-b0">
                      <span>01</span>
                    </h2>
                    <span className="sub-section-title">Years Completed</span>
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

export default AboutOurAgency;
