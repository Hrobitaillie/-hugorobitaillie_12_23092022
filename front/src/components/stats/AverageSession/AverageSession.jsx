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
import { PropTypes } from "prop-types";
import CustomTooltip from "./CustomTooltip";
import CustomizedDot from "./CustomizedDot";
import { displayCustomCursor } from "./displayCustomCursor";

/**
 * Display Average Session graph.
 * 
 * @param { number } id - The user's ID
 * 
 * @returns { React.ReactElement } The AverageSession component
 */

export default function AverageSession( { id }) {
  const userId = id;
  const { isLoading, data, error } = useQuery("averageSession", ()=> AverageSessionFetching(userId))

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

AverageSession.propTypes = {
  id: PropTypes.number

}