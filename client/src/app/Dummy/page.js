"use client";
import { Button } from "@nextui-org/react";
import React, { useState } from "react";

const page = () => {
  let [number, SetNumber] = useState(0);

  const handelIncrement = () => {
    {
      SetNumber(number + 1);
    }
    const handelDecrement = () => {
      SetNumber(number - 1);
    };
  };
  return (
    <div>
      <Button onClick={handelIncrement}>+</Button>
      {number}
      <Button onClick={handelDecrement}>-</Button>
    </div>
  );
};

export default page;
