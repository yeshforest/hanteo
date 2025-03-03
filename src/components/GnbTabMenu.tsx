import { GNBs } from "../data/Gnbs";
import { SwiperClass } from "swiper/react";
import useDragScroll from "../hooks/useDragScroll";

/* 
  헤더의 GNB 탭 메뉴 컴포넌트 
  주기능: 카테고리 이동기능 
*/

interface Props {
  swiper: SwiperClass;
  activeTabIndex: number;
  setActiveTabIndex: (index: number) => void;
}
const GnbTabMenu = ({ swiper, activeTabIndex, setActiveTabIndex }: Props) => {
  const { scrollRef, onMouseDown, onDragMove, onMouseUp, isDrag } =
    useDragScroll();
  const handleGnbItemClick = (index: number) => {
    swiper.slideTo(index);
    setActiveTabIndex(index);
  };
  return (
    <nav className="gnb-tab">
      <ul
        className="gnb-tab__list"
        ref={scrollRef}
        onMouseDown={onMouseDown}
        onMouseMove={isDrag ? onDragMove : undefined}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        {GNBs.map((gnbItems, itemIndex) => {
          const buttonClassName =
            activeTabIndex === gnbItems.id
              ? "gnb-tab__button gnb-tab__button--active"
              : "gnb-tab__button";

          return (
            <li key={gnbItems.id} className="gnb-tab__item">
              <button
                id={gnbItems.id.toString()}
                className={buttonClassName}
                onClick={() => {
                  handleGnbItemClick(itemIndex);
                }}
              >
                {gnbItems.title}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default GnbTabMenu;
