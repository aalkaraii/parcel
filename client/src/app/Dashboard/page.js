import React from "react";
import LeftSideBar from "../Compoment/SideBar/LeftSideBar/page";
import RightSideBar from "../Compoment/SideBar/RightSideBar/page";
import CustomNavbar from "../Compoment/NavBar/page";
import { Input } from "postcss";

const Dashboard = () => {
  return (
    <div>
      <div className="bg-blue-300 absolute top-0 left-0 right-0 z-10">
        <CustomNavbar />
      </div>
      <div class="flex min-h-screen">
        <main class="flex-grow p-2 w-1/2 bg-gray-100">
          <LeftSideBar />
        </main>

        <div className="flex  items-center justify-between w-screen p-20 bg-blue">
          <div />

          <aside>
            <RightSideBar />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
