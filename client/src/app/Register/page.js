"use client";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import * as Yup from "yup";
import { Button, Card, Input, Select, SelectItem } from "@nextui-org/react";
import axios from "axios";
import { useFormik } from "formik";
import Link from "next/link";
import CustomNavbar from "@/component/NavBar/page";
const signUpSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  phoneNumber: Yup.string().min(10, "at least 10 digits").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  cpassword: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});
const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      fistName: "",
      lastName: "",
      email: "",
      password: "",
      cpassword: "",
      phoneNumber: "",
      gender: "",
      role: "",
    },
    validationSchema: signUpSchema,
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
    <form onSubmit={formik.handleSubmit}>
      <div>
        <div className="bg-gradient-to-r from-blue-300 to-white relative">
          <CustomNavbar />
        </div>
        <div className=" bg-gradient-to-r from-blue-300 to-white h-screen flex justify-center items-center">
          <div
            className="bg-transparent p-6  w-1/3 rounded shadow-lg"
            onSubmit={formik.handleSubmit}
          >
            <div>
              <div className="flex space-x-4 mb-4 ">
                <label className="w-1/2">
                  First name
                  <Input
                    isRequired
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="Enter First name"
                    className="focus:outline-none border-b border-gray-400 w-full mt-3 text-xs"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                  />
                </label>

                <label className="w-1/2">
                  Last name
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Enter Last Name"
                    className="border-b border-gray-400 w-full mt-3 text-xs focus:outline-none "
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                  ></Input>
                </label>
              </div>

              <div className="flex space-x-4 mb-4 ">
                <label className="w-1/2">
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
                <label className="w-1/2">
                  Enter PhoneNumber
                  <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="text"
                    placeholder="Enter phone number "
                    className="border-b focus:outline-none border-gray-400 w-full mt-3 text-xs "
                    onChange={formik.handleChange}
                    value={formik.values.phoneNumber}
                  />
                  {formik.errors.phoneNumber}
                </label>
              </div>
              <div className=" space-x-4 mb-4 ">
                <label className="w-1/2">
                  Choose A Password
                  <Input
                    isRequired
                    placeholder="Enter Password"
                    type="password"
                    className="border-b focus:outline-none border-gray-400 w-full mt-3 text-xs "
                    id="password"
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                  {formik.errors.password}
                </label>
                <label className="w-1/2">
                  Confirm Password
                  <Input
                    isRequired
                    name="cpassword"
                    placeholder="confirm Password"
                    id="cpassword"
                    type="password"
                    className="border-b focus:outline-none border-gray-400 w-full mt-3 text-xs "
                    onChange={formik.handleChange}
                    value={formik.values.cpassword}
                  />
                  {formik.errors.cpassword}
                </label>
                <label htmlFor="gender">Gender</label>

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
              <Link href="/Login" className="underline text-blue-300 ">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignupForm;
