<img src="https://capsule-render.vercel.app/api?type=waving&color=auto&height=180&section=header&text=Hanteo-chart&fontSize=80" />

## 서비스 URL -> https://hanteo-ten.vercel.app
서비스개발실 프론트엔드 개발자 코딩테스트 구현 내용입니다

### ⚙️ FE 사용 기술
<div>
  <img src="https://img.shields.io/badge/Swiper-6332F6?style=for-the-badge&logo=Swiper&logoColor=white"/>
</div>
<div>
    <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black" /> 
  <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Scss-CC6699?style=for-the-badge&logo=Sass&logoColor=white"/>
</div>

<div>
  <img src="https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white" /> 
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white" />
</div>

### ✅ Main Service
* 좌-우 슬라이드 카테고리 이동
* 무한스크롤 리스트형 뷰 - 사용자 스크롤에 따라 콘텐츠를 추가로 로드
* 무한루프 배너 및 배너 내용에 해당하는 외부링크 이동
* OG 태그 기반 카카오톡 url 공유 시 미리보기 - 제목, 설명, 이미지가 포함된 미리보기 제공

### 📖 구현내용
#### 1. 데이터 fetch
* 배너, 음악 차트 데이터는 json 형태로 만들어 json파일을 fetch하여 사용하였습니다.

#### 2. 좌-우 슬라이드 카테고리 이동
* swiper 라이브러리를 사용하여 구현하였습니다.
* 웹 페이지에서 드래그로 가로스크롤이 가능하도록 useDragScroll custom hook을 구현하였습니다.
  
#### 3. 무한스크롤 리스트형 뷰
* 페이징이 구현된 api를 대체하기 위해 데이터를 **page와 size 기반으로 분할하여 일정 시간 후 데이터를 반환하는 페이크 API 함수**를 구현하여 사용하였습니다.
* [IntersectionObserver](https://developer.mozilla.org/ko/docs/Web/API/IntersectionObserver)를 사용하여 스크롤 하단에 관측 대상을 지정하여 무한스크롤을 구현하였습니다.

#### 4. OG 태그 기반 카카오톡 url 공유 시 미리보기
![og](https://github.com/user-attachments/assets/7155c8b0-321c-4751-ba0a-fa5b7927677e)


### 🏃🏻‍♂️ 코드 실행 방법
```plaintext
yarn install
yarn dev
```

### 🗂️ 폴더 구조
일부 생략된 폴더 및 파일도 있으며, 전체 구조는 코드베이스에서 확인하실 수 있습니다.
```plaintext
.
├── public
│   ├── data                    # Json 파일 데이터 모음
│   │   ├── chartRanking.json
│   │   └── mainBanner.json
│   ├── icon_not-ready.svg
│   ├── img_default.png
│   ├── img_thumbnail.png
│   └── logo.svg
├── src
│   ├── App.tsx
│   ├── api                     # fetch를 통해 데이터를 가져오는 함수모음
│   │   └── api.ts
│   ├── components              
│   │   ├── Banner.tsx          # 배너 컴포넌트
│   │   ├── Chart.tsx            
│   │   ├── Footer.tsx
│   │   ├── GnbTabMenu.tsx
│   │   ├── Header.tsx
│   │   ├── NotReady.tsx
│   │   └── TabContent.tsx
│   ├── data
│   │   └── gnbItems.tsx         # gnb의 id, title, 내용을 담고있는 파일
│   ├── hooks
│   │   ├── useDragScroll.ts     # 드래그로 스크롤을 할 수 있도록 하는 custom hook
│   │   └── useInfinityScroll.ts # 무한스크롤 구현 시 사용되는 hook
│   ├── main.tsx
│   ├── scss                     # scss의 7-1 패턴을 기반으로 프로젝트에 맞게 변형해서 구성
│   │   ├── abstracts            # 추상화 관련 코드모음
│   │   │   ├── _index.scss      # 내보내기 전용 index파일
│   │   │   ├── _ir.scss  
│   │   │   ├── _mixin.scss
│   │   │   └── _variables.scss
│   │   ├── base               
│   │   │   ├── _index.scss
│   │   │   ├── _normalize.scss
│   │   │   ├── _reset.scss
│   │   │   └── _typography.scss
│   │   ├── components
│   │   │   ├── _banner.scss
│   │   │   ├── _button.scss
│   │   │   ├── _gnb_tab_menu.scss
│   │   │   ├── _index.scss
│   │   │   ├── _loading.scss
│   │   │   └── _swiper.scss
│   │   ├── index.scss             # 모든 scss 부분 파일들을 @use하는 메인 scss파일
│   │   ├── layout
│   │   │   ├── _baselayout.scss
│   │   │   ├── _footer.scss
│   │   │   ├── _header.scss
│   │   │   └── _index.scss
│   │   └── pages
│   │       ├── _chart.scss
│   │       ├── _index.scss
│   │       └── _not_ready.scss
│   ├── types                       # type정의
│   │   ├── ChartRankingType.ts
│   │   ├── GnbType.ts
│   │   └── MainBannerType.ts
│   └── vite-env.d.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── yarn.lock
```
