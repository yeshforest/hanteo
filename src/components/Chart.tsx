import { useEffect, useState } from "react";
import { ChartRankingType, RankTrend } from "../types/ChartRankingType";
import Banner from "./Banner";
import { fetchChartRankingPaging } from "../api/api";
import useInfinityScroll from "../hooks/useInfinityScroll";
import defaultImg from "../../public/img_default.png";
import { SyntheticEvent } from "react";
/* 
  차트 카테고리의 콘텐츠 컴포넌트
  주기능: 차트 카테고리의 내용을 표시
*/
export const Chart = () => {
  const [musicChartRanking, setMusicChartRanking] = useState<
    ChartRankingType[]
  >([]);

  // 무한 스크롤 구현 시 사용되는 변수 정의
  const [page, setPage] = useState<number>(1); // 현재 페이지
  const [isLoading, setIsLoading] = useState<boolean>(false); // 로딩중인지 확인하는 변수
  const [isLastPage, setIsLastPage] = useState<boolean>(false); // 더 불러올 데이터가 있는지 확인하는 변수

  // 무한스크롤로 가져오기
  const fetchMoreItems = async () => {
    if (isLoading) return; // 로딩중이면 종료
    setIsLoading(true);
    try {
      const result = await fetchChartRankingPaging(page); // 현재페이지를 기준으로 데이터 fetch
      if (result) {
        setMusicChartRanking((prev) => [...prev, ...result.items]); // 가져온 데이터를 기존의 데이터와 합침
        setIsLastPage(!result.hasMore); // 데이터가 더 있는지 여부 저장
        setPage((prev) => prev + 1); // 페이지 증가
      }
    } catch (error) {
      console.error("Failed to load music chart:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // 처음 페이지 마운트 시 데이터 가져오기
    fetchMoreItems();
  }, []);

  // 무한스크롤 hook : 리턴받은 ref를 최하단 element(관찰대상)에 할당
  const { loaderRef } = useInfinityScroll(
    fetchMoreItems,
    isLoading,
    isLastPage
  );

  return (
    <section className="chart__container">
      {isLoading && <div className="chart-loading-spinner"></div>}
      <h2 className="chart__section-title">차트 페이지</h2>
      <Banner />
      <article className="chart">
        <h3 className="chart__title">Real-time Hanteo Chart</h3>
        <ol className="chart-list">
          {musicChartRanking.map((music, index) => (
            <li className="chart__item" key={index}>
              <div className="chart__img-wrapper">
                <img
                  src={music.albumCoverUrl}
                  onError={(e: SyntheticEvent<HTMLImageElement, Event>) => {
                    e.currentTarget.src = defaultImg;
                  }}
                />
              </div>
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
