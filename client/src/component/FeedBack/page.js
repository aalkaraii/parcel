import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { IoIosMail } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";

const FeedBack = () => {
  return (
    <div className="min-h-fit h-full mb-20 ">
      <div className="flex justify-center text-center text-4xl mb-10 text-black font-bold mt-20">
        FeedBack
      </div>
      <div className="flex justify-center h-1/3">
        <div className="bg-transparent p-6  w-1/3 rounded shadow-lg mt-10 mb-20">
          <div className="p-2">
            <div className="max-w-xs w-full p-2">
              <Input
                type="text"
                placeholder="Name"
                className="max-w-xs w-full"
                id="name"
                name="name"
                startContent={
                  <div className="pointer-events-none flex items-center text-black">
                    <FaUserCircle />
                  </div>
                }
              />
            </div>
            <div className="max-w-xs w-full p-2">
              <Input
                type="Email"
                placeholder="Email "
                className="max-w-xs w-full"
                id="Email"
                name="email"
                startContent={
                  <div className="pointer-events-none flex items-center text-black">
                    <IoIosMail />
                  </div>
                }
              />
            </div>
            <div className="p-2 rounded-md bg-gray-200">
              <input
                type="text"
                placeholder="Message"
                className="text-black p-4 rounded-md mb-4 h-40 max-w-xs w-full bg-gray-200"
              ></input>
            </div>
          </div>

          <Button className="border-2 shadow-md bg-transparent border-black mt-10 ">
            <div className="bg-transparent text-black rounded-md p-2  ">
              {" "}
              <Link href="#">submit</Link>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
