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
