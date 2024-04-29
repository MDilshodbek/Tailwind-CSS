import "./App.css";
import HeroCard from "./heroCard";
import { Button, Badge, Carousel } from "antd";
import {
  SearchOutlined,
  BellOutlined,
  ShoppingCartOutlined,
  LoginOutlined,
} from "@ant-design/icons";

import flower2 from "./assets/flower2.png";
import flower3 from "./assets/flower3.png";

function App() {
  return (
    <div
      className="bg-white w-[100%] flex flex-col font-sans text-black
    "
    >
      {/* Navbar */}
      <div className="flex justify-between w-[80%] m-auto h-[78px] items-center border-b-[0.3px] border-green-600 border-opacity-50">
        <div>
          <img
            className="cursor-pointer"
            src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Flogo.svg?alt=media&token=fc9659d6-f435-43b9-a624-8b0d3a574baa"
            alt=""
          />
        </div>
        <div className="flex gap-50 gap-[20px]">
          <p className="cursor-pointer text-base">Home</p>
          <p className="cursor-pointer text-base">Shop</p>
        </div>
        <div className="flex justify-center items-center gap-[30px]">
          <div className="gap-[30px] flex">
            <SearchOutlined className="text-xl" />
            <BellOutlined className="text-xl" />
            <Badge dot>
              <ShoppingCartOutlined className="text-xl" />
            </Badge>
          </div>
          <Button
            type="button"
            className="w-[100px] h-[35px] bg-green-600 text-white cursor-pointer text-base flex justify-center items-center"
          >
            <LoginOutlined />
            Login
          </Button>
        </div>
      </div>
      {/* Hero */}
      <div className="w-[80%] h-[450px] m-auto bg-[#F5F5F580] mt-[12px]">
        <Carousel autoplay>
          <HeroCard
            title="Welcome to GreenShop"
            greenHeading="Let’s Make a Better "
            description="We are an online plant shop offering a wide range of cheap and trendy
            plants. Use our plants to create an unique Urban Jungle. Order your
            favorite plants!"
            img="https://s3-alpha-sig.figma.com/img/4575/e3df/52fa214db1f3ce519277860c13b11e21?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PGWf8~ZaXe4A5XVZYHSo5pBv1M~zd~6y1Vi7Nzaaqcm2dBX1R5O2Aa7iE4qymcHzDwZ1PEaUSuIoad-ocnX3MCP8pCToGHx27s-dE~4zbB4jJQnrZtUfJQYRJ2LIHkPQdOtEs2oWNo4WaZcAa1VXFTPZZW0H-KfGhbgfYPX~2hAnP6mnnGP7BS63Ijd1f7zVeRxYy7XxD~628eCoblCwFlFHNX6-Gj3W3FBiujnVn3-TU0Nh7RCojNSoPkSEl~Kt-o~9UW5uz57~mb5h64JpmC2E7f7cTkiBxEsxhVKLsV-uH2qHYfnR5J4OO~QG9fuaAFQ~Rw83gngCohJQea5Gdw__"
            img1="https://s3-alpha-sig.figma.com/img/4575/e3df/52fa214db1f3ce519277860c13b11e21?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PGWf8~ZaXe4A5XVZYHSo5pBv1M~zd~6y1Vi7Nzaaqcm2dBX1R5O2Aa7iE4qymcHzDwZ1PEaUSuIoad-ocnX3MCP8pCToGHx27s-dE~4zbB4jJQnrZtUfJQYRJ2LIHkPQdOtEs2oWNo4WaZcAa1VXFTPZZW0H-KfGhbgfYPX~2hAnP6mnnGP7BS63Ijd1f7zVeRxYy7XxD~628eCoblCwFlFHNX6-Gj3W3FBiujnVn3-TU0Nh7RCojNSoPkSEl~Kt-o~9UW5uz57~mb5h64JpmC2E7f7cTkiBxEsxhVKLsV-uH2qHYfnR5J4OO~QG9fuaAFQ~Rw83gngCohJQea5Gdw__"
          />
          <HeroCard
            title="Welcome to GreenShop"
            greenHeading="Let’s Live in a Better "
            description="We are an online plant shop offering a wide range of cheap and trendy
              plants. Use our plants to create an unique Urban Jungle. Order your
              favorite plants!"
            img="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fhero-flower-1.png?alt=media&token=74ea8d3d-06b5-41e7-bb12-7caaf3035a6d"
            img1="https://s3-alpha-sig.figma.com/img/4575/e3df/52fa214db1f3ce519277860c13b11e21?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PGWf8~ZaXe4A5XVZYHSo5pBv1M~zd~6y1Vi7Nzaaqcm2dBX1R5O2Aa7iE4qymcHzDwZ1PEaUSuIoad-ocnX3MCP8pCToGHx27s-dE~4zbB4jJQnrZtUfJQYRJ2LIHkPQdOtEs2oWNo4WaZcAa1VXFTPZZW0H-KfGhbgfYPX~2hAnP6mnnGP7BS63Ijd1f7zVeRxYy7XxD~628eCoblCwFlFHNX6-Gj3W3FBiujnVn3-TU0Nh7RCojNSoPkSEl~Kt-o~9UW5uz57~mb5h64JpmC2E7f7cTkiBxEsxhVKLsV-uH2qHYfnR5J4OO~QG9fuaAFQ~Rw83gngCohJQea5Gdw__"
          />
          <HeroCard
            title="Welcome to GreenShop"
            greenHeading="Let’s observe a Better "
            description="We are an online plant shop offering a wide range of cheap and trendy
            plants. Use our plants to create an unique Urban Jungle. Order your
            favorite plants!"
            img="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fhero-flower-2.png?alt=media&token=5b5addec-d344-4897-a983-95c9b10a1662"
            img1="https://s3-alpha-sig.figma.com/img/4575/e3df/52fa214db1f3ce519277860c13b11e21?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PGWf8~ZaXe4A5XVZYHSo5pBv1M~zd~6y1Vi7Nzaaqcm2dBX1R5O2Aa7iE4qymcHzDwZ1PEaUSuIoad-ocnX3MCP8pCToGHx27s-dE~4zbB4jJQnrZtUfJQYRJ2LIHkPQdOtEs2oWNo4WaZcAa1VXFTPZZW0H-KfGhbgfYPX~2hAnP6mnnGP7BS63Ijd1f7zVeRxYy7XxD~628eCoblCwFlFHNX6-Gj3W3FBiujnVn3-TU0Nh7RCojNSoPkSEl~Kt-o~9UW5uz57~mb5h64JpmC2E7f7cTkiBxEsxhVKLsV-uH2qHYfnR5J4OO~QG9fuaAFQ~Rw83gngCohJQea5Gdw__"
          />
        </Carousel>
      </div>
      {/* Aside & Flowers */}
      <div>
        {/* Aside */}
        <div>
          {/* Category */}
          <div></div>
          {/* price */}
          <div></div>
          {/* sale */}
          <div></div>
        </div>
        {/* Flowers */}
        <div>
          {/* row1 */}
          <div></div>
          {/* row2 */}
          <div></div>
          {/* row3 */}
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default App;
