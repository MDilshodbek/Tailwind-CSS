import React, { useState } from "react";
import { Slider, Switch } from "antd";
const SliderComponent = () => {
  const [disabled, setDisabled] = useState(false);
  const onChange = (checked) => {
    setDisabled(checked);
  };
  return (
    <>
      <Slider range defaultValue={[20, 50]} />
    </>
  );
};
export default SliderComponent;
