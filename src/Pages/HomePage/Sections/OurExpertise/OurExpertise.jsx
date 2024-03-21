import sm_al_amin_saikat from "../../../../assets/Expertise/saikat.jpg";
import fardin_hassan from "../../../../assets/Expertise/fardin.jpg";
import nuhad_sayeed_khan from "../../../../assets/Expertise/nuhad.jpg";
import aminul_islam from "../../../../assets/Expertise/aminul.jpg";
import "./OurExpertise.css";

const OurExpertise = () => {
  return (
    <div className="content-inner dlab-section">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="section-title">Our Expertise</h2>
          <div className="of-separator gradient"></div>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="expertise-card">
              <img src={fardin_hassan} className="expertise-image" alt="Fardin Hassan" />
              <div className="expertise-details">
                <h3 className="dlab-name title">Fardin Hassan</h3>
                <span className="sub-title">UI/UX Designer</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="expertise-card">
              <img src={sm_al_amin_saikat} className="expertise-image" alt="S M Al-Amin Saikat" />
              <div className="expertise-details">
                <h3 className="dlab-name title">S M Al-Amin Saikat</h3>
                <span className="sub-title">Senior Developer</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="expertise-card">
              <img src={aminul_islam} className="expertise-image" alt="Aminul Islam" />
              <div className="expertise-details">
                <h3 className="dlab-name title">Aminul Islam</h3>
                <span className="sub-title">Senior Designer</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="expertise-card">
              <img src={nuhad_sayeed_khan} className="expertise-image" alt="Nuhad Sayeed Khan" />
              <div className="expertise-details">
                <h3 className="dlab-name title">Nuhad Sayeed Khan</h3>
                <span className="sub-title">Cybersecurity Specialists</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurExpertise;
