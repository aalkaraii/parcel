import ClientSideBar from "@/component/SideBar/ClientSidebar/page";
import { Navbar } from "@nextui-org/react";
import React from "react";

const ClientDashboard = () => {
  return (
    <div className="text-black">
      <div className="bg-transparent absolute top-0 left-0 right-0 z-10">
        {" "}
        <Navbar></Navbar>
      </div>

      <div>
        <ClientSideBar></ClientSideBar>
      </div>
    </div>
  );
};

export default ClientDashboard;
