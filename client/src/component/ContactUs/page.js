import { Button, Card, CardFooter, Image, Input } from "@nextui-org/react";
import Link from "next/link";

import React from "react";
import { IoCallSharp } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const ContactUs = () => {
  const icons = {
    phone: <IoCallSharp className="text-gray-900" size={40} />,
    mail: <SiGmail className="text-success" size={40} />,
    location: <FaLocationDot className="text-gray-700" size={40} />,
  };
  return (
    <div className="text-black mt-10 p-10">
      <div className="flex justify-center text-center text-4xl mb-20 text-black">
        Contact Us
      </div>

      <div className=" flex justify-center mt-20">
        <div className="p-10 border mt-10">
          {icons.phone}
          BY PHONE
          <br />
          +977 980000000
          <br />
          +0155 00000000
        </div>
        <div className="p-10 mt-10">
          {icons.mail} MAIL
          <br />
          123alka@gmail.com
        </div>
        <div className="p-10 mt-10 mb-20">
          {icons.location}LOCATION
          <br />
          Bangalore,Akshya Nagar
          <br /> 1st Block 1st Cross.
        </div>
      </div>
      <div className="bg-black w-full h-72  flex gap-40 pl-20 p-10">
        <div className="flex flex-col gap-2 w-1/3">
          <div className="text-white w-1/3 text-4xl">DeliveryX</div>
          <div className="text-white">
            <p>About US</p>
            <p>Location </p>
            <p>Delivery Charges</p>
            <p>Insurance</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 w-1/3">
          <div className="text-white">Get Help</div>
          <div className="text-white">
            <p>Contact US</p>
            <p>How to use ?</p>
            <p>Phone</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 w-1/3">
          <div className="text-white">Get in touch</div>
          <div className="flex gap-2">
            <p>
              <FaFacebook className="text-white " size={20} />
            </p>
            <p>
              <FaInstagramSquare className="text-white " size={20} />
            </p>
            <p>
              <BsTwitterX className="text-white " size={20} />
            </p>
            <p>
              <FaLinkedin className="text-white " size={20} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
