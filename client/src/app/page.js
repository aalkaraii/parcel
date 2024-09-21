import React from "react";
import Image from "next/image";
import CustomNavbar from "./Compoment/NavBar/page";
import { Button, Input } from "@nextui-org/react";
import LeftSideBar from "./Compoment/SideBar/LeftSideBar/page";
import RightSideBar from "./Compoment/SideBar/RightSideBar/page";
import { MdLocationSearching } from "react-icons/md";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="relative h-screen w-full  bg-blue-100">
      <div className="bg-blue-300 absolute top-0 left-0 right-0 z-10">
        <CustomNavbar />
      </div>

      <div className="flex h-full items-center justify-between w-screen p-20">
        <div className="text-white text-4xl">
          <div className="mb-8">
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

            <div className="bg-gray-300 mt-3 text-black text-s rounded-md shadow-lg flex justify-center gap-2 w-fit p-4">
              <button className="text-xs w-80">See prices</button>
            </div>
          </div>
        </div>

        <div className="flex justify-end items-center p-10">
          <Image
            src="/home.png"
            width={600}
            height={400}
            alt="Home Image"
            className="rounded-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
