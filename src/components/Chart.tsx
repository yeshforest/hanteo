import { musicChartRanking } from "../data/ChartRanking";
import { RankTrend } from "../types/ChartRankingType";
import Banner from "./Banner";

export const Chart = () => {
  return (
    <section className="chart__container">
      <h2 className="a11y-hidden">차트 페이지</h2>
      <Banner />
      <article className="chart">
        <h3 className="chart__title">Real-time Hanteo Chart</h3>
        <ol className="chart-list">
          {musicChartRanking.map((music, index) => (
            <li className="chart__item" key={index}>
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
