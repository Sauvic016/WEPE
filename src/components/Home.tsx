import Marquee from "react-fast-marquee";
import { Link } from "react-router";
import { BuyCard } from "./common/BuyCard";

const Home = () => {
  return (
    <>
      <div className="grid  md:grid-cols-3 bg-home-bg bg-cover bg-center bg-no-repeat">
        <div className="leftbar flex flex-col justify-around ">
          <div className="flex flex-col items-center mt-6 relative">
            <div className="underline text-4xl font-bold my-4">$WEPE TOKEN</div>
            <img
              className="absolute left-0"
              src="https://wallstreetpepe.com/assets/images/svg-icons/left-arrow-1.svg"
              alt="arrow points to swepe token"
            />
            <div className="uppercase text-2xl font-bold">Crypto presale</div>
          </div>
          <div className="font-bold flex flex-col items-center  relative">
            <div className=" text-5xl tracking-wider">WALL STREET</div>

            <div className="text-8xl drop-shadow-primary tracking-[.1em] pl-4">PEPE</div>
          </div>
          <div className="relative">
            <img
              className="absolute -top-12 left-0"
              src="https://wallstreetpepe.com/assets/images/svg-icons/left-arrow-2.svg"
              alt="arrow points to pepe text not important"
            />
            <img
              className="h-60 w-[30rem]"
              src="https://wallstreetpepe.com/assets/images/wepe-mascot.gif"
              alt="taking-frog-gif"
            />
          </div>
        </div>
        <div className="midbar flex flex-col items-center relative">
          <img
            className="absolute top-0 -left-10"
            src="https://wallstreetpepe.com/assets/images/svg-icons/top-arrow.svg"
            alt=""
          />
          <div className=" mt-10 uppercase flex justify-center  text-center  bg-[#81ffa8] -rotate-3 shadow-primary shadow-gray-400/45 text-3xl py-2 border-2 border-black ">
            <div className="drop-shadow-secondary font-bold">Trade Like Pepe. Buy $WEPE Crypto Presale!</div>
          </div>
          <div className="shadow-primary shadow-slate-400/35 bg-white p-2 -rotate-3 text-center  w-[75%] text-lg font-bold border-2 border-black ">
            Wall Street Pepe hates that whales are hiding in insider groups. So he decided to make his own. Join the
            WEPE Token Army - frogs strong together!
          </div>
          <div className="space-y-2 flex flex-col items-center">
            {" "}
            <div className="flex gap-2 font-bold  tracking-wide mt-12 ">
              <img
                className="h-6 w-6"
                src="https://wallstreetpepe.com/assets/images/svg-icons/wobs-icon.svg"
                alt="pepe-icon"
              />
              WEPE Community: Choose rich together!{" "}
            </div>
            <div className="flex gap-2 font-bold  tracking-wide">
              <img
                className="h-6 w-6"
                src="https://wallstreetpepe.com/assets/images/svg-icons/wobs-icon.svg"
                alt="pepe-icon"
              />
              WEPE Token Insights: Trade like a pro!
            </div>
            <div className="flex gap-2 font-bold  tracking-wide">
              <img
                className="h-6 w-6"
                src="https://wallstreetpepe.com/assets/images/svg-icons/wobs-icon.svg"
                alt="pepe-icon"
              />
              WEPE Picks: Mad degen plays!
            </div>{" "}
          </div>
          <div className="join-now-section mt-12 flex flex-col items-center">
            <div className="drop-shadow-secondary text-4xl font-bold">JOIN WEPE ARMY</div>
            <div className="relative">
              <img
                className="h-20 w-24 absolute top-0 -left-28"
                src="https://wallstreetpepe.com/assets/images/svg-icons/arrow-banner.svg"
                alt="join-arrow-button"
              />
              <Link to={"/chapter-one"}>
                <img
                  className="h-36 w-36 cursor-pointer"
                  src="https://wallstreetpepe.com/assets/images/svg-icons/home_arrow.svg"
                  alt="join-arrow-button"
                />
              </Link>

              <img
                className="absolute bottom-0 right-52"
                src="https://wallstreetpepe.com/assets/images/svg-icons/bottom-arrow.svg"
                alt=""
              />
            </div>{" "}
          </div>
        </div>
        <div className="rightbar mt-12">
          <BuyCard />
        </div>
      </div>
      <Marquee className="bg-black h-10 px-2 text-lg font-bold" pauseOnHover>
        <div className="text-white flex px-2">
          "Early buyers are sitting on very attractive unrealized gains." - Cointelegraph{" "}
          <span className="px-2">
            <img src="https://wallstreetpepe.com/assets/images/svg-icons/marquee_icon_white.svg" alt="hi" />
          </span>
        </div>
        <div className="text-violet-200 flex px-2">
          "Early buyers are sitting on very attractive unrealized gains." - Cointelegraph{" "}
          <span className="px-2">
            <img src="https://wallstreetpepe.com/assets/images/svg-icons/marquee_icon_white.svg" alt="hi" />
          </span>
        </div>
        <div className="text-purple-200 flex px-2">
          "Early buyers are sitting on very attractive unrealized gains." - Cointelegraph{" "}
          <span className="px-2">
            <img src="https://wallstreetpepe.com/assets/images/svg-icons/marquee_icon_white.svg" alt="hi" />
          </span>
        </div>
      </Marquee>
    </>
  );
};

export default Home;
