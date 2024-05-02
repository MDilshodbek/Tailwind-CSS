import React from "react";
import { Select, Space } from "antd";
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const Selectable = () => (
  <Space wrap>
    <Select
      defaultValue="Default value"
      style={{
        width: 120,
      }}
      onChange={handleChange}
      options={[
        {
          value: "The Cheapest",
          label: "The Cheapest",
        },
        {
          value: "The Most Expensive",
          label: "The Most Expensive",
        },
        {
          value: "Default value",
          label: "Default value",
        },
      ]}
    />
  </Space>
);
export default Selectable;
