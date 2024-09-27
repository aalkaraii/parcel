import React from "react";
import { Calendar } from "@nextui-org/react";
import { parseDate } from "@internationalized/date";

const Calander = () => {
  return (
    <div>
      let [value, setValue] = React.useState(parseDate("2024-03-07"));
      <Calendar
        aria-label="Date (Controlled)"
        value={value}
        onChange={setValue}
      />
    </div>
  );
};

export default Calander;
