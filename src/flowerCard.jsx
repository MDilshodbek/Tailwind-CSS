import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import cart from "./assets/cart.png";
import heart from "./assets/heart.png";
import search from "./assets/search.png";

const FlowerCard = (props) => {
  return (
    <div className="w-[258px] hover:border-t border-green-600 group relative">
      {/* flowerWrapper */}
      {props.discount && (
        <div className="flex justify-center items-center w-[80px] h-[30px] bg-green-600 absolute left-[-4px] top-[-10px]">
          <p className="text-white">{props.discount}</p>
        </div>
      )}
      <div className="bg-[#FBFBFB]">
        <img className="w-[250px] h-[250px]" src={props.img} alt="" />
      </div>
      <div className="flex justify-center items-center gap-[26px] opacity-0 group-hover:opacity-100">
        <img src={cart} alt="" />
        <img src={heart} alt="" />
        <img src={search} alt="" />
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
    <div className="w-[80%] flex bg-[#FBFBFB] relative h-[250px] justify-between m-auto">
      <div className="flex items-end">
        <img
          className="w-[50px] h-[100px] absolute bottom-0"
          src={props.img}
          alt=""
        />
        <div>
          <img
            className="w-[292px] h-[292px] bottom-[20px] absolute"
            src={props.img1}
            alt=""
          />
        </div>
        <div className="flex flex-col w-[60%] items-end text-right mt-9 absolute right-0 bottom-[50px]">
          <h1 className="font-black text-base uppercase">{props.title}</h1>
          <h1 className="font-black text-base uppercase">{props.title1}</h1>
          <p className="text-[14px] font-normal text-[#727272]">
            {props.description}
          </p>
          <Button className="bg-green-600 text-white mt-4">
            Find More <ArrowRightOutlined />
          </Button>
        </div>
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
        <p className="text-[14px] font-normal text-[#727272]">
          {props.description}
        </p>
        <p className="font-semibold text-[14px]">{props.read}</p>
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
        <p className="text-[14px] font-normal text-[#727272]">
          {props.description}
        </p>
      </div>
    </div>
  );
};
export { FlowerCard, Trends, Blog, News };
