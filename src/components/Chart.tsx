import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  BarChart,
  CartesianGrid,
  Bar,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const Linechart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7&interval=daily",
    )
      .then((res) => res.json())
      .then((data) => {
        const formattedData = data.prices.map(
          ([timestamp, price]: [number, number]) => ({
            date: new Date(timestamp).toLocaleDateString(),
            price: price.toFixed(2),
          }),
        );
        setData(formattedData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="h-[400px] w-full rounded-lg bg-white p-4">
      <h2 className="mb-4 text-xl font-semibold">
        Bitcoin Price (Last 7 Days)
      </h2>
      <ResponsiveContainer width="50%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#ff7300"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

const Barchart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7",
    )
      .then((response) => response.json())
      .then((json) => {
        const chartData = json.prices.map(
          ([timestamp, price]: [number, number]) => ({
            date: new Date(timestamp).toLocaleDateString(),
            price: Math.round(price),
          }),
        );
        setData(chartData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="h-96 w-full p-4">
      <h2 className="mb-4 text-center text-xl font-bold">
        Bitcoin Prices Over 7 Days
      </h2>
      <ResponsiveContainer width="50%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="price" fill="#f7931a" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

const Piechart = () => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/global")
      .then((response) => response.json())
      .then((json) => {
        const btcDominance = json.data.market_cap_percentage.btc;
        const altcoins = 100 - btcDominance;

        setData([
          { name: "Bitcoin", value: btcDominance },
          { name: "Altcoins", value: altcoins },
        ]);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const COLORS = ["#f7931a", "#444"];

  return (
    <div className="h-96 w-full p-4">
      <h2 className="mb-4 text-center text-xl font-bold">
        Bitcoin Market Share
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {data.map((entry: any, index: any) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export { Linechart, Barchart, Piechart };
