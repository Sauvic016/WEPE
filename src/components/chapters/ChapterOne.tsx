import Marquee from "react-fast-marquee";
import { BuyCard } from "../common/BuyCard";

const ChapterOne = () => {
  return (
    <div id="chapter-one" className="bg-chapterOne-bg bg-cover">
      <div className=" relative flex justify-between  items-start pt-12 px-5">
        <div className="left flex flex-col items-start sm:flex p-10">
          <div className="text-black flex items-start">
            <h3 className="text-6xl uppercase font-bold drop-shadow-primary">Chapter 1</h3>
          </div>
          <div className=" flex flex-col  items-center -rotate-3">
            <div className="py-2 px-10 w-fit  bg-[#eeb5fa] border-2 border-black mt-10">
              <span className="text-black text-3xl uppercase drop-shadow-primary font-semibold ">
                "Catching the whales"
              </span>
            </div>
            <div className=" bg-white border-black p-2 text-center max-w-md">
              <span className="text-center block">
                WEPE was tired of legacy whales and corrupt KOLs manipulating the little guys, always bloating their
                wallets. So he decided to catch them out and flip the script...
              </span>
            </div>
          </div>
        </div>
        <img
          src="https://wallstreetpepe.com/assets/images/gif/WHALE.gif"
          alt="chapter-background-image-gif"
          className="w-[40vw] absolute left-[23%]"
        />
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

export default ChapterOne;
