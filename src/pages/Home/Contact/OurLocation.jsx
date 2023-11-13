import React from "react";
import SectionTitel from "../../../components/SectionTitel";
import { FaPhoneAlt, FaLocationArrow, FaStopwatch   } from "react-icons/fa";

const OurLocation = () => {
  return (
    <div>
      <SectionTitel
        subHeading={"Visit Us"}
        heading={"OUR LOCATION"}
      ></SectionTitel>
      <div className="w-3/5 m-auto grid grid-cols-3 gap-4">
        <div className=" border my-5">
          <div className="bg-[#D1A054] text-center py-3 flex justify-center text-white text-xl"><FaPhoneAlt></FaPhoneAlt></div>
          <div className="mx-3 bg-[#F3F3F3] py-10 text-center mb-3">
            <p>Phone</p>
            <h1>+38(012) 34 56 789</h1>
          </div>
        </div>
        <div className=" border my-5">
          <div className="bg-[#D1A054] text-center py-3 flex justify-center text-white text-xl"><FaLocationArrow></FaLocationArrow></div>
          <div className="mx-3 bg-[#F3F3F3] py-10 text-center mb-3">
            <p>ADDRESS</p> 
            <h1>+38(012) 34 56 789</h1>
          </div>
        </div>
        <div className=" border my-5">
          <div className="bg-[#D1A054] text-center py-3 flex justify-center text-white text-xl"><FaStopwatch></FaStopwatch></div>
          <div className="mx-3 bg-[#F3F3F3] py-10 text-center mb-3">
            <p>WORKING HOURS</p>
            <h1>+38(012) 34 56 789</h1>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default OurLocation;
