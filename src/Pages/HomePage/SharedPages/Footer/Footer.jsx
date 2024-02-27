import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="mt-5" style={{ background: "linear-gradient(90deg, #111c58 0, #5c2782 51%, #111c58)" }}>
        <footer className="text-white text-center text-lg-start">
          <div className="container p-4">
            <div className="row mt-4">
              <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">About company</h5>

                <p className="">
                  FutureGen IT Media Agency Established on 25 March 2023, FutureGen IT Media Agency stands as a beacon of
                  innovation and excellence in the creative media landscape.
                </p>

                <p className="">
                  With an unwavering commitment to delivering superior digital solutions, we redefine industry standards and
                  exceed client expectations.
                </p>

                <div className="mt-4">
                  <a type="button" className="">
                    <FaFacebook style={{ width: "25px", height: "25px", marginLeft: "15px", color: "white" }}></FaFacebook>
                  </a>

                  <a type="button" className="">
                    <FaInstagram style={{ width: "25px", height: "25px", marginLeft: "15px", color: "white" }}></FaInstagram>
                  </a>

                  <a type="button" className="">
                    <FaTwitter style={{ width: "25px", height: "25px", marginLeft: "15px", color: "white" }}></FaTwitter>
                  </a>

                  <a type="button" className="">
                    <FaYoutube style={{ width: "25px", height: "25px", marginLeft: "15px", color: "white" }}></FaYoutube>
                  </a>

                  <a type="button" className="">
                    <FaLinkedin style={{ width: "25px", height: "25px", marginLeft: "15px", color: "white" }}></FaLinkedin>
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4 pb-1">Search something</h5>

                <ul className="fa-ul">
                  <li className="mb-3">
                    <span className="fa-li">
                      <i className="fas fa-home"></i>
                    </span>
                    <span className="ms-2">Warsaw, 00-967, Poland</span>
                  </li>
                  <li className="mb-3">
                    <span className="fa-li">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <span className="ms-2">hellofuturegenmedia@gmail.com</span>
                  </li>
                  <li className="mb-3">
                    <span className="fa-li">
                      <i className="fas fa-phone"></i>
                    </span>
                    <span className="ms-2">+880 1310-112464</span>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">Opening hours</h5>

                <table className="table text-center text-white">
                  <tbody className="fw-normal">
                    <tr>
                      <td>Day</td>
                      <td>Time</td>
                    </tr>
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
