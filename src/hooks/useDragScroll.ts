import { useRef } from "react";
import { useState } from "react";

// 드래그로 스크롤을 할 수 있도록 하는 custom hook
const useDragScroll = () => {
  const scrollRef = useRef<HTMLElement | null>(null); // 스크롤할 요소에 대한 참조 선언
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const [start, setStart] = useState<number>(0); // 드래그 시작 위치

  const onMouseDown = (
    event: React.MouseEvent<HTMLUListElement | HTMLOListElement>
  ) => {
    event.preventDefault();
    setIsDrag(true);
    if (scrollRef.current) {
      // 현재 마우스 X좌표 + 현재 스크롤 위치를 합산하여 시작점 저장
      setStart(event.pageX + scrollRef.current.scrollLeft);
    }
  };
  const onDragMove = (
    event: React.MouseEvent<HTMLUListElement | HTMLOListElement>
  ) => {
    if (isDrag) {
      if (scrollRef.current) {
        // 시작 위치 - 현재 마우스 X좌표 = 새로운 스크롤 위치
        // 마우스를 오른쪽으로 움직이면 스크롤이 왼쪽으로 이동, 반대도 마찬가지
        scrollRef.current.scrollLeft = start - event.pageX;
      }
    }
  };
  const onMouseUp = () => {
    setIsDrag(false);
  };
  return {
    scrollRef,
    onMouseDown,
    onDragMove,
    onMouseUp,
    isDrag,
  };
};
export default useDragScroll;
