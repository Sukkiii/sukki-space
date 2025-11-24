# 🌌 Sukki Space  
**Personal Portfolio & Tech Blog built with Next.js + Emotion**

Sukki Space는 개인 포트폴리오와 기술 블로그를 통합한 프로젝트로,  
Next.js(App Router) 기반으로 구축되었으며  
Emotion, SVG Sprite, Custom Theme System 등을 적용해  
개인 브랜드를 담아내는 웹사이트입니다.

---

## 🚀 Tech Stack

### **Frontend**
- **Next.js 16 (App Router)**
- **TypeScript**
- **Emotion (CSS-in-JS)**
- **SVG Sprite Icon System**
- **ESLint + Flat Config**
- **Custom Theme System (Light Theme 기반)**

### **Tooling**
- Turbopack / Next dev server
- npm
- GitHub

---

## 🎨 Theme System

본 프로젝트는 **Light Theme** 기반으로 색상 팔레트를 정의하였으며,  
향후 Dark Theme 확장을 고려하여 구조화되어 있습니다.

### 📁 Theme Structure

``` TS
ui/theme
  dark.ts
  light.ts
  ThemeProvider.tsx
```

### 🌈 Primary Palette (Blue / Navy)
톤: 기술적 · 안정적 · 신뢰 중심

- `p100` ~ `p900`  
- 버튼, 링크, 주요 액센트 컬러로 사용

### 🌸 Secondary Palette (Purple / Violet)
톤: 창의적 · 감각적 · 포인트 연출

- `s100` ~ `s900`

### 🔧 Utility Colors
- red, green, blue, orange, pink  
- 상태 컬러 (error/success/warn/info/accent)

---

## 🧱 Project Structure
``` TS
app/
  about/
    page.tsx
  blog/
    page.tsx
  favicon.ico
  index.css
  layout.tsx
  page.tsx

public/
  assets/
    sprite.svg

ui/
  Layout/
    Header.tsx
  components/
    Button.tsx
    FlexBox.tsx
    Icon.tsx
    SvgSprite.tsx
  theme/
    light.ts
    dark.ts
    ThemeProvider.tsx

tsconfig.json
```


---

## 🔧 주요 기능

### ✔ Custom ThemeProvider  
- Emotion ThemeProvider 기반  
- Theme.colors를 통해 전역 스타일 제어 가능

### ✔ SVG Sprite Icon System  
- `public/assets/sprite.svg` 기반  
- `<use href="#icon-id" />` 방식  
- inline SSR 렌더링으로 빠르고 안정적

### ✔ Emotion 기반 컴포넌트 스타일링  
- 디자인 시스템 확장 용이  
- 일관된 UI 스타일 구현

### ✔ 명확한 라우팅 구조  
- `app/blog`, `app/projects`, `app/about`  
- App Router 기반의 Server/Client Component 구분

---

## 📦 Scripts

```bash
npm dev       # Development
npm build     # Production build
npm start     # Start production server
npm lint      # ESLint 체크
