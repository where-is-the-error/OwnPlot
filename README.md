<div align="center">

# 🌱 ownplot

**나만의 작은 땅(plot)을 꾸미고 이웃과 나누는 소셜 홈 — UI 프로토타입**

![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3FCF8E?logo=supabase&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-443E38?logo=react&logoColor=white)

</div>

---

## 📌 소개

ownplot은 내 공간을 위젯으로 꾸미고, 이웃의 공간에 들러 쪽지를 남기는 소셜 홈을 목표로 시작한 프로젝트입니다.
현재는 **메인 화면 레이아웃과 위젯 UI를 잡은 초기 단계**입니다.

## ✨ 화면 구성

- **벤토 그리드 메인**: 3열 그리드로 위젯을 배치
  - 🎬 **Video** — 짧은 영상 위젯
  - 🎨 **Canvas** — 2칸을 차지하는 메인 꾸미기 영역
  - 📌 **Post-it** — 이웃 목록·메모
  - 🎧 **Mood** — 지금 기분과 Lo-Fi 플레이리스트
- **하단 내비게이션**: Home · Garden · Explore · Profile
- **로그인 화면**과 Supabase 클라이언트 연결

## 🛠️ 계획

- `react-moveable` + `selecto`로 위젯 드래그·리사이즈
- Zustand로 레이아웃 상태 관리, Supabase에 저장
- 이웃 방문과 방명록

## 🚀 실행

```bash
npm install
npm run dev    # http://localhost:3000
```

`.env.local`에 `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`를 설정합니다.
