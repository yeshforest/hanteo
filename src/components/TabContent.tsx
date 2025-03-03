import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperClass } from "swiper/react";
import { GNBs } from "../data/Gnbs";
import { useState } from "react";
/* 
  탭 콘텐트(내용) 컴포넌트 
  주기능: 카테고리에 해당하는 콘텐츠를 보여줌
*/
interface Props {
  setSwiper: React.Dispatch<React.SetStateAction<SwiperClass | undefined>>;
  setActiveTabIndex: React.Dispatch<React.SetStateAction<number>>;
}
const TabContent = ({ setSwiper, setActiveTabIndex }: Props) => {
  const [resetKey, setResetKey] = useState(0); // 데이터 초기화를 위한 key

  return (
    <main className="main__container">
      <Swiper
        direction="horizontal"
        spaceBetween={0}
        slidesPerView={1}
        onSwiper={setSwiper}
        onSlideChange={(e) => {
          setActiveTabIndex(e.activeIndex);
          window.scrollTo(0, 0);
          setResetKey((prev) => prev + 1); // id가 매번 달라지게 하여 새 컴포넌트로 만들기 위함
        }}
      >
        {GNBs.map((gnbItem) => {
          const Content = gnbItem.content;
          return (
            <SwiperSlide key={gnbItem.id}>
              <Content key={`${gnbItem.id}-${resetKey}`}></Content>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </main>
  );
};
export default TabContent;
