import { useState } from "react";
import { Slider, Button } from "antd";

const Ranger = () => {
  const [range, setRange] = useState([0, 500]);
  const onChange = (value) => {
    setRange(value);
  };

  return (
    <>
      <h1 className="text-[18px] font-bold text-left pl-[18px] pb-[20px]">
        Price Range
      </h1>
      <Slider onChange={onChange} range defaultValue={range} max={500} />
      <div className="pl-[30px] text-left">
        <div className="flex  items-center">
          <p className="text-[15px]">Price: </p>{" "}
          <p className="text-green-600 font-bold">
            ${range[0]}- ${range[1]}
          </p>
        </div>
        <div>
          <Button
            type="button"
            className="bg-green-600 text-white justify-left mt-[16px] mb-[46px] w-[90px] h-[35px]"
          >
            Filter
          </Button>
        </div>
      </div>
    </>
  );
};

export default Ranger;
