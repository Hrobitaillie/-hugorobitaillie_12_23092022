import Aside from "@components/layouts/Aside";
import DailyActivity from "@components/stats/DailyActivity/DailyActivity";
import MainHeroSection from "@components/layouts/MainHeroSection";

export default function Dashboard(){
    const classMain = "xl:px-[107px] xl:py-[70px] xl:pl-[calc(107px+117px)] xl:pt-[calc(70px+93px)] px-[50px] py-[30px] pl-[calc(50px+60px)] pt-[calc(30px+93px)] w-full"

    return(
        <div className="h-full flex">
            <Aside/>
            <main className={classMain}>
                <MainHeroSection/>
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
