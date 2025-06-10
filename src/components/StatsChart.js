import React from "react";
import {
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function StatsChart({ exercises }) {
  const aggregated = exercises.reduce((acc, ex) => {
    const found = acc.find((e) => e.name === ex.name);
    if (found) found.reps += ex.reps;
    else acc.push({ name: ex.name, reps: ex.reps });
    return acc;
  }, []);

  return (
    <div className="chart-container">
      <h3>Exercise Progress</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={aggregated}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="reps" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default StatsChart;
