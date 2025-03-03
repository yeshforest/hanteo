import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import { fetchMainBanners } from "../api/api";
import { MainBannerType } from "../types/MainBannerType";
import { SyntheticEvent } from "react";
import defaultImg from "../../public/img_default.png";
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
    <section className="banner">
      <Swiper
        className="banner__swiper"
        spaceBetween={0}
        slidesPerView={1.1}
        centeredSlides={true}
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
            <a href="#" className="banner__item">
              <div className="banner__img-wrapper">
                <img
                  src={banner.bannerImgUrl}
                  onError={(e: SyntheticEvent<HTMLImageElement, Event>) => {
                    e.currentTarget.src = defaultImg;
                  }}
                />
              </div>
              <div className="banner__details">
                <span className="banner__content">
                  <div className="banner__title">{banner.title}</div>
                  {banner.actionTitle && (
                    <button className="banner__action">
                      {banner.actionTitle}
                    </button>
                  )}
                </span>
                {banner.duration && (
                  <div className="banner__duration">{banner.duration}</div>
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
