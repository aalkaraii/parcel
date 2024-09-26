import React from "react";
import Image from "next/image";

import { Button, Input } from "@nextui-org/react";
import CustomNavbar from "@/component/NavBar/page";
import AboutUs from "@/component/AboutUs/page";
import ContactUs from "@/component/ContactUs/page";
import FeedBack from "@/component/FeedBack/page";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="relative h-full w-full  bg-gradient-to-r from-blue-300 to-white ">
      <CustomNavbar></CustomNavbar>
      <div className="flex h-full items-center justify-between  ">
        <div className="text-white text-4xl ml-24">
          <div className="mb-8 ml-10">
            <div className="flex flex-col mt-10 justify-center text-black items-start">
              Send Your Goods with
              <br /> DeliveryX
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex gap-2">
              <div className="circle flex flex-col items-center justify-center">
                <div className="bg-black h-4 w-4 rounded-full flex items-center justify-center">
                  <div className="rounded-full bg-white h-2 w-2 items-center"></div>
                </div>
                <div className="line h-20  bg-slate-500 w-[1px] "></div>

                <div className="bg-black h-4 w-4 rounded flex items-center justify-center">
                  <div className="rounded-full bg-white h-2 w-2 items-center"></div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                  <p className="text-gray-400 text-sm ">
                    <Input
                      className="focus:outline-none border-b border-gray-400 w-full mt-1 mb-2 text-xs rounded-sm p-3"
                      placeholder="Enter location"
                    />
                  </p>
                  <div>
                    <p className="text-gray-400 text-sm ">
                      <Input
                        className="focus:outline-none border-b border-gray-400 w-full mb-1 mt-2 text-xs rounded-sm p-3"
                        placeholder="Enter destination"
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 ml-9">
            <Button className="border-2 shadow-md bg-transparent border-white p-4 ">
              <div className="bg-transparent text-black rounded-md p-2  ">
                {" "}
                <Link href="#">See Prices</Link>
              </div>
            </Button>
          </div>
        </div>

        <div className=" w-1/2">
          <Image
            src="/parcel.jpg"
            width={600}
            height={500}
            alt="Home Image"
            className=" mt-16 p-10 rounded"
          />
        </div>
      </div>
      <div
        id="about"
        className="h-full bg-gradient-to-r from-blue-300 to-white"
      >
        <AboutUs />
      </div>
      <div
        id="feedback"
        className="h-full bg-gradient-to-r from-blue-300 to-white mt-10"
      >
        <FeedBack />
      </div>
      ``
      <div
        id="contact"
        className="h-full bg-gradient-to-r from-blue-300 to-white mt-10"
      >
        <ContactUs />
      </div>
    </div>
  );
};

export default HomePage;
