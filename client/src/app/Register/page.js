"use client";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import CustomNavbar from "../Compoment/NavBar/page";
import { Button, Card, Select, SelectItem } from "@nextui-org/react";
import axios from "axios";
import { Form, Formik, useFormik } from "formik";

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      fistName: "",
      lastName: "",
      email: "",
      password: "",
      phoneNumber: "",
      gender: "",
      role: "",
    },
    onSubmit: (values) => {
      registerUser(values);
    },
  });

  const registerUser = async (values) => {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/register`,
      values
    );
    if (data) alert("registered successfully");
  };

  return (
    <Formik>
      <Card>
        <div>
          <CustomNavbar />
        </div>
        <div className=" bg-gray-400 h-screen flex justify-center items-center">
          <Form
            className="bg-white p-6  w-1/3 rounded shadow-lg"
            onSubmit={formik.handleSubmit}
          >
            <div>
              <div className="flex space-x-4 mb-4 ">
                <label className="w-1/2">
                  First name
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="Enter First name"
                    className=" focus:outline-none border-b border-gray-400 w-full mt-3 text-xs "
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                  ></input>
                </label>
                <label className="w-1/2">
                  Last name
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Enter Last Name"
                    className="border-b border-gray-400 w-full mt-3 text-xs focus:outline-none "
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                  ></input>
                </label>
              </div>

              <div className="flex space-x-4 mb-4 ">
                <label className="w-1/2">
                  Enter Email Address
                  <input
                    placeholder="Enter email address"
                    className="border-b focus:outline-none border-gray-400 w-full mt-3 text-xs "
                    id="email"
                    name="email"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  ></input>
                </label>
                <label className="w-1/2">
                  Enter PhoneNumber
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="text"
                    placeholder="Enter phone number "
                    className="border-b focus:outline-none border-gray-400 w-full mt-3 text-xs "
                    onChange={formik.handleChange}
                    value={formik.values.phoneNumber}
                  ></input>
                </label>
              </div>
              <div className="flex space-x-4 mb-4 ">
                <label className="w-1/2">
                  Choose A Password
                  <input
                    placeholder="Enter Password"
                    type="password"
                    className="border-b focus:outline-none border-gray-400 w-full mt-3 text-xs "
                    id="password"
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  ></input>
                </label>
                <label className="w-1/2">
                  Confirm Password
                  <input
                    placeholder="confirm Password"
                    type="password"
                    className="border-b focus:outline-none border-gray-400 w-full mt-3 text-xs "
                  ></input>
                </label>
                <label htmlFor="email">Gender</label>

                <Select
                  name="gender"
                  onChange={(e) =>
                    formik.setFieldValue("gender", e.target.value)
                  }
                >
                  <SelectItem key="male">Male</SelectItem>
                  <SelectItem key="female">Female</SelectItem>
                  <SelectItem key="others">Others</SelectItem>
                </Select>

                <label htmlFor="role">Role</label>

                <Select
                  name="role"
                  onChange={(e) => formik.setFieldValue("role", e.target.value)}
                >
                  <SelectItem key="user">user</SelectItem>
                  <SelectItem key="Rider">Rider</SelectItem>
                </Select>
              </div>
            </div>
            <Button
              className="bg-blue-300 mt-3 rounded-md shadow-lg  w-full p-2"
              type="submit"
            >
              Create Account
            </Button>

            <div className="flex items-center space-x-4 mb-4 ">
              <hr className="flex-grow border-t border-gray-300" />
              <span className="px-2 text-gray-500">or</span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>

            <div className="mt-2">
              <button className="bg-gray-300 mt -3 rounded-md shadow-lg flex justify-center items-center gap-2  w-full p-2">
                {" "}
                <FcGoogle size={25} />
                Continue with Google{" "}
              </button>
              <button className="bg-gray-300 mt-3 rounded-md shadow-lg flex justify-center gap-2 w-full p-2">
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
              Already have an account?{" "}
              <a href="/Login" className="underline text-blue-300 ">
                Sign in
              </a>
            </div>
          </Form>
        </div>
      </Card>
    </Formik>
  );
};

export default SignupForm;
