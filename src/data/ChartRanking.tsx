import { ChartRankingType, RankTrend } from "../types/ChartRankingType";
// TODO: json데이터로 fetch해서 가져올 예정
export const musicChartRanking: ChartRankingType[] = [
  {
    title: "TOO BAD",
    artist: ["G-DRAGON"],
    rankChange: RankTrend.UNCHANGED,
    albumCoverUrl: "https://picsum.photos/62/62?random=1",
  },
  {
    title: "HOME SWEET HOME",
    artist: ["G-DRAGON"],
    rankChange: RankTrend.UP,
    albumCoverUrl: "https://picsum.photos/62/62?random=2",
  },
  {
    title: "REBEL HEART",
    artist: ["IVE"],
    rankChange: RankTrend.DOWN,
    albumCoverUrl: "https://picsum.photos/62/62?random=3",
  },
  {
    title: "나는 반딧불",
    artist: ["황가람"],
    rankChange: RankTrend.UNCHANGED,
    albumCoverUrl: "https://picsum.photos/62/62?random=4",
  },
  {
    title: "Whiplash",
    artist: ["에스파"],
    rankChange: RankTrend.UP,
    albumCoverUrl: "https://picsum.photos/62/62?random=5",
  },
  {
    title: "모르시나요(PROD.로코베리)",
    artist: ["Jo Jazz"],
    rankChange: RankTrend.UP,
    albumCoverUrl: "https://picsum.photos/62/62?random=6",
  },
  {
    title: "Drowning",
    artist: ["WOODZ"],
    rankChange: RankTrend.UP,
    albumCoverUrl: "https://picsum.photos/62/62?random=7",
  },
  {
    title: "TAKE ME",
    artist: ["G-DRAGON"],
    rankChange: RankTrend.UP,
    albumCoverUrl: "https://picsum.photos/62/62?random=8",
  },
  {
    title: "ATTITUDE",
    artist: ["IVE"],
    rankChange: RankTrend.UNCHANGED,
    albumCoverUrl: "https://picsum.photos/62/62?random=9",
  },
  {
    title: "APT.",
    artist: ["ROSE"],
    rankChange: RankTrend.UNCHANGED,
    albumCoverUrl: "https://picsum.photos/62/62?random=10",
  },
];
