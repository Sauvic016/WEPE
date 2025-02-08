import { Wallet } from "lucide-react";
import { WalletOption } from "@/types";
import { WalletButton } from "./wallet-button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Link } from "react-router";

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
  onWalletConnect: (walletId: string) => void;
  walletOptions: WalletOption[];
}

export function WalletModal({ isOpen, onClose, onWalletConnect, walletOptions }: WalletModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-[#f8e7ff] border-none">
        <DialogHeader>
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

        <Link
          to={"https://community.trustwallet.com/signup"}
          className="w-full mt-4 bg-[#e9d5ff] rounded-xl p-4 flex items-center justify-center space-x-2 hover:bg-[#dcc6f0] transition-colors"
        >
          <Wallet className="w-5 h-5" />
          <span className="font-comic">I Don't Have A Wallet</span>
        </Link>
      </DialogContent>
    </Dialog>
  );
}
