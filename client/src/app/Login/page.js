"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";

import { Card, Input } from "@nextui-org/react";
import Link from "next/link";
import CustomNavbar from "@/component/NavBar/page";

const loginSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const login = () => {
  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Card>
        <div className="bg-gradient-to-r from-blue-300 to-white retative">
          <CustomNavbar />
        </div>

        <div className=" bg-gradient-to-r from-blue-300 to-white h-screen flex justify-center items-center">
          <div className="bg-transparent p-6  w-1/3 rounded shadow-lg">
            <div>
              <label>
                Enter Email Address
                <Input
                  isRequired
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter phone number or email"
                  className="border-b mb-4 focus:outline-none border-gray-400 w-full mt-3 text-xs "
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                {formik.errors.email}
              </label>

              <label className="mb-4">
                Enter Password
                <Input
                  isRequired
                  name="password"
                  id="password"
                  placeholder="Enter Password"
                  type="password"
                  className="border-b focus:outline-none border-gray-400 w-full mt-3 text-xs "
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
                {formik.errors.password}
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
              <Link href="/Register" className="underline text-blue-300 ">
                Register
              </Link>
            </div>
            <a href="" className=" flex justify-center text-center m-3">
              {" "}
              Have you forgetten your password?
              <p className="underline text-blue-300">clickhere</p>{" "}
            </a>

            <br></br>
          </div>
        </div>
      </Card>
    </form>
  );
};

export default login;
