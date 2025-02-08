import { useState } from "react";
import { WalletModal } from "./buy-modal/wallet-modal";
import { WalletOption } from "@/types";
import { WalletAccordion } from "@/components/accordians/howto-accordian";
import { BuyCard } from "./common/BuyCard";
import Marquee from "react-fast-marquee";

const HowToBuy = () => {
  const [isOpen, setIsOpen] = useState(false);
  const walletOptions: WalletOption[] = [
    {
      id: "best-wallet",
      name: "Best Wallet",
      icon: "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/icon/generic.png",
    },
    {
      id: "wallet-connect",
      name: "Wallet Connect",
      icon: "https://raw.githubusercontent.com/WalletConnect/walletconnect-assets/master/Icon/Blue.png",
    },
    {
      id: "metamask",
      name: "MetaMask",
      icon: "https://raw.githubusercontent.com/MetaMask/brand-resources/master/SVG/metamask-fox.svg",
    },
    {
      id: "coinbase",
      name: "Coinbase Wallet",
      icon: "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/icon/generic.png",
    },
  ];

  const handleWalletConnect = (walletId: string) => {
    console.log(`Connecting to ${walletId}`);
    // Implement wallet connection logic here
    setIsOpen(false);
  };
  return (
    <div className="bg-howtb-bg bg-cover ">
      <div className="text-6xl uppercase font-bold drop-shadow-primary pt-6"> How To Buy WEPE TOKen</div>
      <div className="grid lg:grid-cols-3 grid-cols-1 pt-12 gap-4 ">
        <div className="flex flex-col gap-2  ml-4">
          <div className="bg-black p-4 border-white border-2 text-xs md:text-md">
            <div className="text-green-500">TOKEN ADDRESS</div>
            <div className="text-white text-wrap ">0xccB365D2e11aE4D6d74715c680f56cf58bF4bF10</div>
          </div>
          <div className="bg-black p-4 border-white border-2">
            <div className="text-red-500">TOKEN SUPPLY</div>
            <div className="text-white">200,000,000,000 $WEPE</div>
          </div>

          <div className="relative ">
            <img src="https://wallstreetpepe.com/assets/images/tokenomics-btn.png" alt="" />
            <div className="absolute top-4 left-8 font-semibold text-2xl">Full Tokenomics</div>
          </div>

          <div
            className="hidden relative md:flex space-x-40 text-sm lg:space-x-0 cursor-pointer w-1/2"
            onClick={() => setIsOpen(true)}
          >
            <div className="absolute">
              <img src="https://wallstreetpepe.com/assets/images/svg-icons/how-to-buy/how_to_buy.svg" alt="" />
            </div>
            <div className="relative -right-36">
              {" "}
              <img
                src="https://wallstreetpepe.com/assets/images/svg-icons/how-to-buy/how_to_buy2.svg"
                alt=""
                className=""
              />
              <div className="absolute text-xs md:text-lg top-8 lg:top-12 left-14 ">
                Dunno about WALLETS ?<br /> click here
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <WalletAccordion />
          <img src="https://wallstreetpepe.com/assets/images/svg-icons/how-to-buy/how_to_buy3.svg" alt="" />
        </div>
        <div className="hidden md:block">
          <BuyCard />
        </div>
      </div>
      <Marquee className=" bg-black mt-8 h-10 px-2 text-lg font-bold" pauseOnHover>
        <div className="text-purple-400 flex px-2">
          "Early buyers are sitting on very attractive unrealized gains." - Cointelegraph{" "}
          <span className="px-2">
            <img src="https://wallstreetpepe.com/assets/images/svg-icons/marquee_icon_white.svg" alt="hi" />
          </span>
        </div>
        <div className="text-purple-400 flex px-2">
          "Early buyers are sitting on very attractive unrealized gains." - Cointelegraph{" "}
          <span className="px-2">
            <img src="https://wallstreetpepe.com/assets/images/svg-icons/marquee_icon_white.svg" alt="hi" />
          </span>
        </div>
        <div className="text-purple-400 flex px-2">
          "Early buyers are sitting on very attractive unrealized gains." - Cointelegraph{" "}
          <span className="px-2">
            <img src="https://wallstreetpepe.com/assets/images/svg-icons/marquee_icon_white.svg" alt="hi" />
          </span>
        </div>
      </Marquee>
      <WalletModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onWalletConnect={handleWalletConnect}
        walletOptions={walletOptions}
      />
    </div>
  );
};

export default HowToBuy;
