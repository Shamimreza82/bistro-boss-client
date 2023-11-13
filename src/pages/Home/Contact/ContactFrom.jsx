import React from "react";
import SectionTitel from "../../../components/SectionTitel";

const ContactFrom = () => {
  return (
    <div>
      <SectionTitel
        subHeading={"Send Us a Message"}
        heading={"CONTACT FORM"}
      ></SectionTitel>
      <div className="md:w-3/5  bg-[#F3F3F3] m-auto my-10">
        <form action="" className="p-20">
          <div className="flex gap-5">
            <div className="flex-1">
                <label className="block">Name*</label>
                <input 
                className="py-2 border rounded-sm pl-3 mt-1 w-full"
                type="text"
                name="name"
                placeholder="Enter Your name"
                id="" />
            </div>
            <div className="flex-1">
                <label className="block">Email*</label>
                <input 
                className="py-2 border rounded-sm pl-3 mt-1 w-full "
                type="Email"
                name="name"
                placeholder="Enter Your Email"
                id="" />
            </div>
          </div>
          <div className="flex-1 mt-3">
                <label className="block">Phone*</label>
                <input 
                className="py-2 border rounded-sm pl-3 mt-1 w-full "
                type="Email"
                name="name"
                placeholder="Enter Your Phone"
                id="" />
            </div>
            <div>
            <label className="block mt-5">Message*</label>
            <textarea className="pl-3 pt-2 mt-1 w-full" name="" id="" placeholder="Your text hear"></textarea>
            </div>
            <div className="mt-24">
                <input type="submit" value="Submit" />
            </div>
        </form>
      </div>
    </div>
  );
};

export default ContactFrom;
