import React from "react";
import "./Styles/topHeader.css";


const TopHeader = () => {
  return (
    <div className=" flex flex-row justify-between lg:justify-end items-center lg:space-x-2 sm:h-16 md:h-20 lg:h-24">

      {/* Show on large screens only */}
      <div className="hidden lg:flex items-center w-full lg:w-auto mb-2 lg:mb-0 flex-shrink-0">
        <img src="./icons/phone.png" alt="" className="headerIcon mr-2" />
        <p style={{
                      fontSize: "32px",
                      color: "#337AB7",
                      marginTop: "5px",
                    }} className="mr-2 sm:mr-5">+1 917 300 1079</p>
      </div>

      {/* Show on large screens only */}
      <div className="hidden lg:flex items-center w-full lg:w-auto mb-2 lg:mb-0 flex-shrink-0">
        <img src="./icons/mail.png" alt="" className="headerIcon mr-2" />
        <p style={{
                      fontSize: "32px",
                      color: "#337AB7",
                      marginTop: "5px",
                    }} className="text-sm md:text-base mr-2 sm:mr-3 md:mr-5">
          bluebookestimators@gmail.com
        </p>
      </div>

      {/* Show on large screens only */}
      <div className="hidden lg:flex items-center w-full lg:w-auto mb-2 lg:mb-0 justify-between lg:justify-start flex-shrink-0">
        <img src="./icons/whatsapp.png" alt="" className="headerIcon mr-4" />
        <img src="./icons/Vector.png" alt="" className="headerIcon mr-4" />
        <img src="./icons/instagram.png" alt="" className="headerIcon mr-4" />
        <img src="./icons/facebook.png" alt="" className="headerIcon mr-4" />
      </div>

    </div>
  );
};

export default TopHeader;
