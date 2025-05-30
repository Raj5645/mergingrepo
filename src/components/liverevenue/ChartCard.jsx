import { PieChart } from "react-minimal-pie-chart";

export default function ChartCard({ title, data }) {
  return (
    <div className="bg-[#1e1e1e] p-6 rounded-xl shadow-md">
      <h2 className="text-white font-semibold text-lg mb-4">{title}</h2>
      <PieChart
        data={data}
        lineWidth={30}
        rounded
        label={({ dataEntry }) => `${dataEntry.title} (${dataEntry.value}%)`}
        labelStyle={{ fontSize: "5px", fill: "#fff" }}
        style={{ height: "200px" }}
      />
    </div>
  );
}
