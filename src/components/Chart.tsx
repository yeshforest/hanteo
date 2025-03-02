import { useEffect, useState } from "react";
import { ChartRankingType, RankTrend } from "../types/ChartRankingType";
import Banner from "./Banner";
import { fetchChartRankingPaging } from "../api/api";
import useInfinityScroll from "../hooks/useInfinityScroll";

export const Chart = () => {
  const [musicChartRanking, setMusicChartRanking] = useState<
    ChartRankingType[]
  >([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLastPage, setIsLastPage] = useState<boolean>(false);

  const loadMoreItems = async () => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      const result = await fetchChartRankingPaging(page);
      if (result) {
        setMusicChartRanking((prev) => [...prev, ...result.items]);
        setIsLastPage(!result.hasMore);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.error("Failed to load music chart:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadMoreItems();
  }, []);

  const { loaderRef } = useInfinityScroll(loadMoreItems, isLoading, isLastPage);

  return (
    <section className="chart__container">
      {isLoading && <div className="chart-loading-spinner"></div>}
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
      <div ref={loaderRef} className="loader-element" />
    </section>
  );
};
export default Chart;
