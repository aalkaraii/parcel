import React from "react";
import LeftSideBar from "../Compoment/SideBar/LeftSideBar/page";
import RightSideBar from "../Compoment/SideBar/RightSideBar/page";

const Dashboard = () => {
  return (
    <div>
      <div class="flex min-h-screen">
        <main class="flex-grow p-2 w-1/2 bg-gray-100">
          <LeftSideBar />
        </main>
        <aside class="w-1/4 bg-gray-300 p-4">
          <RightSideBar />
        </aside>
      </div>
    </div>
  );
};

export default Dashboard;
