import Marquee from "react-fast-marquee";
import { BuyCard } from "../common/BuyCard";

const ChapterTwo = () => {
  return (
    <div className="bg-chapterTwo-bg bg-cover">
      <div className=" relative flex justify-between  items-start pt-12 px-5">
        <div className="left flex flex-col items-start sm:flex p-10">
          <div className="text-black flex items-start">
            <h3 className="text-6xl uppercase font-bold drop-shadow-primary">Chapter 2</h3>
          </div>
          <div className=" flex flex-col  items-center -rotate-3">
            <div className="py-2 px-10 w-fit  bg-[#a3e9f3] border-4 border-black mt-10">
              <span className="text-black text-3xl uppercase drop-shadow-primary font-semibold ">
                "The Rich Frog March"
              </span>
            </div>
            <div className=" bg-white border-black border-4 border-t-0 p-2 text-center max-w-md">
              <span className="text-center block">
                He assembled an ambitious group of like-minded traders and thirsty degens to share his big-brained
                calls. Together, they’d crush the bull run...
              </span>
            </div>
          </div>
        </div>
        <img
          src="https://wallstreetpepe.com/assets/images/svg-icons/chapters/group.svg"
          alt="chapter-background-image-gif"
          className="w-[50vw] absolute top-40 left-[13%]"
        />
        <div className="hidden md:block">
          <BuyCard />
        </div>
      </div>
      <Marquee className=" bg-[#a3e9f3] mt-8 h-10 px-2 text-lg font-bold" pauseOnHover>
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

export default ChapterTwo;
