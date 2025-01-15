import { CountdownTimer } from "@/components/common/countdown-timer";

export function BuyCard() {
  return (
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
        <div className="relative flex flex-col items-center -top-1">
          <img src="https://wallstreetpepe.com/assets/images/secondary-btn.svg" className="absolute " alt="" />
          <div className=" text-black font-bold relative top-4">BUY WITH CARD</div>
        </div>
        <div className="space-y-4 relative flex flex-col items-center mt-12 top-10 ">
          <img src="https://wallstreetpepe.com/assets/images/secondary-btn.svg" className="absolute mb-12" alt="" />
          <div className=" text-black font-bold relative">BUY WITH CARD</div>
        </div>
      </div>
      <a href="#" className="block text-center text-sm text-blue-600 hover:underline mt-24">
        Don't Have A Wallet?
      </a>
      <div className="absolute -right-4 -bottom-4 bg-green-400 text-black text-sm font-bold p-2 rounded-full transform rotate-12">
        27% REWARDS
      </div>
    </div>
  );
}
