import React from "react";
import { Card, CardContent } from "./Card";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import { Users, Rocket, Activity } from "lucide-react"; 

import Sidebar from "../common/Sidebar";
import Header from "../common/header2";

const dataLine = [
  { name: "Week 1", Feb: 4000, Jan: 2400 },
  { name: "Week 2", Feb: 3000, Jan: 1398 },
  { name: "Week 3", Feb: 2000, Jan: 9800 },
  { name: "Week 4", Feb: 2780, Jan: 3908 },
];

const dataBar = [
  { name: "Week 1", General: 4000, VIP: 2400 },
  { name: "Week 2", General: 3000, VIP: 1398 },
  { name: "Week 3", General: 2000, VIP: 9800 },
  { name: "Week 4", General: 2780, VIP: 3908 },
];

const dataPie = [
  { name: "New", value: 20000 },
  { name: "Returning", value: 20000 },
];

const COLORS = ["#00C49F", "#FFBB28"];

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white">
      <div className="w-[220px] bg-[#171717]">
        <Sidebar />
      </div>

      <div className="flex-1 p-6">
        <Header />
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold">Sneak Peek to Our Solutions</h1>
          <p className="text-sm text-gray-400">
            From planning to performance — we’ve got your event covered.
          </p>
        </div>

        <div className="bg-[#1f2937] p-6 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card className="bg-[#111827] text-white">
              <CardContent className="flex flex-col items-center justify-center p-4">
                <Users size={32} className="mb-2" />
                <p className="text-lg font-bold">84,950</p>
                <p className="text-sm">Leads</p>
              </CardContent>
            </Card>

            <Card className="bg-[#111827] text-white">
              <CardContent className="flex flex-col items-center justify-center p-4">
                <Rocket size={32} className="mb-2" />
                <p className="text-lg font-bold">6,241</p>
                <p className="text-sm">Bookings</p>
              </CardContent>
            </Card>

            <Card className="bg-[#111827] text-white">
              <CardContent className="flex flex-col items-center justify-center p-4">
                <Activity size={32} className="mb-2" />
                <p className="text-lg font-bold">4,380</p>
                <p className="text-sm">Events</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-[#111827] text-white">
              <CardContent>
                <p className="text-sm mb-2">52,160 customers</p>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={dataLine}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Feb" stroke="#8884d8" />
                    <Line type="monotone" dataKey="Jan" stroke="#82ca9d" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="bg-[#111827] text-white">
              <CardContent>
                <p className="text-sm mb-2">Ticket Category</p>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={dataBar}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="General" fill="#8884d8" />
                    <Bar dataKey="VIP" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="bg-[#111827] text-white">
              <CardContent>
                <p className="text-sm mb-2">Customer Growth</p>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={dataPie}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={80}
                    >
                      {dataPie.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
