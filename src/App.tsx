import { NavBar } from "@/components/common/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Home from "./components/Home.tsx";
import ChapterOne from "./components/chapters/ChapterOne.tsx";
import ChapterTwo from "./components/chapters/ChapterTwo.tsx";
import ChapterThree from "./components/chapters/ChapterThree.tsx";
import ChapterFour from "./components/chapters/ChapterFour.tsx";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import HowToBuy from "./components/HowToBuy.tsx";
import FAQ from "./components/FAQ.tsx";

function App() {
  const swiperRef = useRef<SwiperType>();

  const handleSlideChange = (index: number) => {
    swiperRef.current?.slideTo(index);
  };

  return (
    <div className="font-fuzzy-bubbles w-full">
      <NavBar onChapterClick={handleSlideChange} />

      {/* Mobile View */}
      <div className="md:hidden">
        <Home />
        <ChapterOne />
        <ChapterTwo />
        <ChapterThree />
        <ChapterFour />
        <HowToBuy />
        <FAQ />
        {/* <div>FAQS</div> */}
      </div>

      {/* Desktop View */}
      <div className="hidden md:block flex-1">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          <SwiperSlide>
            <Home />
          </SwiperSlide>
          <SwiperSlide>
            <ChapterOne />
          </SwiperSlide>
          <SwiperSlide>
            <ChapterTwo />
          </SwiperSlide>
          <SwiperSlide>
            <ChapterThree />
          </SwiperSlide>
          <SwiperSlide>
            <ChapterFour />
          </SwiperSlide>
          <SwiperSlide>
            <HowToBuy />
          </SwiperSlide>
          <SwiperSlide>
            <FAQ />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default App;
