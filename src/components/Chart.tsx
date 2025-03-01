import { musicChartRanking } from "../data/chartRanking";
import { RankTrend } from "../types/ChartRankingType";
import { Swiper, SwiperSlide } from "swiper/react";
export const Chart = () => {
  return (
    <section className="chart__container">
      <h2 className="a11y-hidden">차트 페이지</h2>
      {/* 배너 */}
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
      <article className="chart">
        <h3 className="chart__title">Real-time Hanteo Chart</h3>
        <ol className="chart-list">
          {musicChartRanking.map((music, index) => (
            <li className="chart__item">
              <img src={music.albumCoverUrl} />
              <span className="chart__item-content">
                <div className="chart__rank-container">
                  <div className="chart__rank">{index + 1}</div>
                  <div className="chart__rank-change">
                    {music.rankChange === RankTrend.DOWN
                      ? "▼"
                      : music.rankChange === RankTrend.UNCHANGED
                      ? "–"
                      : "▲"}
                  </div>
                </div>
                <div className="chart__details">
                  <div className="chart__detail-title">{music.title}</div>
                  <div className="chart__detail-artist">{music.artist}</div>
                </div>
              </span>
            </li>
          ))}
        </ol>
      </article>
    </section>
  );
};
export default Chart;
