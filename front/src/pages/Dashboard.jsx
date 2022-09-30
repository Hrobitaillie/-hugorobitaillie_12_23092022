import Aside from "@components/layouts/Aside";
import DailyActivity from "@components/stats/DailyActivity";
import useFetch from "@utils/useFetch";

export default function Dashboard(){
    const data = useFetch(import.meta.env.VITE_USER_PERFORMANCE);

    return(
        <div className="h-full flex">
            <Aside/>
            <main className="px-[107px] py-[70px] pl-[calc(107px+117px)] pt-[calc(70px+93px)] w-full h-[100vh]">
                <h1>Bonjour <span className="text-SportSeeRed">Thomas</span></h1>
                <p className="pt-[20px]">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                <div className="w-full flex gap-[2rem] pt-[70px]">
                    <div className="w-[calc((100%-2rem)/4*3)] flex gap-[2rem] flex-wrap">
                        <DailyActivity/>
                        <div className="w-[calc((100%-4rem)/3)] aspect-square bg-SportSeeRed"></div>
                        <div className="w-[calc((100%-4rem)/3)] aspect-square bg-SportSeeRed"></div>
                        <div className="w-[calc((100%-4rem)/3)] aspect-square bg-SportSeeRed"></div>
                    </div>
                    <div className="w-[calc((100%-2rem)/4)] flex flex-col justify-between">
                        <div className="w-full aspect-[129/62] bg-SportSeeRed"></div>
                        <div className="w-full aspect-[129/62] bg-SportSeeRed"></div>
                        <div className="w-full aspect-[129/62] bg-SportSeeRed"></div>
                        <div className="w-full aspect-[129/62] bg-SportSeeRed"></div>
                    </div>
                </div>
            </main>
        </div>
        
    )
}