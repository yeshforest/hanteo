import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import { fetchMainBanners } from "../api/api";
import { MainBannerType } from "../types/MainBannerType";
/* 
  차트 카테고리의 메인 배너
  주기능: 슬라이드형태로 배너 내용 표시, 무한루프 및 외부 링크이동
*/
const Banner = () => {
  const [mainBanners, setMainBanners] = useState<MainBannerType[]>([]);
  useEffect(() => {
    // 배너 데이터 fetch
    fetchMainBanners().then((data) => {
      setMainBanners(data);
    });
  }, []);
  return (
    <section>
      <Swiper
        className="chart__banner-swiper"
        spaceBetween={0}
        slidesPerView={1.1}
        centeredSlides={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {mainBanners.map((banner, index) => (
          <SwiperSlide key={index}>
            <a href="#" className="chart__banner">
              <div className="img-wrapper">
                <img src={banner.bannerImgUrl} />
              </div>
              <div className="chart__banner-detail">
                <span className="chart__banner-content">
                  <div className="chart__banner-title">{banner.title}</div>
                  {banner.actionTitle && (
                    <button className="chart__banner-action">
                      {banner.actionTitle}
                    </button>
                  )}
                </span>
                {banner.duration && (
                  <div className="chart__banner-duration">
                    {banner.duration}
                  </div>
                )}
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
export default Banner;
