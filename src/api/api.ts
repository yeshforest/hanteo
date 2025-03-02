import { ChartRankingType } from "../types/ChartRankingType";
// 메인 배너의 데이터를 가져오는 함수
export const fetchMainBanners = async () => {
  try {
    const response = await fetch("src/data/mainBanner.json");
    const { mainBanners } = await response.json();
    return mainBanners;
  } catch (e: unknown) {
    console.error("mainbanner fetch error", e);
  }
};
// 차트의 음악들을 가져오는 함수
export const fetchChartRanking = async () => {
  try {
    const response = await fetch("src/data/chartRanking.json");
    const { musicChartRanking } = await response.json();
    return musicChartRanking;
  } catch (e: unknown) {
    console.error("chart ranking fetch error", e);
    return null;
  }
};

interface FetchChartRankingType {
  items: ChartRankingType[];
  hasMore: boolean;
  total: number;
}
// 차트의 무한스크롤 구현을 위한 함수
// api 요청 및 응답을 대체하기위함
// 데이터를 page와 size 기반으로 슬라이싱하여 0.5초 뒤에 리턴함
export const fetchChartRankingPaging = async (
  page: number,
  size: number = 10
): Promise<FetchChartRankingType> => {
  const allChartRanking = await fetchChartRanking();
  return new Promise((resolve) => {
    setTimeout(() => {
      const startIndex = (page - 1) * size;
      const endIndex = startIndex + size;

      const slicedChartRanking = allChartRanking.slice(startIndex, endIndex);
      resolve({
        items: slicedChartRanking,
        hasMore: endIndex < allChartRanking.length,
        total: allChartRanking.length,
      });
    }, 500);
  });
};
