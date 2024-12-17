export default function HexagonBackground() {
    return (
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full" style={{
                    backgroundImage: `url("/hexagon-bg.svg")`,
                    backgroundSize: '48px 48px',
          opacity: 0.2
        }} />
      </div>
    )
  }