export interface ChartRankingType {
  title: string;
  artist: string[];
  rankChange: RankTrend;
  albumCoverUrl: string;
}

export enum RankTrend {
  UP = "UP",
  DOWN = "DOWN",
  UNCHANGED = "UNCHANGED",
}
