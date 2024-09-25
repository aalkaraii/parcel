import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const FeedBack = () => {
  return (
    <div className="h-full p-10 mb-10">
      <div className="flex justify-center text-center text-4xl mb-10 text-black font-bold">
        FeedBack
      </div>
      <div className="flex justify-center h-1/3">
        <div className="bg-transparent p-6  w-1/3 rounded shadow-lg">
          <div>
            <Input
              type="text"
              className="text-black  p-2 flex justify-center "
              placeholder="Name"
            >
              {" "}
              Your Name{" "}
            </Input>
          </div>

          <Input
            type="email"
            className="text-black  p-2  "
            placeholder="Your Email"
          >
            Your Email
          </Input>

          <Input
            type="text"
            className="text-black  p-2 "
            placeholder="message"
            height={600}
          >
            Message
          </Input>
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
