import "./scss/index.scss";
import { SwiperClass } from "swiper/react";
import { useState } from "react";
import Header from "./components/Header";
import TabContent from "./components/TabContent";
import Footer from "./components/Footer";
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
      <main className="main__container">
        <TabContent
          setSwiper={setSwiper}
          setActiveTabIndex={setActiveTabIndex}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
