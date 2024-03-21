import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

import bg_image_one from "../../../assets/bg-images/bg-image-one.png";
import bg_image_two from "../../../assets/bg-images/bg_image_two.png";

const Footer = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${bg_image_one}), url(${bg_image_two}), linear-gradient(90deg, #111c58 0, #5c2782 51%, #111c58)`,
        }}
      >
        <footer className="text-white text-center text-lg-start">
          <div className="container p-4">
            <div className="row mt-4">
              <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">About company</h5>

                <p>
                  FutureGen IT Media Agency Established on 25 March 2023, FutureGen IT Media Agency stands as a beacon of
                  innovation and excellence in the creative media landscape.
                </p>

                <p>
                  With an unwavering commitment to delivering superior digital solutions, we redefine industry standards and
                  exceed client expectations.
                </p>

                <div className="mt-4">
                  <a type="button">
                    <FaFacebook style={{ width: "25px", height: "25px", color: "white" }}></FaFacebook>
                  </a>

                  <a type="button">
                    <FaInstagram style={{ width: "25px", height: "25px", marginLeft: "15px", color: "white" }}></FaInstagram>
                  </a>

                  <a type="button">
                    <FaTwitter style={{ width: "25px", height: "25px", marginLeft: "15px", color: "white" }}></FaTwitter>
                  </a>

                  <a type="button">
                    <FaYoutube style={{ width: "25px", height: "25px", marginLeft: "15px", color: "white" }}></FaYoutube>
                  </a>

                  <a type="button">
                    <FaLinkedin style={{ width: "25px", height: "25px", marginLeft: "15px", color: "white" }}></FaLinkedin>
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4 pb-1">Contact us</h5>

                <ul className="ps-0">
                  <li className="d-flex align-items-center gap-2 mb-3">
                    <div>
                      <IoIosCall style={{ width: "25px", height: "25px", color: "white" }}></IoIosCall>
                    </div>
                    <span>
                      +88 01310-112464
                      <br />
                      +88 01719-006757
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2 mb-3">
                    <div>
                      <MdEmail style={{ width: "25px", height: "25px", color: "white" }}></MdEmail>
                    </div>
                    <span>
                      hellofuturegenmedia@gmail.com <br />
                      aminulislamemon2002@gmail.com
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2 mb-3">
                    <div>
                      <IoLocationSharp style={{ width: "25px", height: "25px", color: "white" }}></IoLocationSharp>
                    </div>
                    <span>
                      12, Mirpur Road Dhanmondi, <br></br> Dhaka-1209
                    </span>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">Opening hours</h5>

                <div className="table-responsive">
                  <table className="table text-center text-white">
                    <thead className="thead-dark">
                      <tr>
                        <th scope="col">Day</th>
                        <th scope="col">Time</th>
                      </tr>
                    </thead>
                    <tbody className="fw-normal">
                      <tr>
                        <td>Sun - Thu</td>
                        <td>9am - 10pm</td>
                      </tr>
                      <tr>
                        <td>Friday - Saturday</td>
                        <td>3pm - 11pm</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center p-3">
            © 2024 Copyright:
            <a className="text-white ms-1" href="/">
              FutureGen IT Media
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
