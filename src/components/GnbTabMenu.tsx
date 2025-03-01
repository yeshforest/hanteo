import { GNBs } from "../data/Gnbs";
import { SwiperClass } from "swiper/react";
interface Props {
  swiper: SwiperClass;
  activeTabIndex: number;
  setActiveTabIndex: (index: number) => void;
}
const GnbTabMenu = ({ swiper, activeTabIndex, setActiveTabIndex }: Props) => {
  const handleGnbItemClick = (index: number) => {
    swiper.slideTo(index);
    setActiveTabIndex(index);
  };
  return (
    <nav className="header-nav">
      <ul className="header-nav-list__container">
        {GNBs.map((gnbItems, itemIndex) => {
          const buttonClassName =
            activeTabIndex === gnbItems.id
              ? "header-nav-item__button--active"
              : "header-nav-item__button";

          return (
            <li key={gnbItems.id}>
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
