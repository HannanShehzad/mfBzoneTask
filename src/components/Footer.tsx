import React from "react";
import "./Styles/footer.css";

const Footer = () => {
  return (
    <footer className="footerWrap bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 px-4 py-6 lg:py-8">
          <div className="text-center md:text-left md:col-span-1">
            <div className="footerheading text-center md:text-left flex items-center h-full">
              <h2 className="font-bold">Blue Book Estimator</h2>
            </div>
            <div className="footertxt">
              <ul className="">
                <li className="mb-4">
                  The Blue Book Estimator ®, is a professional cost estimation
                  consultancy specializing in providing detailed construction
                  cost estimates. Our cost consultants provide our clients, both
                  public and private institutions with different office
                  locations throughout the United States with expert,
                  data-driven guidance on their construction projects.
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center md:text-left md:col-span-1">
            <div className="footerheading text-center flex items-center h-full">
              <h2 className="font-bold text-center">Navigation</h2>
            </div>
            <ul className="">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  <div className="footertxt">
                    <ul className="">
                      <h3 className="mb-4 font-bold">Service</h3>
                    </ul>
                  </div>
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  <div className="footertxt">
                    <ul className="">
                      <h3 className="mb-4 font-bold">Projects</h3>
                    </ul>
                  </div>
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  <div className="footertxt">
                    <ul className="">
                      <h3 className="mb-4 font-bold">Contact Us</h3>
                    </ul>
                  </div>
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  <div className="footertxt">
                    <ul className="">
                      <h3 className="mb-4 font-bold">About us</h3>
                    </ul>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-left md:col-span-1">
            <div className="footerheading text-center flex items-center h-full">
              <h2 className="font-bold">Contact</h2>
            </div>
            <ul className="">

              <div className="flex flex-row mt-8 mb-8 text-center">
              <img src="./icons/pin.png" alt="" className="headerIcon " />
              <p
                style={{ fontSize: "20px", color: "white" }}
                className=" mr-2 sm:mr-5"
              >
                <span style={{ fontSize: "24px" }} className="font-bold">
                  Head Office:
                </span>
                102-12, <br /> Arlington, VA 22201 United States
              </p>

              </div>

              <li className="mb-9">
                <div className="flex flex-row">
                  <img
                    src="./icons/phone-call.png"
                    alt=""
                    className="headerIcon mr-7 "
                  />
                  <p
                    style={{
                      fontSize: "24px",
                      color: "white",
                      marginTop: "5px",
                      marginRight: "10px",
                    }}
                  >
                    +1 917 300 1079
                  </p>
                </div>
              </li>
              <li className="mb-9">
                <div className="flex flex-row">
                  <img
                    src="./icons/whitemail.png"
                    alt=""
                    className="headerIcon mr-2"
                  />
                  <p
                    style={{
                      fontSize: "24px",
                      color: "white",
                      marginTop: "5px",
                    }}
                  >
                    bluebookestimator@gmail.com
                  </p>
                </div>
              </li>
              <li className="">
                <div className="flex flex-row">
                  <img
                    src="./icons/linkedin2.png"
                    alt=""
                    className="headerIcon mr-7"
                  />
                  <img
                    src="./icons/whatsapp2.png"
                    alt=""
                    className="headerIcon mr-7"
                  />
                  <img
                    src="./icons/insta2.png"
                    alt=""
                    className="headerIcon mr-7"
                  />
                  <img
                    src="./icons/fb2.png"
                    alt=""
                    className="headerIcon mr-7"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
