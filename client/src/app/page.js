import React from "react";
import Image from "next/image";
import CustomNavbar from "./Compoment/NavBar/page";
import { Input } from "@nextui-org/react";
import LeftSideBar from "./Compoment/SideBar/LeftSideBar/page";
import RightSideBar from "./Compoment/SideBar/RightSideBar/page";

const HomePage = () => {
  return (
    <div className="relative h-screen w-full  bg-gray-400">
      <div className="bg-blue-300 absolute top-0 left-0 right-0 z-10">
        <CustomNavbar />
      </div>
      <div class="flex min-h-screen">
        <main class="flex-grow p-2 w-1/2 bg-gray-100">
          <LeftSideBar />
        </main>

        <div className="flex h-full items-center justify-between w-screen p-14">
          <div className="text-white text-4xl">
            <div className="mb-8">
              <div className="flex flex-col justify-center text-black items-start">
                Send Your Goods with
                <br /> DeliveryX
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <Input
                className="focus:outline-none border-b border-gray-400 w-full mt-3 text-xs rounded-sm p-5"
                placeholder="Enter location"
              />
              <Input
                className="focus:outline-none border-b border-gray-400 w-full mt-3 text-xs rounded-sm p-5"
                placeholder="Enter destination"
              />
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
              className="rounded-none"
            />
          </div>
        </div>
        <aside class="w-1/4 bg-gray-300 p-4">
          <RightSideBar />
        </aside>
      </div>
    </div>
  );
};

export default HomePage;
