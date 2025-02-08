import Marquee from "react-fast-marquee";
import { BuyCard } from "../common/BuyCard";

const ChapterFour = () => {
  return (
    <div className="bg-chapterFour-bg bg-cover">
      <div className=" relative flex justify-between  items-start pt-12 px-5">
        <div className="left flex flex-col items-start sm:flex p-4">
          <div className="text-black flex items-start">
            <h3 className="text-6xl uppercase font-bold drop-shadow-primary">Chapter 4</h3>
          </div>
          <div className=" flex flex-col  items-center -rotate-3">
            <div className="py-4 px-10 w-fit  bg-[#a3e9f3] border-4 border-black mt-10">
              <span className="text-black text-3xl uppercase drop-shadow-primary font-semibold ">
                "Fast lane to fortune"
              </span>
            </div>
            <div className=" bg-white border-black py-4 leading-9 border-t-0 border-4 text-center max-w-sm">
              <span className="text-center block">
                With Lambos on pre-order and his army of degens at his back, WEPE’s influence is growing. Will you
                choose rich or stay poor? Enlist in the WEPE Army today!
              </span>
            </div>
          </div>
        </div>
        <img
          src="https://wallstreetpepe.com/assets/images/gif/LAMBO.gif"
          alt="chapter-background-image-gif"
          className="w-[50vw] absolute left-[13%]"
        />
        <div className="hidden md:block">
          <BuyCard />
        </div>
      </div>
      <Marquee className="  bg-[#a3e9f3] mt-8 h-10 px-2 text-lg font-bold" pauseOnHover>
        <div className="text-blue-700 flex px-2">
          "Early buyers are sitting on very attractive unrealized gains." - Cointelegraph{" "}
          <span className="px-2">
            <img src="https://wallstreetpepe.com/assets/images/svg-icons/marquee_icon_white.svg" alt="hi" />
          </span>
        </div>
        <div className="text-blue-700 flex px-2">
          "Early buyers are sitting on very attractive unrealized gains." - Cointelegraph{" "}
          <span className="px-2">
            <img src="https://wallstreetpepe.com/assets/images/svg-icons/marquee_icon_white.svg" alt="hi" />
          </span>
        </div>
        <div className="text-blue-700 flex px-2">
          "Early buyers are sitting on very attractive unrealized gains." - Cointelegraph{" "}
          <span className="px-2">
            <img src="https://wallstreetpepe.com/assets/images/svg-icons/marquee_icon_white.svg" alt="hi" />
          </span>
        </div>
      </Marquee>
    </div>
  );
};

export default ChapterFour;
