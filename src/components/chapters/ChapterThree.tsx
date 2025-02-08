import Marquee from "react-fast-marquee";
import { BuyCard } from "../common/BuyCard";

const ChapterThree = () => {
  return (
    <div className="bg-chapterThree-bg bg-cover">
      <div className=" relative flex justify-between  items-start pt-12 px-5">
        <div className="left flex flex-col items-start sm:flex p-10">
          <div className="text-black flex items-start">
            <h3 className="text-6xl uppercase font-bold drop-shadow-primary">Chapter 3</h3>
          </div>
          <div className=" flex flex-col  items-center -rotate-3">
            <div className="py-2 px-10 w-fit  bg-[#eeb5fa] border-4 border-black mt-10">
              <span className="text-black text-3xl uppercase drop-shadow-lg font-semibold ">
                "Frog Street Takeover"
              </span>
            </div>
            <div className=" bg-white border-black border-4 border-t-0 p-2 text-center max-w-md">
              <span className="text-center block">
                Blessed with the sickest inside knowledge and a growing frog following, the WEPE Army is ready to whale
                in together and out-trade the hedge fund fraudsters...
              </span>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col relative"> */}
        <img src="https://wallstreetpepe.com/assets/images/wepenomics.gif" alt="money gif" className="w-[12vw]  " />
        <img
          src="https://wallstreetpepe.com/assets/images/svg-icons/chapters/speakers.svg"
          alt="chapter-background-image-gif"
          className="w-[60vw] absolute top-44 left-[10%]"
        />
        {/* </div> */}

        <div className="hidden md:block">
          <BuyCard />
        </div>
      </div>
      <Marquee className=" bg-[#eeb5fa] mt-8 h-10 px-2 text-lg font-bold" pauseOnHover>
        <div className="text-purple-700 flex px-2">
          "Early buyers are sitting on very attractive unrealized gains." - Cointelegraph{" "}
          <span className="px-2">
            <img src="https://wallstreetpepe.com/assets/images/svg-icons/marquee_icon_white.svg" alt="hi" />
          </span>
        </div>
        <div className="text-purple-700 flex px-2">
          "Early buyers are sitting on very attractive unrealized gains." - Cointelegraph{" "}
          <span className="px-2">
            <img src="https://wallstreetpepe.com/assets/images/svg-icons/marquee_icon_white.svg" alt="hi" />
          </span>
        </div>
        <div className="text-purple-700 flex px-2">
          "Early buyers are sitting on very attractive unrealized gains." - Cointelegraph{" "}
          <span className="px-2">
            <img src="https://wallstreetpepe.com/assets/images/svg-icons/marquee_icon_white.svg" alt="hi" />
          </span>
        </div>
      </Marquee>
    </div>
  );
};

export default ChapterThree;
