import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

const FlowerCard = (props) => {
  return (
    <div className="w-[258px]">
      {/* flowerWrapper */}
      <div className="bg-[#FBFBFB]">
        <img className="" src={props.img} alt="" />{" "}
      </div>
      {/* flowerDetail */}
      <div className="text-left pt-3">
        <h1 className="text-basw">{props.title}</h1>
        <p className="font-bold text-lg text-green-600">{props.price}</p>
      </div>
    </div>
  );
};

const Trends = (props) => {
  return (
    <div className="flex h-[250px] relative">
      <img
        className="w-[50px] h-[100px] absolute bottom-0"
        src={props.img}
        alt=""
      />
      <div className="relative">
        <img className="w-[292px] h-[292px] " src={props.img1} alt="" />
      </div>
      <div className="w-[60%] text-right mt-9">
        <h1 className="font-black text-base uppercase">{props.title}</h1>
        <h1 className="font-black text-base uppercase">{props.title1}</h1>
        <p className="text-[14px] font-normal">{props.description}</p>
        <Button className="bg-green-600 text-white mt-4">
          Find More <ArrowRightOutlined />
        </Button>
      </div>
    </div>
  );
};

const Blog = (props) => {
  return (
    <div className="h-[167px] text-left">
      <div>
        <img src={props.img} alt="" />
      </div>
      {/* Blog details */}
      <div>
        <p className="text-sm font-medium text-green-600">{props.dates}</p>
        <h1 className="text-xl font-bold">{props.title}</h1>
        <p className="text-[14px] font-normal">{props.description}</p>
        <p className="text-sm font-medium">{props.read}</p>
      </div>
    </div>
  );
};

const News = (props) => {
  return (
    <div className="flex flex-col justify-start">
      <div>
        <img src={props.img} alt="" />
      </div>
      {/* newsletter detail */}
      <div className="text-left w-[80%]">
        <h1 className="text-lg font-bold">{props.title}</h1>
        <p className="text-sm font-normal">{props.description}</p>
      </div>
    </div>
  );
};
export { FlowerCard, Trends, Blog, News };
