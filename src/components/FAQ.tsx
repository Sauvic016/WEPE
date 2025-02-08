// import { useState } from "react";
// import { WalletModal } from "./buy-modal/wallet-modal";
// import { WalletOption } from "@/types";
// import { WalletAccordion } from "@/components/accordians/howto-accordian";
import { BuyCard } from "./common/BuyCard";
import FAQaccordian from "./accordians/FAQ-accordian";
import { Link } from "react-router";

const FAQ = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const walletOptions: WalletOption[] = [
  //   {
  //     id: "best-wallet",
  //     name: "Best Wallet",
  //     icon: "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/icon/generic.png",
  //   },
  //   {
  //     id: "wallet-connect",
  //     name: "Wallet Connect",
  //     icon: "https://raw.githubusercontent.com/WalletConnect/walletconnect-assets/master/Icon/Blue.png",
  //   },
  //   {
  //     id: "metamask",
  //     name: "MetaMask",
  //     icon: "https://raw.githubusercontent.com/MetaMask/brand-resources/master/SVG/metamask-fox.svg",
  //   },
  //   {
  //     id: "coinbase",
  //     name: "Coinbase Wallet",
  //     icon: "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/icon/generic.png",
  //   },
  // ];

  // const handleWalletConnect = (walletId: string) => {
  //   console.log(`Connecting to ${walletId}`);
  //   // Implement wallet connection logic here
  //   setIsOpen(false);
  return (
    <div className="bg-howtb-bg bg-cover min-h-screen  flex flex-col lg:px-12">
      <div className="grid lg:grid-cols-3 grid-cols-1 pt-12 gap-4 flex-grow">
        <div className="flex flex-col">
          <div className="text-6xl uppercase font-bold drop-shadow-primary pt-6"> WEPE Crypto Presale FAQs</div>
          <FAQaccordian />
        </div>
        <div className="flex flex-col gap-6">
          <img src="https://wallstreetpepe.com/assets/images/wepenomics.gif" alt="" className="w-24 " />
          <div className="-rotate-12 relative">
            <img src="https://wallstreetpepe.com/assets/images/about-img.gif" alt="" className="w-44" />
            <div className="bg-white p-2 border border-black max-w-sm">
              "If I could be a rich WEPE or a poor WEPE, I'd choose rich every time!"
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <BuyCard />
        </div>
      </div>
      <div className="mt-12 md:hidden bg-black flex flex-col justify-center ">
        <div className="flex justify-center">
          <img src="https://wallstreetpepe.com/assets/images/svg-icons/token.svg" alt="" />
        </div>
        <div className="flex justify-center mt-2 gap-4">
          <Link to={"https://t.me/WEPEtoken"}>
            {" "}
            <img src="https://wallstreetpepe.com/assets/images/svg-icons/telegram.svg" alt="" />
          </Link>
          <Link to={"https://x.com/wepetoken"}>
            <img src="https://wallstreetpepe.com/assets/images/svg-icons/twitter.svg" alt="" />
          </Link>
        </div>
      </div>
      <footer className="lg:mt-36 py-4 bg-black lg:bg-transparent text-white lg:text-black">
        <div>
          <div className="flex justify-center gap-4 font-semibold">
            <div className="cursor-pointer underline">Cookies</div>
            <div className="cursor-pointer underline">T&Cs</div>
            <div className="cursor-pointer underline">Privacy Policy</div>
          </div>
          <div className="text-xs text-center">
            Disclaimer: WEPE, the wall Street Pepe, is meme coin satire of degenerate investing themes in finance and
            crypto. Ape in but don't bet the house. Rich talk and bravado is NFA. DYOR.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FAQ;
