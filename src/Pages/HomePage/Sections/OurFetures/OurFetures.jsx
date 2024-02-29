import { FcIdea } from "react-icons/fc";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { FaRegFileCode } from "react-icons/fa";
import { GiSubmarineMissile } from "react-icons/gi";

import "./OurFetures.css";

import our_fetures_image from "../../../../assets/section/our-fetures.png";

const OurFeatures = () => {
  return (
    <div>
      <section className="content-inner bg-white">
        <div className="container">
          <div className="text-center mb-40">
            <h2 className="section-title">Our Features</h2>
            <div className="of-separator gradient"></div>
          </div>
          <div className="row align-items-center about-wrapper-2">
            <div className="col-lg-4">
              <div className="row">
                <div className="col-lg-12 col-md-6">
                  <div className="position-relative mb-50 d-flex gap-3">
                    <div>
                      <div className="icon-bx-sm gradient2 shadow-primary mb-20 rounded-circle">
                        <FcIdea style={{ fontSize: "30px", color: "#fff" }} />
                      </div>
                    </div>
                    <div className="overflow-hidden">
                      <h4 className="title text-capitalize">Idea &amp; Analysis</h4>
                      <p className="description">
                        Praesent tincidunt congue est ut hendrerit. Pellentesque et eros sit amet ipsum venenatis.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 col-md-6">
                  <div className="position-relative mb-50 d-flex gap-3">
                    <div>
                      <div className="icon-bx-sm gradient2 shadow-primary mb-20 rounded-circle">
                        <FaRegFileCode style={{ fontSize: "30px", color: "#fff" }} />
                      </div>
                    </div>
                    <div className="overflow-hidden">
                      <h4 className="title text-capitalize">Designing</h4>
                      <p className="description">
                        Praesent tincidunt congue est ut hendrerit. Pellentesque et eros sit amet ipsum venenatis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text-center mb-30">
                <img src={our_fetures_image} className="img-fluid" alt="Our Fetures" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="row">
                <div className="col-lg-12 col-md-6">
                  <div className="position-relative mb-50 d-flex gap-3">
                    <div>
                      <div className="icon-bx-sm gradient2 shadow-primary mb-20 rounded-circle">
                        <LiaLaptopCodeSolid style={{ fontSize: "30px", color: "#fff" }} />
                      </div>
                    </div>
                    <div className="overflow-hidden">
                      <h4 className="title text-capitalize">Development</h4>
                      <p className="description">
                        Praesent tincidunt congue est ut hendrerit. Pellentesque et eros sit amet ipsum venenatis.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-6">
                  <div className="position-relative mb-50 d-flex gap-3">
                    <div>
                      <div className="icon-bx-sm gradient2 shadow-primary mb-20 rounded-circle">
                        <GiSubmarineMissile style={{ fontSize: "30px", color: "#fff" }} />
                      </div>
                    </div>
                    <div className="overflow-hidden">
                      <h4 className="title text-capitalize">Testing &amp; Launching</h4>
                      <p className="description">
                        Praesent tincidunt congue est ut hendrerit. Pellentesque et eros sit amet ipsum venenatis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurFeatures;
