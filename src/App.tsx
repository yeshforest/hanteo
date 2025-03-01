import "./scss/index.scss";
import GnbTabMenu from "./components/GnbTabMenu";
import { SwiperClass } from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { GNBs } from "./data/Gnbs";

function App() {
  // 이름은 -로 연결, 목적어는 _로 연결
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [swiper, setSwiper] = useState<SwiperClass>();

  return (
    // TODO : Baselayout으로 만들것
    <div className="root__container">
      <header className="header__container">
        {/* <h1 className="sr-only">헌터차트</h1> */}
        {/*TODO: 버튼 클릭 시 해당 슬라이드로 이동 */}
        <GnbTabMenu
          swiper={swiper!}
          activeTabIndex={activeTabIndex}
          setActiveTabIndex={setActiveTabIndex}
        />
      </header>
      <main className="main__container">
        {/* 배너 */}
        {/* <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper> */}
        <div>배너</div>
        {/* 슬라이드하면 해당 index가 set */}
        <Swiper
          direction="horizontal"
          spaceBetween={0}
          slidesPerView={1}
          onSwiper={setSwiper}
          onSlideChange={(e) => {
            setActiveTabIndex(e.activeIndex);
            console.log("slide!!!!!!");
          }}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          {GNBs.map((gnbItem) => {
            const Content = gnbItem.content;
            return (
              <SwiperSlide key={gnbItem.id}>
                <Content></Content>
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* <TabContentLayout activeTabId={activeTabId}></TabContentLayout> */}
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
