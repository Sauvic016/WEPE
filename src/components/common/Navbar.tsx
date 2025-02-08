import { Link } from "react-router";
import Marquee from "react-fast-marquee";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

interface NavBarProps {
  onChapterClick: (index: number) => void;
}

export function NavBar({ onChapterClick }: NavBarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);
  return (
    <nav className="sticky top-0 z-50">
      <div
        className={`flex items-center justify-between p-4 transition-all duration-300 ${
          isScrolled ? "bg-transparent backdrop-blur-sm" : "bg-white/95"
        } text-lg tracking-wider z-50 relative`}
      >
        <div className="flex items-center">
          <Link to="/#home" className="flex items-center gap-2 ">
            <img src="https://wallstreetpepe.com/assets/images/svg-icons/token.svg" alt="" className="h-8 w-8" />
          </Link>
          <div className="hidden lg:flex items-center gap-6 ">
            <Link to="/#home" className="font-semibold  ">
              Home
            </Link>
            <DropdownMenu open={open} onOpenChange={setOpen}>
              <DropdownMenuTrigger className="flex items-center gap-1">
                Chapters <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="font-fuzzy-bubbles">
                <DropdownMenuItem asChild>
                  <Link
                    to="/#chapter-one"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMenuOpen(false);
                      setOpen(false);
                      onChapterClick(1);
                    }}
                  >
                    Chapter 1
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    to="/#chapter-two"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMenuOpen(false);
                      setOpen(false);
                      onChapterClick(2);
                    }}
                  >
                    Chapter 2
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    to="/#chapter-three"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMenuOpen(false);
                      setOpen(false);
                      onChapterClick(3);
                    }}
                  >
                    Chapter 3
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    to="/#chapter-four"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMenuOpen(false);
                      setOpen(false);
                      onChapterClick(4);
                    }}
                  >
                    Chapter 4
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/how-to-buy" className="">
              How To Buy
            </Link>
            <Link to="/faqs" className="">
              FAQS
            </Link>
            <Link to="/staking" className="">
              Staking
            </Link>
            <Link to="/litepaper" className="">
              Litepaper
            </Link>
          </div>
        </div>
        <div className=" flex items-center gap-4 ">
          <Button
            variant="outline"
            className="hidden lg:flex bg-yellow-400 hover:bg-yellow-500 border-black font-bold text-xl rounded-none border-4"
          >
            AUDIT
          </Button>
          <Button
            variant="outline"
            className="hidden lg:flex bg-purple-600 text-white hover:text-white hover:bg-purple-600  border-black font-bold text-xl rounded-none border-4 "
          >
            WHITEPAPER
          </Button>
          <Button className="bg-green-400 hover:bg-green-500 text-black  border-black font-bold text-xl rounded-none border-4 ">
            BUY $WEPE
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger className=" hidden lg:flex  items-center gap-1  font-bold text-xl ">
              <ChevronDown className="w-6 h-6 font-bold " />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="font-semibold font-fuzzy-bubbles">
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>Spanish</DropdownMenuItem>
              <DropdownMenuItem>French</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <button className="lg:hidden z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      <div
        className={`fixed inset-x-0 top-50 bg-[#b8dee4] transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } z-50 h-full `}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 text-2xl">
          <Link to="/#home" className="font-semibold">
            Home
          </Link>

          <div className="relative">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1">
                Chapters <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="font-fuzzy-bubbles">
                <DropdownMenuItem asChild>
                  <Link
                    to="/chapter-one"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMenuOpen(false);
                      setOpen(false);
                      onChapterClick(1);
                    }}
                  >
                    Chapter 1
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    to="/chapter-two"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMenuOpen(false);
                      setOpen(false);
                      onChapterClick(2);
                    }}
                  >
                    Chapter 2
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    to="/chapter-three"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMenuOpen(false);
                      setOpen(false);
                      onChapterClick(3);
                    }}
                  >
                    Chapter 3
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    to="/chapter-four"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMenuOpen(false);
                      setOpen(false);
                      onChapterClick(4);
                    }}
                  >
                    Chapter 4
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <Link to="/how-to-buy">How To Buy</Link>
          <Link to="/faqs">FAQS</Link>
          <Link to="/staking">Staking</Link>
          <Link to="/litepaper">Litepaper</Link>

          <div className="relative"></div>

          <Button
            variant="outline"
            className="bg-yellow-400 hover:bg-yellow-500 border-black font-bold text-xl rounded-none border-4"
          >
            AUDIT
          </Button>
          <Button
            variant="outline"
            className="bg-purple-600 text-white hover:text-white hover:bg-purple-600 border-black font-bold text-xl rounded-none border-4"
          >
            WHITEPAPER
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex  items-center gap-1  font-bold text-xl ">
              En <ChevronDown className="w-6 h-6 font-bold " />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="font-semibold font-fuzzy-bubbles">
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>Spanish</DropdownMenuItem>
              <DropdownMenuItem>French</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <Marquee className="hidden lg:flex bg-black h-10 px-2 text-lg font-bold" pauseOnHover>
        <div className="text-[#33ff00]">
          <span className="text-red-500 mx-2">BREAKING:</span> $WEPE Crypto Presale Is Cooking - Buy Before Price
          Increases!
        </div>
        <div className="text-[#33ff00]">
          <span className="text-red-500 mx-2">BREAKING:</span> $WEPE Crypto Presale Is Cooking - Buy Before Price
          Increases!
        </div>
        <div className="text-[#33ff00]">
          <span className="text-red-500 mx-2">BREAKING:</span> $WEPE Crypto Presale Is Cooking - Buy Before Price
          Increases!
        </div>
      </Marquee>
    </nav>
  );
}
