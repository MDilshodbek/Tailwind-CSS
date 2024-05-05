import "./App.css";
import HeroCard from "./heroCard";
import SliderComponent from "./SliderComponent";

import { FlowerCard, Trends, Blog, News } from "./flowerCard";
import Selectable from "./select";
import { Button, Badge, Carousel, Pagination } from "antd";
import {
  SearchOutlined,
  BellOutlined,
  ShoppingCartOutlined,
  LoginOutlined,
} from "@ant-design/icons";

//Images
import saleFlower from "./assets/saleFlower.png";
import circle from "./assets/circle.png";
import flower2 from "./assets/flower2.png";
import trendFlower from "./assets/trendFlower.png";
import gardenCare from "./assets/gardenCare.png";
import plantRev from "./assets/plantRev.png";
import wateringGarden from "./assets/wateringGarden.png";
import payment from "./assets/payment.png";

// Icons
import call from "./assets/call.png";
import mail from "./assets/mail.png";
import location from "./assets/location.png";
import facebook from "./assets/facebook.png";
import insta from "./assets/insta.png";
import twitter from "./assets/twitter.png";
import linked from "./assets/linked.png";
import youtube from "./assets/youtube.png";

function App() {
  return (
    <div className="bg-white w-[100%] flex flex-col font-sans text-black">
      {/* Navbar */}
      <div className="flex justify-between w-[80%] m-auto h-[78px] items-center border-b-[0.3px] border-green-600 border-opacity-50">
        <div>
          <img
            className="cursor-pointer"
            src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Flogo.svg?alt=media&token=fc9659d6-f435-43b9-a624-8b0d3a574baa"
            alt=""
          />
        </div>
        <div className="flex gap-50 gap-[20px] ">
          <p className=" cursor-pointer text-base hover:border-b-[3px] border-green-600">
            Home
          </p>
          <p className="cursor-pointer text-base hover:border-b-[3px] border-green-600">
            Shop
          </p>
          <p className="cursor-pointer text-base hover:border-b-[3px] border-green-600">
            Plant Care
          </p>
          <p className="cursor-pointer text-base hover:border-b-[3px] border-green-600">
            Blogs
          </p>
        </div>
        <div className="flex justify-center items-center gap-[30px]">
          <div className="gap-[30px] flex">
            <SearchOutlined className="text-xl" />
            <BellOutlined className="text-xl" />
            <Badge count={6} color="#46A358" size="small">
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
      <div className="flex flex-row w-[80%] m-auto mt-26 py-9">
        {/* Aside */}
        <div className="flex w-[30%] flex-col gap-9">
          {/* Category */}
          <div>
            <h1 className="text-lg font-bold mt-26 text-left pl-4">
              Categories
            </h1>
            <div className="flex justify-between">
              <div className="flex flex-col justify-around h-[360px] text-left pl-7">
                <p className="text-green-600">House Plants</p>
                <p>Potter Plants</p>
                <p>Seeds</p>
                <p>Small Plants</p>
                <p>Big Plants</p>
                <p>Succulents</p>
                <p>Trerrariums</p>
                <p>Gardening</p>
                <p>Accessories</p>
              </div>
              <div className="flex flex-col pr-6 justify-around h-[360px] text-left">
                <p className="text-green-600">(33)</p>
                <p>(12)</p>
                <p>(65)</p>
                <p>(39)</p>
                <p>(23)</p>
                <p>(17)</p>
                <p>(19)</p>
                <p>(13)</p>
                <p>(18)</p>
              </div>
            </div>
          </div>
          {/* price */}
          {/* <div className="w-[226px] h-[133px] pl-5">
            <h1 className="text-lg font-bold">Price Range</h1>
            <SliderComponent />
            <p>Price: 20-30</p> */}
          <div className="mt-[15px]">
            <h3 className="font-bold">Price Range</h3>
            <div className="ant-slider css-k7429z ant-slider-horizontal"></div>
            <SliderComponent />
            <p className="font-normal">
              Price:{" "}
              <span className="font-bold text-[#46A358]">0$ - 1000$</span>
            </p>
            <button className="mt-[16px] bg-[#46A358] text-white px-[23px] py-[8px] rounded-lg">
              Filter
            </button>
          </div>
          {/* </div> */}
          {/* size */}
          <div className="flex w-[268px] h-[143px] flex-col">
            <div>
              <h1 className="text-lg font-bold mt-26 text-left pl-4">Size</h1>
              <div className="flex justify-between h-[120px]">
                <div className="flex flex-col justify-around text-left pl-7">
                  <p>Small</p>
                  <p>Medium</p>
                  <p>Large</p>
                </div>
                <div className="flex flex-col pr-6 justify-around text-left">
                  <p>(119)</p>
                  <p>(86)</p>
                  <p>(78)</p>
                </div>
              </div>
            </div>
          </div>
          {/* Sale */}
          <div className="h-[470px] bg-gradient-to-b from-green-600/[0.1] to-green-600/[0.03] leading-10">
            <h1 className="font-normal text-[50px] text-green-600 pt-[40px]">
              Super Sale
            </h1>
            <p className="text-2xl pt-3">UP TO 75 % OFF</p>
            <img src={saleFlower} alt="" />
          </div>
        </div>
        {/* Flowers */}
        <div className="flex flex-col pl-12 gap-8">
          {/* flowerFilter */}
          <div className="flex justify-between w-[838px]">
            <div className="flex gap-9 text-left">
              <p className="text-base text-green-600 font-bold border-b-2 border-green-600">
                All Plants
              </p>
              <p>New Arrivals</p>
              <p>Sale</p>
            </div>
            <div className="flex justify-center items-center gap-1.5">
              <p>Sort by:</p>
              <Selectable />
              {/* <div className="flex">
                <p className="pl-1.5 pr-1">Default sorting </p>
                <DownOutlined />
              </div> */}
            </div>
          </div>
          <div className="flex flex-col gap-20">
            {/* row1 */}
            <div className="flex gap-8 justify-between">
              <FlowerCard
                title="Barberton Daisy"
                price="$119.00"
                img="https://s3-alpha-sig.figma.com/img/586c/8523/1ab58d21463d86aa3768f5c6c78f8a1f?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iE4LBJqihkTCH0UqJuA641oNcI6cHe1hxT8CEEtNMWKEmUtuSfSFpBsrNBlvkiWqWgVyxP~JAGViZS7K4S7sSmTA1jh0qLbcR9M4tvYnBbZy8KH7HYCWpbgGmFh~K~IS5rkMqlujPHSHkWJ2PnGKFO15o99oUBDWQIBfBdi2BOVmk7P9IbXSbcvo7KOer9XkI0qXW938fxff1gI4Hr9nhHXISTE74-P1vmKHPY~7EVhVX5lJ-239bKL4ohEnHreULpMKYHta7hljki~WBRwOVw7z3mW3coL8Xutq8z1N0KuAZU2jmutPpJ46amR9tOfbxbko4taloU4hfA83Yu59dQ__"
              />
              <FlowerCard
                title="Angel Wing Begonia"
                price="$119.00"
                img="https://s3-alpha-sig.figma.com/img/4826/f3a4/1a2148d881d8376b26471cced915b1bb?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RBwZ7AfaEHj3Ml2lSOAMnxtbrj9LMv~gzTQ0V3BMHW4qAUDgBsZnKpsQoo3mnrKZOsYxQnhYUiiz8-xA5blrtexHlJkDJ2CVqE-y4F9vGabH-zeFHOu1QDVXRKzIQpGqLfK~~tfyhlZq42ZP3eAg6Bg4uabQAWJPbGPymITITNDOTzO3rDwblPDSn-HPQIA1~~F8DsKgISxitBY7zs6bd1SucbO2oZteNpMK-T~4cotpsmpvtxT3NKPQpQq5yWidihCYn--7W9E8zC3~-k41TnLXp7CjqiKTJ8Z~RwfbW7I-aeoSUkE7CDcqlKoU7KOiqms4BOug6roZCEub3FVOUA__"
              />
              <FlowerCard
                discount="13% OFF"
                title="African Violet"
                price="$119.00"
                img="https://s3-alpha-sig.figma.com/img/7c59/7aa9/1ee5df5d1fd65d8184246c0c9918f920?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qePW2P~4ee6PGvkm3il2uhwuv44DjX33i~oX4O524NFCvirG9Pa~hjcywsOmRgmBv-78O4S6vvFZoQ9AuuR72JukFXRk3UfLFSuOh6YGhWx9fg1v5aWySuQVCSo3sJvGDSjlcVdIvcV2GxOMOQugO6DtY2GblC9DgL0M9LSRI5Bvb0s1R8RQbVLs4h6pL~MKWFAjFUfGXtj7sBdL3t2bvs470QrpDOjE1oGvYIaO~HWrH28-pAAsMYA~gPCNLyyJwoupJsip5Kr-pHMWw0xlh2ZpgWONvNUNFrGqxpzAnZSFrwNLvRqL-~NqnhAGARsIRjBLS2MU1iWkyCs2LUS4rw__"
              />
            </div>
            {/* row2 */}
            <div className="flex gap-8 justify-between">
              <FlowerCard
                title="Barberton Daisy"
                price="$119.00"
                img="https://s3-alpha-sig.figma.com/img/4575/e3df/52fa214db1f3ce519277860c13b11e21?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PGWf8~ZaXe4A5XVZYHSo5pBv1M~zd~6y1Vi7Nzaaqcm2dBX1R5O2Aa7iE4qymcHzDwZ1PEaUSuIoad-ocnX3MCP8pCToGHx27s-dE~4zbB4jJQnrZtUfJQYRJ2LIHkPQdOtEs2oWNo4WaZcAa1VXFTPZZW0H-KfGhbgfYPX~2hAnP6mnnGP7BS63Ijd1f7zVeRxYy7XxD~628eCoblCwFlFHNX6-Gj3W3FBiujnVn3-TU0Nh7RCojNSoPkSEl~Kt-o~9UW5uz57~mb5h64JpmC2E7f7cTkiBxEsxhVKLsV-uH2qHYfnR5J4OO~QG9fuaAFQ~Rw83gngCohJQea5Gdw__"
              />
              <FlowerCard
                title="Angel Wing Begonia"
                price="$119.00"
                img="https://s3-alpha-sig.figma.com/img/9531/c63d/3f618aefdf1ccb10a5aa0e2d00f45d0b?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vox4-vUn9k2EWdrcBGtA2QIUTnVyR4-hEtsuJEUliOWnczO8tjAsJ4X8xZ-YwAXnSRm80JTsPlCvoykFbZydOxD95qSFdKq5lj8cNsry0eFlqLQzJw0O7Oxqfjeaf6jHWcpPAjABoKJwbBujpD26oEE-I~7Ko7nazjpudyoaFCaY1M7DY9IulR9CiZTMcqF6dQ9VEj7uDMgmS~QqvOrC4tjN2ZejexBDJ6EJp7c-Dbokg8f2tGfhpd1z3Q4jnnzpbHBMHDP2b1cNvmYOhJ9WzukMyC1oLiTIICBfAo3dc3B3Ahe55nM7Je3MjwDrla5cxNRqDx7I1hyx6F0cGN7mgQ__"
              />
              <FlowerCard
                title="African Violet"
                price="$119.00"
                img="https://s3-alpha-sig.figma.com/img/744c/96db/a60207fabc5a7d29f8801ecf6b4e2aed?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PT~tVsY~RsKBzxP3UZ6V47rLrMtGmOKc6GqkWwHuDHk~nZdkJZkDL~5gHSIjJRsh1L3uxdgp0~YjfTWZtnIpdfZqMLDvnQe78ds5DVmFZPIu8s~sEzAkE8aqmkgsOU6yUDnB491d-vyzPowUV5Yxs8ibHlqIBj4rY3zumbyU9ZIxnQngx6~aK00IfOocemArsmHV0py9ZKDRN1iZfpDtUnriGpK76vUO3r9Oxb5GkBP4uIcSoKXM~H5fIpgVVRAR-Q1UfIWsaTPo4JIrrPAHlssGUGS95Vx1gqaFSI3PoRAAJxzAc~sqj-FojEmJj7t-1z~AjRfSwYv6GIltIer1wg__"
              />
            </div>
            {/* row3 */}
            <div className="flex gap-8 justify-between">
              <FlowerCard
                title="Barberton Daisy"
                price="$119.00"
                img="https://s3-alpha-sig.figma.com/img/9957/e153/a59c050946e77e8fc7e11525e87c4678?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IskbCkxsz~MCq2-M0iVf3klcRziztLzXFLvMRgb9nH6TNaFd5uzUDjZuzxvJcAlHnH~08bPYdlYTpyNsE3LCDUN6Y86HZfTxCV1NEDR9dZzUJAzcaJQmlxqAdMR42PbVJBF-mUjonVNGzi0Oo0jsU5oPMMOI~8f9Zrj0aZSW1FTdV6EDynwRqRh3K4dNiIA~JInocWP8slNrCn5WTcCH6ARhV7MV3shKuAnVMnH0OttdcPESp7tTOayeW5k-50y7914x3w2xqltEfxLXYZIomlHKkjXVWmNDU1R8POTO345MpY73lBj4wM0-2Cx6RfO~NUDVEsLbH83HqANXbFy6zg__"
              />
              <FlowerCard
                title="Angel Wing Begonia"
                price="$119.00"
                img="https://s3-alpha-sig.figma.com/img/78e9/e6c1/90effae17498640571679183299f774e?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qzy-~iMPNyXKcbLw1mn96vKFyIwmwCvZlODXg3tEuBKj8~buIV-JWV0ue97Da0E8nB-Qt9IHZ7FpuCsVXVqbsil2Vt0kTfkh8uylaWoo98AVq6wdUT4kVdBoy-8PGOSJ2p7Bm~1bhaSFVSyBNfixh42cYpelWK2wHgZvtl021Iitc1d9XeAhQCCspx8Z6aSjuqb549YFeaoMXio~9uhd8rp8Mkl7L87oY9kg6t6QBTYfFLcipRAoMR-TYp7QSf2-9D7Tq370pJ8-usuPZLjWSPRW5TarqdsIKKF9hWxVcG-Sl2-1HsmrTiPFeb-qYiephK5yUMyAzNKy0RDbvGKPLg__"
              />
              <FlowerCard
                title="African Violet"
                price="$119.00"
                img="https://s3-alpha-sig.figma.com/img/5219/e659/b8a1d488abd136ce27f86ab3da3ceb37?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bGeHYImlEzWz2ppqMSDSjdfogAzXPQgALwW9Ijta9Rn6Z4tYbZc-lXZyIQQ2ldse7LkpRHb3Sp5MjIL4KIczKUJ1CsAWt3oD57Z1CmHNEatppfziMCrDi9pEdxARc7~Ye46HkIWxh9Cj07XPKfCb560gK9s0TRCBSFQLZc2ozuHYqL~yMatyteIMomoJ2-bDxrMqX3aGuo2qA1-9H9bFv230BfrqDAJrCKx0DObyxBz49F0XlD0lNzeUVreS1s-fTEBAf4Qn0e5BmVaERVWN5nk6tVIZpwhRD7VB3V-m6RrL4jengWFrUZKbIHQvZE3I~VEQ2Znrksm8wFHmKPByKQ__"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Flower pages */}
      <div className="text-right w-[80%] m-auto">
        <Pagination defaultCurrent={1} total={50} />
      </div>
      {/* Trends */}
      <div className="w-[80%] m-auto flex gap-7 mt-24">
        <Trends
          img={circle}
          img1={flower2}
          title="Summer cactus"
          title1="& succulents"
          description="We are an online plant shop offering a wide range of cheap and trendy plants"
        />
        <Trends
          img={circle}
          img1={trendFlower}
          title="Summer cactus"
          title1="& succulents"
          description="We are an online plant shop offering a wide range of cheap and trendy plants"
        />
      </div>
      {/* Our Blogs */}
      <div className="h-[447px] m-auto mt-36 w-[80%]">
        <h1 className="font-bold text-3xl">Our Blog Posts</h1>
        <p className="text-[14px] font-normal text-[#727272]">
          We are an online plant shop offering a wide range of cheap and trendy
          plants.
        </p>
        {/* prop blogs */}
        <div className="gap-11 justify-between flex mt-9">
          <Blog
            img="https://s3-alpha-sig.figma.com/img/4f35/4de5/b3a1897ab9540ae4953f1e0f0ace9952?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ifCuvN0Snz8IvlGT8wpFAzB763ETcIoSpquVsB-jQhA1Qhj4tfU75Bq9zUV-bGObaZv~XZJ5o7VBzR-axN~aBX260ad1TIMLon1yfM0ggt7rPw7woPtZR-9MlrpLu8G9LN8nfsSj0yUUnvjlqmY3o5km00iI5Ng9AtksVPTBUccPgL8bSb7JIVQteM9GuZiZ414RWE8c99tBwgCpdgeKh~UNhatKc0wL612YEVzAlxW~aAp~LQ9oMZA8mauSB0ClR~2U4oHvqbcUDyupFd1pj4O1KfHpgdvdj8RUGQIbCOpXkrALH2RZW43SpI4vZJGloQMcOnj4yCzdHapBdJrQfA__"
            dates="September 12 I Read in 6 minutes"
            title="Cactus & Succulent Care Tips"
            description="Cacti are succulents are easy care plants for any home or patio."
            read="Read More ->"
          />
          <Blog
            img="https://s3-alpha-sig.figma.com/img/5d6a/fe05/19b43ea40d6912ed9f6c86bde26ac437?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YEfRtFKJ0lHw3ml-l-j8o4CFL5Ecu9scxcgf8kFgvvQk9Kc6YSGQDwQ7gF-7b3TJ8lOk9zc36lJiFiie40477j2ol96FXt93zo7LJPEdcwwQPO2rvrrL3TlRcAjGjvHFB3qlPfVraYRRYXdZbzM-fc~A0RZUElAenLnCNscMw1fWUqybJf-6dmeu5v40ZoWca13SW2xJ7GQxXWqjyemip7wTOr~-4KDqByYLBHDMiBUemywCKr4GCTJJE4CfBsAHxoNpSNJIKOuFgjw-5Ie9C5VjWfGF-i5jl1sFapdsN9n8-ghFNjF-8PtMmonU4Xc0qrxa62eMpwqJI6s1Zl5qRA__"
            dates="September 12 I Read in 6 minutes"
            title="Cactus & Succulent Care Tips"
            description="Cacti are succulents are easy care plants for any home or patio."
            read="Read More ->"
          />
          <Blog
            img="https://s3-alpha-sig.figma.com/img/708d/5ac3/4916119d54b3f3ce81cb3585303dc87b?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CarTEg6rthLcUV7e3x1jboSIzpBMa674PNPKl78ZEP9~2X~Hq6rKLWkGaAbyLsheEU3odpqGDILJQFDhyLtP3NhTlVTt1KqxYv1jGR7HsbJxc0oakc-JEb62CtQx4QjdwV-mw70Dqm7Jy2Z1mImV-vEb3HaCeF0nlNjTqYTOlbzjVQqGVcHnMoUBOds1hRMzTK9gi-zZF6BKgL2lfEyeZnVOPjasSW4tRe25CuAx~W6DXilaaIUMgYmujNxWLZRWSJ3qRMWrjXzKc8skViJsvQXeeSvOGYiSq9XxE6-gFCsIoewai10y8lhgWwEhctCWFZNcEsY5r2WejkesorD4rQ__"
            dates="September 12 I Read in 6 minutes"
            title="Cactus & Succulent Care Tips"
            description="Cacti are succulents are easy care plants for any home or patio."
            read="Read More ->"
          />
          <Blog
            img="https://s3-alpha-sig.figma.com/img/76ec/a5ae/aad8a62909bb4bd3fb02922695ada788?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jecRJDCxoLr~kJfvnhL5eAcslFxXzZfzqIiFx0r687mi4GcZSH4vAJMu8S1iibO1oFtwp3h1zzdDUtHZYA0gPc98WBP9JxoTps4Aw1oMIAloe9R7qPjhyZJkvmpXB9GRuONdir4WTcAl0h8CoVOP2C7grq1LppfnbaSAuwGtNt-E4oSFbuP2tOFMcIRqUQhLTzf55~X-uP49YJbyGpY0pxDEIZ6g9E1KCN2ICtjqE~frfZo6rR-brL8DqyY~gYlkuOppAa8Hrd2lRdY6Cb2fL6a~wrPtJDGKjsCsKGXv1UssUh-L5inctle7lhxIXxgN7sUCQGwZIif9Y8hdRQXS5Q__"
            dates="September 12 I Read in 6 minutes"
            title="Cactus & Succulent Care Tips"
            description="Cacti are succulents are easy care plants for any home or patio."
            read="Read More ->"
          />
        </div>
      </div>
      {/* Newsletter */}
      <div className="h-[250px] bg-[#FBFBFB] w-[80%] m-auto p-6 flex">
        <div className="w-[70%] flex g-7 justify-between">
          <News
            img={gardenCare}
            title="Garden Care"
            description="We are an online plant shop offering a wide range of cheap and trendy plants."
          />
          <News
            img={plantRev}
            title="Plant Renovation"
            description="We are an online plant shop offering a wide range of cheap and trendy plants."
          />
          <News
            img={wateringGarden}
            title="Watering Graden"
            description="We are an online plant shop offering a wide range of cheap and trendy plants."
          />
        </div>
        <div className="w-[30%] text-left">
          <h1 className="text-lg font-bold">
            Would you like to join newsletters?
          </h1>
          <div>
            <input
              className="h-[40px] bg-white"
              type="email"
              placeholder="enter your email address..."
            />
            <Button className="bg-green-600 rounded-none rounded-e-lg rounded-br-lg">
              Join
            </Button>
          </div>
          <p className="text-[14px] font-normal text-[#727272]">
            We usually post offers and challenges in newsletter. We’re your
            online houseplant destination. We offer a wide range of houseplants
            and accessories shipped directly from our (green)house to yours!
          </p>
        </div>
      </div>
      {/* Contact */}
      <div className="flex justify-between items-center w-[80%] bg-[#46A3581A] m-auto h-[88px]">
        <div className="flex justify-between items-center w-[80%]">
          <div className="pl-6">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Flogo.svg?alt=media&token=fc9659d6-f435-43b9-a624-8b0d3a574baa"
              alt=""
            />
          </div>

          <div className="flex gap-2.5 justify-between items-center">
            <img src={location} alt="" />
            <p className="text-[14px]">
              70 West Buckingham Ave. Farmingdale, NY 11735
            </p>
          </div>
          <div className="flex gap-2.5">
            <img src={mail} alt="" />
            <p className="text-[14px]">contact@greenshop.com</p>
          </div>
          <div className="flex gap-2.5">
            <img className="w-[15px] h-[15px]" src={call} alt="" />
            <p className="text-[14px]">+88 01911 717 490</p>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="flex h-[236px] w-[80%] m-auto justify-between pt-8 pl-6 text-left">
        <div className="flex flex-col gap-[10px]">
          <h1 className="text-base font-bold">My Account</h1>
          <p className="text-[14px]">My Account</p>
          <p className="text-[14px]">Address</p>
          <p className="text-[14px]">Wishlist</p>
        </div>
        <div className="flex flex-col gap-[10px]">
          <h1 className="text-base font-bold">Help & Guide</h1>
          <p className="text-[14px]">Help Center</p>
          <p className="text-[14px]">How to buy</p>
          <p className="text-[14px]">Shipping & Delivery</p>
          <p className="text-[14px]">Product Policy</p>
          <p className="text-[14px]">How to return</p>
        </div>
        <div className="flex flex-col gap-[10px]">
          <h1 className="text-base font-bold">Categories</h1>
          <p className="text-[14px]">House Plants</p>
          <p className="text-[14px]">Potter Plants</p>
          <p className="text-[14px]">Seeds</p>
          <p className="text-[14px]">Small Plants</p>
          <p className="text-[14px]">Accesories</p>
        </div>
        <div>
          <h1 className="text-base font-bold">Social Media</h1>
          {/* icons */}
          <div className="flex pt-5">
            <img src={facebook} alt="" />
            <img src={insta} alt="" />
            <img src={twitter} alt="" />
            <img src={linked} alt="" />
            <img src={youtube} alt="" />
          </div>
          <h1 className="text-base font-bold pt-8">We accept</h1>
          <img src={payment} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
