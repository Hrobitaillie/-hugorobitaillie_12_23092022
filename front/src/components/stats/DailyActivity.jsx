import useFetch from "@utils/useFetch";
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

export default function DailyActivity() {
  const { loading, error, data } = useFetch(import.meta.env.VITE_USER_ACTIVITY);

  const tooltipStyle = {
    width:'39px',
    height:'63px', 
    backgroundColor:'#E60000', 
    color:'white', 
    display:"flex", 
    justifyContent:"center", 
    alignItems:"center", 
    flexDirection:"column", 
    gap:7,
    outline: 'none'
  }
  loading && <h1>Loading DATA ....</h1>;
  error && console.log(error);
  if (data) {
    console.log(data.sessions);

    const CustomTooltip = ({ active, payload, label }) => {
      if (active && payload && payload.length) {
        return (
          <div style={tooltipStyle}>
            <p className="label" style={{fontSize:'7px'}}>{`${payload[0].value}Kg`}</p>
            <p className="label" style={{fontSize:'7px'}}>{`${payload[1].value}Kcal`}</p>
          </div>
        );
      }

      return null;
    };

    return (
      <section id="dailyActivity" className="w-full aspect-[167/64]">
        <ResponsiveContainer>
          <BarChart data={data.sessions} width="100%" height="100%">
            <CartesianGrid vertical={false} stroke='#DEDEDE' strokeDasharray='4'/>
            <Tooltip content={<CustomTooltip />}cursor={{opacity:'0.5'}}/>
            <Legend />
            <XAxis dataKey="day" />
            <YAxis
              dataKey="kilogram"
              domain={["dataMin-1", "dataMax+1"]}
              yAxisId="kilograms"
              orientation="right"
              axisLine={false}
              tickLine={false}
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
