# Pinwai x Naomi Studio Site

這是工作室網站的獨立 Astro 原型，和現有 Pinwai 個人作品集站分開管理。

## Commands

```bash
npm run dev
npm run build
npm run preview
```

## GitHub Pages

第一版部署到 project Pages：

```text
https://pinwai.github.io/pinwai-naomi-studio/
```

目前部署方式是把 `npm run build` 產出的 `dist/` 推到 `gh-pages` 分支，GitHub Pages source 設為 `gh-pages / root`。

目前是多頁 Astro MVP，包含：

- `/`：首頁主視覺、服務摘要、精選作品、團隊與流程。
- `/services/`：服務模組、交付項目與合作流程。
- `/work/`：可公開案例整理與後續共同案例格式。
- `/team/`：雙主理人分工與協作方式。
- `/contact/`：詢問前資訊清單與 email CTA。

正式名稱、網域、email、案例授權與社群連結確認後，再調整文案與部署設定。
