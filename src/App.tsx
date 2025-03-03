import "./scss/index.scss";
import { SwiperClass } from "swiper/react";
import { useState } from "react";
import Header from "./components/Header";
import TabContent from "./components/TabContent";
function App() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [swiper, setSwiper] = useState<SwiperClass>();

  return (
    <div className="root__container">
      {swiper && (
        <Header
          swiper={swiper}
          activeTabIndex={activeTabIndex}
          setActiveTabIndex={setActiveTabIndex}
        />
      )}

      <TabContent setSwiper={setSwiper} setActiveTabIndex={setActiveTabIndex} />

      <footer></footer>
    </div>
  );
}

export default App;
