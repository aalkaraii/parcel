import CustomNavbar from "@/component/NavBar/page";
import {
  CircularProgress,
  Card,
  CardBody,
  CardFooter,
  Chip,
  Button,
} from "@nextui-org/react";
import React from "react";

const Dashboard = () => {
  return (
    <div className="flex bg-white">
      <div className="bg-transparent absolute top-0 left-0 right-0 z-10">
        <CustomNavbar />
      </div>
      <div className=" text-black bg-red w-[240px] mt-20 p-10">
        <div>
          <button className=" flex  w-[240px] p-3">Home</button>
          <button className=" flex w-[240px] p-3">My Parcels</button>
          <button className=" flex w-[240px] p-3 ">Calander</button>
          <button className=" flex w-[240px] p-3">Payments</button>
          <button className=" flex w-[240px] p-3">Messages</button>
          <button className=" flex w-[240px] p-3">Support</button>
          <div className="w-[240px] h-[240px] border-none "></div>
        </div>
        <Button className="p-3 m-3">Premium account</Button>
        <Button className="p-3 m-3">Log Out </Button>
      </div>
      <div className="flex w-[240px] mt-20 p-10">
        <div className="text-3xl">Parcel Status</div>
        <div className="flex gap-20 ">
          <button>All</button>
          <button>Incomming</button>
          <button>Recived</button>
          <button>Calceled</button>
        </div>
      </div>
      <div className="bg-transparent min-w-full mt-20 p-10">
        <Card className="w-[240px] h-[240px] border-none bg-gradient-to-br from-violet-500 to-fuchsia-500">
          <CardBody className="justify-center items-center pb-0">
            <CircularProgress
              classNames={{
                svg: "w-36 h-36 drop-shadow-md",
                indicator: "stroke-white",
                track: "stroke-white/10",
                value: "text-3xl font-semibold text-white",
              }}
              value={70}
              strokeWidth={4}
              showValueLabel={true}
            />
          </CardBody>
          <CardFooter className="justify-center items-center pt-0">
            <Chip
              classNames={{
                base: "border-1 border-white/30",
                content: "text-white/90 text-small font-semibold",
              }}
              variant="bordered"
            >
              2800 Data points
            </Chip>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
