export default function Card({ title, subtitle, icon, color, details = [] }) {
  return (
    <div className={`p-5 rounded-xl shadow-md text-white ${color}`}>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="text-2xl">{icon}</div>
      </div>
      <p className="text-gray-400 mt-1">{subtitle}</p>
      <ul className="text-sm mt-2 text-gray-300 space-y-1">
        {details.map((d, i) => (
          <li key={i}>{d}</li>
        ))}
      </ul>
    </div>
  );
}
