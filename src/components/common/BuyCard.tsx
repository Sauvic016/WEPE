import { useState } from "react";
import { CountdownTimer } from "@/components/common/countdown-timer";
import { WalletModal } from "../buy-modal/wallet-modal";
import { DontHaveModal } from "../buy-modal/dont-have-btn";

export interface WalletOption {
  id: string;
  name: string;
  icon: string;
}
export function BuyCard() {
  const handleBuyWCard = () => {
    setIsOpen(true);
  };
  const [isOpen, setIsOpen] = useState(false);
  const [isDontOpen, setIsDontOpen] = useState(false);

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
    setIsDontOpen(false);
  };
  return (
    <div className="flex gap-2">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <div className="flex justify-between mb-4 font-bold">
          <div className="flex items-center gap-2">
            <span className="text-gray-600 flex">
              <img src="https://wallstreetpepe.com/assets/images/svg-icons/cart-icon.svg" alt="" /> = 0
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-black text-2xl font-bold">BUY $WEPE</span>
          </div>
          <div className="flex items-center ">
            <span className="text-gray-600 flex">
              <img src="https://wallstreetpepe.com/assets/images/svg-icons/stake-icon.svg" alt="" /> = 0
            </span>
          </div>
        </div>
        <div className="text-center mb-4">
          <p className="font-bold">1 $WEPE = $0.00038647</p>
        </div>
        <CountdownTimer />
        <div className=" text-black text-center py-2 rounded-md mb-4 relative">
          <img
            src="https://wallstreetpepe.com/assets/images/progress-bar.png"
            className="absolute inset-0 "
            alt="progress-bar"
          />
          <div className="bg-[#01ff1a] relative -top-1 w-[95%] h-4 rounded-lg">UNTIL NEXT PRICE increase</div>{" "}
        </div>
        <div className="text-center mb-4">
          <p className="text-gray-600 font-bold">USDT RAISED: $47,922,602.26 / $48,442,752</p>
        </div>
        <div className="space-y-4 py-2">
          <div className="cursor-pointer relative flex flex-col items-center -top-1">
            <img src="https://wallstreetpepe.com/assets/images/secondary-btn.svg" className="absolute " alt="" />
            <div className="text-black text-xl font-bold relative top-4" onClick={handleBuyWCard}>
              BUY WITH CARD
            </div>
          </div>
          <div className="space-y-4 cursor-pointer relative flex flex-col items-center mt-12 top-10 ">
            <img src="https://wallstreetpepe.com/assets/images/secondary-btn.svg" className="absolute mb-12" alt="" />
            <div className=" text-black text-xl font-bold relative" onClick={handleBuyWCard}>
              BUY WITH CRYPTO
            </div>
          </div>
        </div>
        <div
          onClick={() => setIsDontOpen(true)}
          className="block text-center text-sm text-blue-600 hover:underline mt-24"
        >
          Don't Have A Wallet?
        </div>
        {/* <div className="absolute -right-4 -bottom-4 bg-green-400 text-black text-sm font-bold p-2 rounded-full transform rotate-12">
        27% REWARDS
      </div> */}
        <WalletModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onWalletConnect={handleWalletConnect}
          walletOptions={walletOptions}
        />
        <DontHaveModal
          isOpen={isDontOpen}
          onClose={() => setIsDontOpen(false)}
          // onWalletConnect={handleWalletConnect}
          // walletOptions={walletOptions}
        />
      </div>
      <div className="hidden md:block">
        <div className="grid gap-4">
          <img src="https://wallstreetpepe.com/assets/images/svg-icons/telegram.svg" alt="" />
          <img src="https://wallstreetpepe.com/assets/images/svg-icons/twitter.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
