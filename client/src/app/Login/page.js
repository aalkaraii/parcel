import React from "react";

import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { Formik } from "formik";
import { Card } from "@nextui-org/react";
import CustomNavbar from "../Compoment/NavBar/page";
import SideBar from "../Compoment/SideBar/LeftSideBar/page";

const login = () => {
  return (
    <div>
      <Card>
        <div>
          <CustomNavbar />
          <SideBar />
        </div>

        <div className=" bg-gray-400 h-screen flex justify-center items-center">
          <form className="bg-white p-6  w-1/3 rounded shadow-lg">
            <div>
              <label>
                Enter Email Address
                <input
                  type="email"
                  placeholder="Enter phone number or email"
                  className="border-b mb-4 focus:outline-none border-gray-400 w-full mt-3 text-xs "
                ></input>
              </label>

              <label className="mb-4">
                Enter Password
                <input
                  placeholder="Enter Password"
                  type="password"
                  className="border-b focus:outline-none border-gray-400 w-full mt-3 text-xs "
                ></input>
              </label>
              <button className="bg-blue-300 rounded-md w-full p-2 shadow-lg mt-3">
                Login
              </button>
            </div>

            <div className="flex items-center mb-4">
              <hr className="flex-grow border-t border-gray-300" />
              <span className="px-2 text-gray-500">or</span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>

            <div className="mt-2">
              <button className="bg-gray-300 mt -3 gap-3 flex justify-center rounded-md shadow-lg  w-full p-2">
                {" "}
                <FcGoogle size={25} />
                Continue with Google{" "}
              </button>
              <button className="bg-gray-300 mt-3 gap-3 flex justify-center rounded-md shadow-lg  w-full p-2">
                {" "}
                <BsFacebook size={25} />
                Continue with Facebook{" "}
              </button>
            </div>
            <div className="flex items-center mb-4">
              <hr className="flex-grow border-t border-gray-300" />
              <span className="px-2 text-gray-500">or</span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>
            <div className="flex justify-center text-center">
              Need an Account?{" "}
              <a href="/Register" className="underline text-blue-300 ">
                Register
              </a>
            </div>
            <a href="" className=" flex justify-center text-center m-3">
              {" "}
              Have you forgetten your password?
              <p className="underline text-blue-300">clickhere</p>{" "}
            </a>

            <br></br>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default login;
