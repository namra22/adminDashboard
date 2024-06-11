import "./chart.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const data =[
    {name:"January" ,total:32200},
    {name:"February", total:94770},
    {name:"March", total:46890},
    {name:"April", total:56770},
    {name:"May", total:42578},
    {name:"June", total:76750}
]
export default function Chart() {
  return (
    <div className="chart">
      <div className="title">Last 6 months revenue</div>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 20, bottom: 20 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid"/>
          <Tooltip />
          <Area
            type="monotone"
            dataKey="total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
          <Area
            type="monotone"
            dataKey="pv"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
