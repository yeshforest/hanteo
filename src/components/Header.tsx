import GnbTabMenu from "./GnbTabMenu";
import { SwiperClass } from "swiper/react";
/* 
  헤더 컴포넌트
  주기능: 탭 메뉴(카테고리)와 페이지의 헤더를 담고있음
*/
interface Props {
  swiper: SwiperClass;
  activeTabIndex: number;
  setActiveTabIndex: React.Dispatch<React.SetStateAction<number>>;
}
const Header = ({ swiper, activeTabIndex, setActiveTabIndex }: Props) => {
  return (
    <header className="header__container">
      <h1 className="header__title">헌터차트</h1>
      <GnbTabMenu
        swiper={swiper!}
        activeTabIndex={activeTabIndex}
        setActiveTabIndex={setActiveTabIndex}
      />
    </header>
  );
};
export default Header;
