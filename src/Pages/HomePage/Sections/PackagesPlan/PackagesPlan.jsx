import "./PackagesPlan.css";

const PackagesPlan = () => {
  return (
    <div>
      <section className="content-inner">
        <div className="container">
          <div className="pricingtable-row">
            <div className="row gap-1">
              <div className="col-lg-4 col-md-6">
                <div className="m-b30">
                  <div>
                    <div>
                      <div>
                        <h3 className="title text-center">Basic Plan</h3>
                      </div>
                      <div className="icon-cell">
                        <img src="images/pricingtable/icon1.png" alt="" />
                      </div>
                    </div>
                    <div>
                      <h2 className="text-center price">
                        $49<small>/Month</small>
                      </h2>
                    </div>
                    <ul className="text-center text-capitalize">
                      <li className="list-item list-inline">Web Design - 1</li>
                      <li className="list-item list-inline">Language: JavaScript</li>
                      <li className="list-item list-inline">Library: JavaScript</li>
                      <li className="list-item list-inline">HTML/CSS</li>
                      <li className="list-item list-inline">SEO Friendly</li>
                      <li className="list-item list-inline">Performance Optimization</li>
                    </ul>
                    <div className="d-flex justify-content-center align-align-items-center">
                      <button className="btn-start-now">Start Now</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="m-b30">
                  <div>
                    <div>
                      <div>
                        <h3 className="title text-center">Standart Plan</h3>
                      </div>
                      <div className="icon-cell">
                        <img src="images/pricingtable/icon2.png" alt="" />
                      </div>
                    </div>
                    <div>
                      <h2 className="text-center price">
                        $99<small>/Month</small>
                      </h2>
                    </div>
                    <ul className="text-center text-capitalize">
                      <li className="list-item list-inline">Graphic Design </li>
                      <li className="list-item list-inline">Web Design</li>
                      <li className="list-item list-inline">UI/UX</li>
                      <li className="list-item list-inline">HTML/CSS</li>
                      <li className="list-item list-inline">SEO Marketing</li>
                      <li className="list-item list-inline">Business Analysis</li>
                    </ul>
                    <div className="d-flex justify-content-center align-align-items-center">
                      <button className="btn-start-now">Start Now</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="m-b30">
                  <div>
                    <div>
                      <div>
                        <h3 className="title text-center">Premium Plan</h3>
                      </div>
                      <div className="icon-cell">
                        <img src="images/pricingtable/icon3.png" alt="" />
                      </div>
                    </div>
                    <div>
                      <h2 className="text-center price">
                        $149<small>/Month</small>
                      </h2>
                    </div>
                    <ul className="text-center text-capitalize">
                      <li className="list-item list-inline">Graphic Design </li>
                      <li className="list-item list-inline">Web Design</li>
                      <li className="list-item list-inline">UI/UX</li>
                      <li className="list-item list-inline">HTML/CSS</li>
                      <li className="list-item list-inline">SEO Marketing</li>
                      <li className="list-item list-inline">Business Analysis</li>
                    </ul>
                    <div className="d-flex justify-content-center align-align-items-center">
                      <button className="btn-start-now">Start Now</button>
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

export default PackagesPlan;
