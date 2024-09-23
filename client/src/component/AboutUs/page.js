import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className=" text-black ">
      <div className=" ">
        <p className="text-xl flex flex-col justify-center text-black items-start">
          About Us
        </p>
        <p>
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
      </div>
      <div className="flex justify-end items-center p-10">
        <Image
          src="/parcel.jpeg"
          width={600}
          height={400}
          alt="Home Image"
          className="rounded-sm"
        />
      </div>
    </div>
  );
};

export default AboutUs;
