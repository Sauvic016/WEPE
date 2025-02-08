import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQaccordian() {
  return (
    <Accordion type="single" collapsible className="w-full max-w-3xl">
      <AccordionItem value="what-is-wepe">
        <AccordionTrigger className="bg-[#ffe4a3] text-black  p-2 font-comic text-xl">
          What is WEPE Token?
        </AccordionTrigger>
        <AccordionContent className="bg-white font-comic text-base">
          <p>
            WEPE Token is the meme coin of Wall Street Pepe, who's tired of whale groups controlling the crypto markets.
            So he's creating his own - the WEPE Army! WEPE makes the calls that turn frogs into whales, transforming
            your trading game.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="why-join">
        <AccordionTrigger className="bg-[#ffe4a3] text-black p-2 font-comic text-xl">
          Why join the WEPE Army?
        </AccordionTrigger>
        <AccordionContent className="bg-white font-comic text-base">
          <p>
            WEPE Token is built to enable meme coin degens to trade with the wit, swagger, and confidence of WEPE
            himself. $WEPE token holders become part of the WEPE Army and get access to exclusive trading calls and
            insights - your key to becoming a market mover instead of exit liquidity.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="how-to-join">
        <AccordionTrigger className="bg-[#ffe4a3] text-black p-2 font-comic text-xl">
          How do I join the $WEPE crypto presale?
        </AccordionTrigger>
        <AccordionContent className="bg-white font-comic text-base">
          <p>
            Buy $WEPE tokens easily using the integrated widget above - simply connect your wallet and swap ETH, BNB or
            USDT for $WEPE. Alternatively, open the{" "}
            <a href="https://bestwallet.com/en" target="_blank" className="text-blue-600 underline">
              Best Wallet
            </a>{" "}
            app on your phone and purchase $WEPE through the Upcoming Tokens section.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="when-tokens">
        <AccordionTrigger className="bg-[#ffe4a3] text-black p-2 font-comic text-xl">
          When do I get my tokens?
        </AccordionTrigger>
        <AccordionContent className="bg-white font-comic text-base">
          <p>
            You can claim your tokens once the crypto presale has ended and the $WEPE token is launched. You'll just
            need to connect the same wallet you used to buy and click claim.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="is-safe">
        <AccordionTrigger className="bg-[#ffe4a3] text-black p-2 font-comic text-xl">
          How do I know WEPE Token is safe?
        </AccordionTrigger>
        <AccordionContent className="bg-white font-comic text-base">
          <p>
            $WEPE token is already integrated with{" "}
            <a href="https://bestwallet.com/en" target="_blank" className="text-blue-600 underline">
              Best Wallet
            </a>
            , the trusted self-custody crypto app with more than 100k monthly active users. The WEPE Token site is built
            by huge Pepe fans using cutting edge technology to facilitate token swaps. You can also stake your $WEPE
            tokens securely.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="best-launch">
        <AccordionTrigger className="bg-[#ffe4a3] text-black p-2 font-comic text-xl">
          Is $WEPE really the best new coin launch?
        </AccordionTrigger>
        <AccordionContent className="bg-white font-comic text-base">
          <p>
            The numbers speak for themselves! The market has already poured tens of millions into $WEPE after just a few
            weeks, making our crypto presale the best ICO right now and proving that the WEPE Army will be a formidable
            force during the crypto bull run.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="best-meme">
        <AccordionTrigger className="bg-[#ffe4a3] text-black  font-comic text-xl">
          They say $WEPE is also the best meme coin?
        </AccordionTrigger>
        <AccordionContent className="bg-white font-comic text-base">
          <p>
            We all know Pepe is the king of memes. But there's no token utility. Wall Street Pepe is the frog king's way
            of giving back to the meme community by making $WEPE the access token for market-beating alpha and insights
            – giving real utility to the Pepe meme ecosystem.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
