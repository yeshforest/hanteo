import { useEffect, useRef } from "react";

// 무한스크롤 구현 시 사용되는 hook
const useInfinityScroll = (
  callback: () => void,
  isLoading: boolean,
  isLastPage: boolean
) => {
  const loaderRef = useRef(null); // IntersectionObserver가 관찰할 요소를 참조하기 위해 선언
  const observerCallBack = (entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting) {
      // 관측대상이 화면에 보인다면
      callback();
    }
  };

  useEffect(() => {
    if (isLoading || isLastPage) return; // 로딩중이거나 마지막 페이지면 종료
    const options = {
      threshold: 0.5, // 50% 보일 때 콜백 실행
    };

    const { current } = loaderRef;
    const observer = new IntersectionObserver(observerCallBack, options);

    if (current) {
      observer.observe(current); // 관측대상이 존재하면 관측 실행
    }

    return () => {
      if (current) {
        observer.unobserve(current); // unmount 시 관측 종료
      }
    };
  }, [callback, isLoading, isLastPage]);
  return { loaderRef };
};

export default useInfinityScroll;
