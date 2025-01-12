"use client";
import React from "react";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Button,
} from "@nextui-org/react";
import { FaChevronDown, FaLock, FaBolt, FaBalanceScale } from "react-icons/fa"; // Importing icons from react-icons
import { FaMapLocationDot } from "react-icons/fa6";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { MdMultipleStop } from "react-icons/md";
import { BsCashCoin } from "react-icons/bs";
import { RiCustomerServiceFill } from "react-icons/ri";

import Link from "next/link";

const CustomNavbar = () => {
  const icons = {
    chevron: <FaChevronDown size={16} />,
    scale: <FaBalanceScale className="text-warning" size={30} />,
    lock: <FaLock className="text-success" size={30} />,
    activity: <FaMapLocationDot className="text-secondary" size={30} />,
    flash: <FaBolt className="text-primary" size={30} />,
    schedule: <RiCalendarScheduleLine className="text-primary" size={30} />,
    multi: <MdMultipleStop className="text-primary" size={30} />,
    payment: <BsCashCoin className="text-success" size={30} />,
    customer: <RiCustomerServiceFill className="text-danger" size={30} />,
  };

  return (
    <NextUINavbar className="  bg-blue-600 flex">
      <NavbarBrand>
        <Button
          className="font-bold text-inherit text-4xl bg-blue-400 flex"
          as={Link}
          href="/"
        >
          <p className="text-black">Delivery</p>
          <p className="text-green-500 text-4xl">X</p>
        </Button>
      </NavbarBrand>
      <NavbarContent justify="end">
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 text-black bg-transparent data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                Services
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="autoscaling"
              className="text-black"
              description="Parcels are picked up and delivered on same day, often within few hours."
              startContent={icons.flash}
            >
              Same-Day Delivery
            </DropdownItem>
            <DropdownItem
              key="usage_metrics"
              className="text-black"
              description="You can track  your shipment in real-time , ensuring where your package is."
              startContent={icons.activity}
              href="/Dashboard"
            >
              Package Tracking
            </DropdownItem>
            <DropdownItem
              className="text-black"
              key="production_ready"
              description="Allow you to schedule future deliveries, easy to plan for important shipments."
              startContent={icons.schedule}
            >
              Delivery Scheduling
            </DropdownItem>
            <DropdownItem
              className="text-black"
              key="99_uptime"
              description="Allows users to send packages to multiple destinations in a single trip"
              startContent={icons.multi}
            >
              Multi-Stop Delivery Options
            </DropdownItem>
            <DropdownItem
              className="text-black"
              key="supreme_support"
              description="Pay for your shipment directly from app through variety of payment methods."
              startContent={icons.payment}
            >
              Payment Options
            </DropdownItem>
            <DropdownItem
              className="text-black"
              key="supreme_support"
              description="Overcome any challenge with a supporting team ready to respond."
              startContent={icons.customer}
            >
              Customer Support
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem isActive>
          <Link
            className="text-black"
            href="/#about"
            aria-current="page "
            to="/AboutUs"
          >
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-black" color="foreground" href="/#contact">
            Contact Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/#feedback" className="text-black" color="foreground">
            Feedback
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/Dashboard" className="text-black" color="foreground">
            Track Order
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button className="border-2 shadow-md bg-transparent border-black  ">
            <div className="bg-transparent text-black rounded-md p-2  ">
              {" "}
              <Link href="/Login">Login</Link>
            </div>
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button className="border-2 shadow-md bg-transparent border-black  ">
            <div className="bg-transparent text-black rounded-md p-2  ">
              {" "}
              <Link href="/Register">Sign Up</Link>
            </div>
          </Button>
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};

export default CustomNavbar;
