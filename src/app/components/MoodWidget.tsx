import PlotCard from "./PlotCard";

export default function MoodWidget() {
  const moods = [
    { emoji: "🌱", label: "Calm" },
    { emoji: "✨", label: "Creative" },
    { emoji: "☁️", label: "Dreamy" },
    { emoji: "🌊", label: "Flow" }
  ];

  return (
    <PlotCard title="Real-time Mood">
      <div className="flex justify-between items-center py-2">
        {moods.map((mood) => (
          <button 
            key={mood.label}
            className="group/mood relative flex flex-col items-center gap-2"
          >
            <span className="text-2xl grayscale group-hover/mood:grayscale-0 transition-all duration-300 hover:scale-125">
              {mood.emoji}
            </span>
            <span className="text-[8px] uppercase tracking-tighter opacity-0 group-hover/mood:opacity-40 transition-opacity">
              {mood.label}
            </span>
          </button>
        ))}
      </div>
    </PlotCard>
  );
}