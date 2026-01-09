// src/app/components/Header.tsx
export default function Header() {
  return (
    <header className="mb-10 w-full px-2 py-6">
      <div className="max-w-[1400px] mx-auto">
        {/* 텍스트 크기와 폰트를 사진 느낌에 맞춰 조정 */}
        <h1 className="text-6xl font-serif text-own-brown lowercase tracking-tight">
          ownplot.
        </h1>
        {/* 설명 문구는 필요에 따라 유지하거나 삭제하세요 */}
        <p className="text-sm text-own-text/60 mt-2 ml-1">
          나만의 작은 디지털 텃밭 🌿
        </p>
      </div>
    </header>
  );
}