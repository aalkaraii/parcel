"use client";

import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React, { use } from "react";

const AboutUs = () => {
  return (
    <div className=" text-black flex justify-center">
      <div className=" mt-10 text-black w-1/2 p-10">
        <div className="text-4xl mb-4 flex justify-center">About Us</div>
        <p className="text-large mt-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <Button className="border-2 shadow-md bg-transparent  mt-10 ">
          <div className="bg-transparent text-black rounded-md p-2  ">
            {" "}
            <Link href="#">Learn More</Link>
          </div>
        </Button>
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
  );
};

export default AboutUs;
