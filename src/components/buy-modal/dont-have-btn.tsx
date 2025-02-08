// import { Wallet } from "lucide-react";
// import { WalletOption } from "@/types";
// import { WalletButton } from "./wallet-button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import Image from "../../assets/Untitled.png";
import Image2 from "../../assets/Untitled1.png";
interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
  // onWalletConnect: (walletId: string) => void;
  // walletOptions: WalletOption[];
}

export function DontHaveModal({ isOpen, onClose }: WalletModalProps) {
  // export function DontHaveModal({ isOpen, onClose, onWalletConnect, walletOptions }: WalletModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="p-0 max-w-none w-screen h-[80vh] flex items-center justify-center bg-transparent border-none"
        onClick={onClose}
        // closeButton={false}
      >
        {/* <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center font-comic">Connect Wallet</DialogTitle>
          <DialogDescription className="text-center text-gray-700 font-comic">
            If you already have a wallet, select your desired wallet from the options below. If you don't have a wallet,
            download{" "}
            <a href="#" className="underline font-semibold">
              Best Wallet
            </a>{" "}
            to get started.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 mt-4">
          {walletOptions.map((wallet) => (
            <WalletButton key={wallet.id} wallet={wallet} onClick={onWalletConnect} />
          ))}
        </div>

        <button
          onClick={() => onWalletConnect("no-wallet")}
          className="w-full mt-4 bg-[#e9d5ff] rounded-xl p-4 flex items-center justify-center space-x-2 hover:bg-[#dcc6f0] transition-colors"
        >
          <Wallet className="w-5 h-5" />
          <span className="font-comic">I Don't Have A Wallet</span>
        </button> */}
        <img src={Image} alt="" className="hidden md:block w-full h-full object-contain" />
        <img src={Image2} alt="" className=" md:hidden w-full h-full object-contain" />
      </DialogContent>
    </Dialog>
  );
}
