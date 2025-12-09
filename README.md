# React 登入註冊系統

這是一個使用 React 建立的登入和註冊頁面專案。

## 功能特色

- ✅ 登入頁面
- ✅ 註冊頁面
- ✅ 表單驗證
- ✅ 響應式設計
- ✅ 美觀的 UI 介面
- ✅ 平滑動畫效果

## 安裝與執行

### 1. 安裝依賴

```bash
npm install
```

### 2. 啟動開發伺服器

```bash
npm start
```

應用程式將在 [http://localhost:3000](http://localhost:3000) 開啟。

### 3. 建置專案

```bash
npm run build
```

## 專案結構

```
├── public/
│   └── index.html          # HTML 模板
├── src/
│   ├── components/
│   │   ├── Login.js        # 登入頁面組件
│   │   ├── Register.js     # 註冊頁面組件
│   │   └── Auth.css        # 認證頁面樣式
│   ├── App.js              # 主應用程式組件
│   ├── App.css             # 應用程式樣式
│   ├── index.js            # 入口文件
│   └── index.css           # 全域樣式
└── package.json            # 專案配置
```

## 功能說明

### 登入頁面 (`/login`)

- 電子郵件和密碼驗證
- 記住我功能
- 忘記密碼連結
- 導航到註冊頁面

### 註冊頁面 (`/register`)

- 使用者名稱驗證（至少 3 個字元）
- 電子郵件格式驗證
- 密碼強度驗證（需包含大小寫字母和數字）
- 密碼確認
- 服務條款同意
- 導航到登入頁面

## 技術棧

- React 18.2.0
- React Router DOM 6.22.0
- CSS3 (Flexbox, Animations)

## 自訂樣式

所有樣式都可以在以下文件中自訂：

- `src/index.css` - 全域樣式和背景
- `src/components/Auth.css` - 認證表單樣式
- `src/App.css` - 應用程式容器樣式
