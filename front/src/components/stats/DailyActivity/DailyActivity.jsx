import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";
import CustomLegend from "./CustomLegend";
import CustomTooltip from "./CustomTooltip";
import Loading from "@components/layouts/Loading";
import Error from "@components/layouts/Error";
import { useEffect, useState } from "react";
import { DailyActivityFetching } from "@utils/useFetch";

export default function DailyActivity() {
    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState({})
    const [error, setError] = useState(false)
    const userId = 12
    const LabelStyle = {
      fontWeight: 500,
      fontSize: "14px",
      color: "#9B9EAC",
    };
    
    useEffect(()=>{
        const getData = async () =>{
            try{
                const data = await DailyActivityFetching(userId)
                setData(data)
            } catch(error){
                setError(true)
            } finally {
                setLoading(false)
            }
        } 
        getData()
    },[])

    if (isLoading) {
      return <Loading/>
    }
    if (error) {
        return <Error/>
    }
    if (data) {
    return (
      <section
        id="dailyActivity"
        className="w-full aspect-[167/64] bg-light p-[25px] rounded"
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            width="100%"
            height={147}
            barGap={8}
            margin={{ bottom: 20, left: -30, right: 45 }}
          >
            <CartesianGrid
              vertical={false}
              stroke="#DEDEDE"
              strokeDasharray="4"
            />
            <Tooltip content={<CustomTooltip />} cursor={{ opacity: "0.5" }} />
            <Legend align="right" verticalAlign="top" content={CustomLegend} />
            <XAxis
              dataKey="day"
              dy={20}
              style={LabelStyle}
              tick={{ fill: "#9B9EAC" }}
              stroke="#DEDEDE"
              tickLine={false}
              domain={["dataMin", "dataMax"]}
              padding={{ left: 10, right: 10 }}
              scale="point"
            />
            <YAxis
              dataKey="kilogram"
              domain={["dataMin-1", "dataMax+1"]}
              yAxisId="kilograms"
              orientation="right"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9B9EAC" }}
              dx={45}
              interval="preserveStartEnd"
            />
            <YAxis
              dataKey="calories"
              domain={["dataMin-100", "dataMax+100"]}
              yAxisId="calories"
              axisLine={false}
              tickLine={false}
              tick={false}
            />
            <Bar
              dataKey="kilogram"
              fill="#282D30"
              yAxisId="kilograms"
              barSize={7}
              radius={[10, 10, 0, 0]}
            />
            <Bar
              dataKey="calories"
              fill="#E60000"
              yAxisId="calories"
              barSize={7}
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </section>
    );
  }
}
