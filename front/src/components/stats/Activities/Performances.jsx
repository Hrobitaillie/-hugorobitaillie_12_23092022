import { useEffect, useState } from "react";
import Error from "@components/layouts/Error";
import Loading from "@components/layouts/Loading";
import { PerformancesFetching } from "@utils/useFetch";
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from "recharts";
import { useQuery } from "react-query";
import { PropTypes } from "prop-types";

export default function Performances({id}){

    const userId = id;
    const { isLoading, data, error } = useQuery("performance", ()=> PerformancesFetching(userId))
  
    if (isLoading) {
      return <Loading />;
    }
    if (error) {
      return <Error error={error}/>;
    }
    if (data) {
      return (
        <section
        id="Performances"
        className="duration-sessions-chart w-[calc((100%-4rem)/3)] aspect-square bg-SportSeeBlack rounded flex flex-col justify-between"
        >
            <ResponsiveContainer >
              <RadarChart data={data} outerRadius="60%">
                  <PolarGrid radialLines={false}/>
                  <PolarAngleAxis dataKey="subject" tick={{fontSize: 12,fill: 'white',}} />
                  <Radar dataKey="value" stroke="#FF0000" fill="#FF0000" fillOpacity={0.7} />
              </RadarChart>
            </ResponsiveContainer>
        </section>
        )
    }
}
Performances.propTypes = {
  id: PropTypes.number.isRequired
}