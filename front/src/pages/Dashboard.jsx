import Aside from "@components/layouts/Aside";
import DailyActivity from "@components/stats/DailyActivity/DailyActivity";
import MainHeroSection from "@components/layouts/MainHeroSection";
import Loading from "@components/layouts/Loading";
import Error from "@components/layouts/Error";
import BlockKeyData from "@components/stats/BlockKeyData/BlockKeyData";
import { useEffect, useState } from "react";
import dashboardDailyActivityFetching from "@utils/useFetch";
import AverageSession from "@components/stats/AverageSession/AverageSession";

export default function Dashboard(){
    const [isLoading, setLoading] = useState(true)
    const [firstname, setFirstname] = useState()
    const [keyData, setkeyData] = useState()
    const [error, setError] = useState(false)
    const userId = 12
    const classMain = "xl:px-[107px] xl:py-[70px] xl:pl-[calc(107px+117px)] xl:pt-[calc(70px+93px)] px-[50px] py-[30px] pl-[calc(50px+60px)] pt-[calc(30px+93px)] w-full"

    useEffect(()=>{
        const getData = async () =>{
            try{
                const data = await dashboardDailyActivityFetching(userId)
                setFirstname(data.firstname)
                setkeyData(data.keyData)
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
    if (firstname) {
        return(
            <div className="h-full flex">
                <Aside/>
                <main className={classMain}>
                    <MainHeroSection name={firstname}/>
                    <div className="w-full flex gap-[2rem] pt-[70px]">
                        <div className="w-[calc((100%-2rem)/4*3)] flex gap-[2rem] flex-wrap">
                            <DailyActivity/>
                            <AverageSession/>
                            <div className="w-[calc((100%-4rem)/3)] aspect-square bg-SportSeeRed"></div>
                            <div className="w-[calc((100%-4rem)/3)] aspect-square bg-SportSeeRed"></div>
                        </div>
                        <div className="w-[calc((100%-2rem)/4)] flex flex-col justify-between">
                            {
                                keyData.map((data, index) => {
                                    return (<BlockKeyData key={index} data={data}/>)
                                })
                            }
                        </div>
                    </div>
                </main>
            </div>
            
        )
    }

}
