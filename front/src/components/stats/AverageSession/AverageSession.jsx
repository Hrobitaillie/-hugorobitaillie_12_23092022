import { useEffect, useState } from "react";
import Error from "@components/layouts/Error";
import Loading from "@components/layouts/Loading";
import { AverageSessionFetching } from "@utils/useFetch";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useQuery } from "react-query";

export default function AverageSession( { id }) {
  const userId = id;
  const { isLoading, data, error } = useQuery("averageSession", ()=> AverageSessionFetching(userId))
  
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className=" bg-white p-2">
          <p className="label">{`${payload[0].value} min`}</p>
        </div>
      );
    }

    return null;
  };
  const CustomizedDot = (props) => {
    const { cx, cy } = props;
    return (
      <svg
        x={cx - 10}
        y={cy - 10}
        width={20}
        height={20}
        fill="white"
        viewBox="0 0 18 17.95"
      >
        <path
          className="cls-1"
          d="M9,15.45c3.58,0,6.5-2.88,6.5-6.48s-2.92-6.48-6.5-6.48S2.5,5.38,2.5,8.98s2.92,6.48,6.5,6.48Z"
          fill="rgba(255, 255, 255, 0.2)"
        />
        <path
          className="cls-2"
          d="M9,12.95c2.21,0,4-1.78,4-3.98s-1.79-3.98-4-3.98-4,1.78-4,3.98,1.79,3.98,4,3.98Z"
        />
      </svg>
    );
  };
  const displayCustomCursor = (e) => {
    const durationSessionsChart = document.querySelector(
      ".duration-sessions-chart"
    );

    if (e.isTooltipActive === true) {
      const lineChart = document.querySelector(
        ".duration-sessions-chart__line-chart"
      );
      const lineChartWidth = lineChart.clientWidth;
      const colorStopPourcentage =
        (e.activeCoordinate.x / lineChartWidth) * 100;
      durationSessionsChart.style.backgroundImage = `linear-gradient(90deg, rgba(255, 0, 0, 1) ${colorStopPourcentage}%, rgba(0, 0, 0, .1) ${colorStopPourcentage}%, rgba(0, 0, 0, .1) 100%)`;
    } else {
      durationSessionsChart.style.backgroundImage = null;
    }
  };

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <Error error={error}/>;
  }
  if (data) {
    return (
      <section
        id="averageSessions"
        className="duration-sessions-chart w-[calc((100%-4rem)/3)] aspect-square bg-SportSeeRed rounded flex flex-col justify-between"
      >
        <p className=" p-8 text-white opacity-50">Durée moyenne des sessions</p>
        <ResponsiveContainer height="60%">
          <LineChart
            data={data}
            margin={{ top: 0, right: 30, left: 20, bottom: 5 }}
            onMouseMove={(e) => {
              displayCustomCursor(e);
            }}
            className="duration-sessions-chart__line-chart"
            allowDataOverflow={true}
          >
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              stroke={"rgba(255,255,255,0.5)"}
              width="100%"
              tick={{ fontSize: 12 }}
              allowDataOverflow={true}
            />
            <YAxis
              dataKey="value"
              axisLine={false}
              tickLine={false}
              tick={false}
              hide={true}
            />
            <Tooltip
              //   cursor={{
              //     strokeWidth: "8000px",
              //     strokeOpacity: 0.1,
              //     strokeLinecap: "square",
              //     stroke: "#000000",
              //     style: { transform: "translateX(4000px)",height:"50px"},
              //   }}
              cursor={false}
              content={<CustomTooltip />}
            />
            <defs>
              <linearGradient id="linearGradient">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0.4)" />
                <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
              </linearGradient>
            </defs>
            <Line
              type="monotone"
              dataKey="value"
              stroke="url(#linearGradient)"
              strokeWidth={2}
              dot={false}
              activeDot={<CustomizedDot />}
            />
          </LineChart>
        </ResponsiveContainer>
      </section>
    );
  }
}
