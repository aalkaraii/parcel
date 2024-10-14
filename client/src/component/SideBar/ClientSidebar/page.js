"use client";
import { IoBarChartSharp } from "react-icons/io5";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { IoWalletSharp } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { Button } from "@nextui-org/react";

import Link from "next/link";

import React from "react";

const ClientSideBar = () => {
  return (
    <div className="flex text-black">
      <div className=" border">Home</div>
      <div>My Parcels</div>
      <div>Calander</div>
      <div>Payments</div>
      <div>Messages</div>
      <div>Support</div>
      <Button>Premium account</Button>
      <Button>Log Out </Button>
    </div>
  );
};

export default ClientSideBar;
