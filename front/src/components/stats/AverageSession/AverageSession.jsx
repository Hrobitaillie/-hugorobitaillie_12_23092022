import { useEffect, useState } from "react"
import Error from "@components/layouts/Error"
import Loading from "@components/layouts/Loading"
import { AverageSessionFetching } from "@utils/useFetch"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

export default function AverageSession(){
    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const [error, setError] = useState(false)
    const userId = 12
    
    useEffect(()=>{
        const getData = async () =>{
            try{
                const data = await AverageSessionFetching(userId)
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
        console.log(data);
        return(
            <section id="averageSessions" className="w-[calc((100%-4rem)/3)] aspect-square bg-SportSeeRed p-[25px] rounded">
                <ResponsiveContainer>
                    <LineChart
                     data={data}
                     width="100%"
                     height="100%">
                        <XAxis 
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                        />
                        <YAxis 
                            dataKey="value"
                            axisLine={false}
                            tickLine={false}
                            tick={false}
                        />
                        <Tooltip />
                        <Line type="monotone" dataKey="value" stroke="#fff" />
                    </LineChart>
                </ResponsiveContainer>
            </section>
        )
    }
}