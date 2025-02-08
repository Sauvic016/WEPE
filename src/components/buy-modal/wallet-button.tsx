import { WalletOption } from "@/types";

interface WalletButtonProps {
  wallet: WalletOption;
  onClick: (walletId: string) => void;
}

export function WalletButton({ wallet, onClick }: WalletButtonProps) {
  return (
    <button
      onClick={() => onClick(wallet.id)}
      className="w-full bg-[#ffd966] border-2 border-black rounded-xl p-4 flex items-center justify-between hover:bg-[#ffcd38] transition-colors"
    >
      <span className="font-comic text-lg">{wallet.name}</span>
      <img src={wallet.icon} alt={wallet.name} className="w-6 h-6" />
    </button>
  );
}
