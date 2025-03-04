import { ComponentType } from "react";
export interface GnbType {
  id: number;
  title: string;
  content: ComponentType; // 탭 콘텐츠
}
