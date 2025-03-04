// 차트 랭킹 타입 정의
export interface ChartRankingType {
  title: string;
  artist: string[];
  rankChange: RankTrend; // 순위의 변화
  albumCoverUrl: string;
}

export enum RankTrend {
  UP = "UP", // 상승
  DOWN = "DOWN", //하락
  UNCHANGED = "UNCHANGED", // 변화없음
}
