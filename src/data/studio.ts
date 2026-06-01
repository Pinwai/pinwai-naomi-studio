export const studio = {
  name: "Pinwai x Naomi Studio",
  shortName: "PN Studio",
  title: "品牌設計、網站體驗與影像內容整合",
  description:
    "整合品牌策略、視覺設計、網站體驗、攝影與影片製作，協助品牌建立一致、可信任且能被實際使用的對外溝通系統。",
  email: "hello@example.com",
  pinwaiUrl: "https://pinwai.github.io/",
  naomiUrl: "https://naomi-portfolio.github.io/Naomidesign/",
};

export const navItems = [
  { href: "/", label: "首頁" },
  { href: "/services/", label: "服務" },
  { href: "/work/", label: "作品" },
  { href: "/team/", label: "團隊" },
  { href: "/contact/", label: "聯絡" },
];

export const heroImages = [
  {
    src: "/assets/pinwai/pedestrian-alliance-cover.webp",
    alt: "行人零死亡推動聯盟成立活動紀錄",
  },
  {
    src: "/assets/naomi/yinqing-brand.jpg",
    alt: "吟清酌品牌視覺設計",
  },
  {
    src: "/assets/pinwai/indigenous-coop-documentary-cover.webp",
    alt: "原住民合作社紀錄片專案",
  },
  {
    src: "/assets/naomi/eggpop-cover.png",
    alt: "EggPOP Website UIUX 設計",
  },
];

export const servicePillars = [
  {
    label: "Brand System",
    title: "品牌建立與識別系統",
    summary:
      "建立 Logo、VI 規範、視覺語彙與延伸素材，讓品牌在網站、社群、印刷與活動場景中保持一致。",
    detail:
      "適合新品牌、品牌更新、活動品牌或個人品牌啟動。工作範圍可從定位語氣、視覺識別、延伸物到品牌素材規格一起整理。",
    deliverables: ["品牌識別", "視覺規範", "品牌素材", "社群模板", "簡報版型"],
  },
  {
    label: "Digital Experience",
    title: "網站體驗與內容架構",
    summary:
      "從資訊架構、頁面流程到案例內容整理，協助品牌把服務、作品與可信度轉化成清楚的網站體驗。",
    detail:
      "適合要建立形象網站、作品網站、活動頁或品牌頁的單位。除了畫面設計，也會處理內容層級、CTA 與上線素材。",
    deliverables: ["UIUX", "網站架構", "案例文案", "上線素材", "GitHub Pages"],
  },
  {
    label: "Event Communication",
    title: "活動視覺與影像紀錄",
    summary:
      "整合活動主視覺、延伸設計、現場攝影與紀錄影片，讓活動在前期宣傳與後續成果整理中都有完整素材。",
    detail:
      "適合論壇、發表會、公益倡議、展演與社群活動。前期處理視覺與宣傳，活動當天處理影像紀錄，後期整理可發布素材。",
    deliverables: ["活動主視覺", "延伸物", "活動攝影", "紀錄影片", "成果素材"],
  },
  {
    label: "Campaign Content",
    title: "品牌與議題內容企劃",
    summary:
      "針對品牌故事、公共議題或專案成果，規劃訪談、紀錄、短影音與圖文素材，建立可持續發布的內容節奏。",
    detail:
      "適合需要一段期間持續溝通的品牌或組織。先定義受眾、訊息與發布場景，再拆成可拍攝、可設計、可排程的內容。",
    deliverables: ["內容策略", "訪談拍攝", "短影音", "社群圖文", "成果整理"],
  },
];

export const selectedWorks = [
  {
    owner: "Naomi",
    type: "Branding",
    title: "吟清酌品牌 VI",
    summary: "品牌識別與包裝視覺方向，展現品牌語氣、視覺系統與商業應用延展。",
    image: "/assets/naomi/yinqing-brand.jpg",
    href: studio.naomiUrl,
  },
  {
    owner: "Pinwai",
    type: "Public Issue",
    title: "行人零死亡推動聯盟",
    summary: "公共倡議活動紀錄，整理講者、參與者與組織成立現場，形成後續傳播素材。",
    image: "/assets/pinwai/pedestrian-alliance-cover.webp",
    href: studio.pinwaiUrl,
  },
  {
    owner: "Naomi",
    type: "UIUX",
    title: "EggPOP Website",
    summary: "網站 UIUX 設計與建置，將產品定位、資訊層級與互動體驗整理成數位介面。",
    image: "/assets/naomi/eggpop-cover.png",
    href: studio.naomiUrl,
  },
  {
    owner: "Pinwai",
    type: "Documentary",
    title: "原住民合作社紀錄片",
    summary: "以人物訪談與地方現場梳理永續議題，建立具脈絡的長影音敘事。",
    image: "/assets/pinwai/indigenous-coop-documentary-cover.webp",
    href: studio.pinwaiUrl,
  },
  {
    owner: "Naomi",
    type: "UIUX",
    title: "民眾黨 APP Redesign",
    summary: "App 資訊架構與流程重整，適合延伸到會員服務、活動報名與數位產品介面。",
    image: "/assets/naomi/tpp-app.jpg",
    href: studio.naomiUrl,
  },
  {
    owner: "Pinwai",
    type: "Brand Image",
    title: "民間救護車公司形象照",
    summary: "專業形象照與情境素材拍攝，協助服務型品牌建立可靠、清楚的視覺資產。",
    image: "/assets/pinwai/ambulance-profile-cover.webp",
    href: studio.pinwaiUrl,
  },
];

export const people = [
  {
    name: "陳奕帆｜Pinwai",
    role: "影像企劃、攝影剪輯、紀錄內容",
    summary:
      "負責影像敘事、活動紀錄、人物訪談、商業影像與公共議題內容，將專案現場轉化為可發布、可留存、可延伸的內容素材。",
    image: "/assets/pinwai/chen-yifan-portrait.jpg",
    href: studio.pinwaiUrl,
    skills: ["Photography", "Video", "Interview", "Documentary"],
  },
  {
    name: "Naomi",
    role: "UIUX、品牌視覺、插畫與多元設計",
    summary:
      "負責品牌識別、網站體驗、活動視覺、插畫與平面延伸，將需求整理為一致的視覺系統與可執行設計規格。",
    image: "/assets/naomi/naomi-portrait.jpg",
    href: studio.naomiUrl,
    skills: ["UIUX", "Branding", "Illustration", "Print"],
  },
];

export const processSteps = [
  {
    number: "01",
    title: "需求盤點",
    text: "確認品牌狀態、專案目標、可公開素材、預算範圍與時程限制。",
  },
  {
    number: "02",
    title: "範圍定義",
    text: "把需求拆成設計、網站、攝影、影片與內容交付項目，釐清負責分工。",
  },
  {
    number: "03",
    title: "提案報價",
    text: "提出合作範圍、製作節點、交付格式、修改回合與報價。",
  },
  {
    number: "04",
    title: "設計製作",
    text: "依確認方向進行視覺設計、內容整理、拍攝與後製，過程中定期對齊。",
  },
  {
    number: "05",
    title: "交付上線",
    text: "整理最終檔案、網站頁面、影像素材與使用建議，協助發布或交付保存。",
  },
];

export const inquiryChecklist = [
  "專案背景與目前狀態",
  "需要的服務項目",
  "預計使用場景",
  "預算範圍",
  "期望完成時間",
  "現有網站、社群或參考案例",
];
