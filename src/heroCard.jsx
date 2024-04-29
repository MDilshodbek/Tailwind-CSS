import { Button } from "antd";

const HeroCard = (props) => {
  return (
    <div className="flex flex-row">
      {/* hero left */}
      <div className="w-[60%] pl-[40px]">
        <h1 className="text-sm uppercase text-left pt-[68px]">{props.title}</h1>
        <h1 className="text-70 text-left uppercase font-black leading-[70px] text-[#3D3D3D]">
          {props.greenHeading}
          <span className="text-green-600">Planet</span>
        </h1>
        <p className="text-sm text-[#727272] text-left w-[80%]">
          {props.description}
        </p>
        <Button
          type="button"
          className="w-[140px] h-[40px] bg-green-600 text-white cursor-pointer text-sm flex justify-center items-center font-bold uppercase mt-[44px]"
        >
          shop now
        </Button>
      </div>
      {/* hero right */}
      <div className="h-[450px]">
        <img
          className="flex absolute top-42 w-[350px] h-[350px] left-850"
          src={props.img}
          alt=""
        />
        <img
          className="flex w-[135px] h-[135px] absolute top-60"
          alt=""
          src={props.img1}
        />
      </div>
    </div>
  );
};

export default HeroCard;
