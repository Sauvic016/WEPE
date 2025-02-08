import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function WalletAccordion() {
  return (
    <Accordion type="single" collapsible className="  max-w-xs ">
      <AccordionItem value="get-wallet ">
        <AccordionTrigger className="border-black border-2 bg-[#ff00ff] hover:no-underline text-white px-5 text-2xl">
          Get Wallet
        </AccordionTrigger>
        <AccordionContent className="bg-white  p-2">
          <div className="font-comic space-y-2">
            <p>WEPE Army already have wallets? 😊</p>
            <p>
              But if not, try MetaMask or Best Wallet. You can even buy $WEPE directly in 'Upcoming Tokens' in{" "}
              <a href="#" className="text-blue-600 underline">
                Best Wallet
              </a>
              .
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="fund-wallet">
        <AccordionTrigger className="border-black border-2 bg-[#00ffff]  px-5 text-2xl hover:no-underline ">
          Fund Wallet
        </AccordionTrigger>
        <AccordionContent className="bg-white  p-2">
          <div className="font-comic">
            <p>Add funds to your wallet to start trading and staking.</p>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="buy-stake">
        <AccordionTrigger className="border-black border-2 bg-[#00ff00]  px-5 text-2xl hover:no-underline">
          Buy & Stake
        </AccordionTrigger>
        <AccordionContent className="bg-white  p-2">
          <div className="font-comic">
            <p>Buy WEPE tokens and stake them to earn rewards.</p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
