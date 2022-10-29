import Aside from "@components/layouts/Aside";
import DailyActivity from "@components/stats/DailyActivity/DailyActivity";
import MainHeroSection from "@components/layouts/MainHeroSection";
import Loading from "@components/layouts/Loading";
import Error from "@components/layouts/Error";
import BlockKeyData from "@components/stats/BlockKeyData/BlockKeyData";
import { useContext, useEffect, useState } from "react";
import DashboardDataFetching from "@utils/useFetch";
import AverageSession from "@components/stats/AverageSession/AverageSession";
import Performances from "@components/stats/Activities/Performances";
import Score from "@components/stats/Score/Score";
import { useQuery} from "react-query";
import Auth from "@contexts/Auth";

export default function Dashboard() {
  const { userId } = useContext(Auth);
  const classMain =
    "xl:px-[107px] xl:py-[70px] xl:pl-[calc(107px+117px)] xl:pt-[calc(70px+93px)] px-[50px] py-[30px] pl-[calc(50px+60px)] pt-[calc(30px+93px)] w-full";
  const { isLoading, data, error } = useQuery("users", ()=> DashboardDataFetching(userId))
  const users = data

  if (isLoading) {
    return <Loading />;
  }else if (error) {
    return <Error error={error}/>;
  }else {
    const firstname = data.firstname
    const score = data.score
    const keyData = data.keyData

    return (
      <div className="h-full flex">
        <Aside />
        <main className={classMain}>
          <MainHeroSection name={firstname} />
          <div className="w-full flex gap-[2rem] pt-[70px] wl:flex-nowrap flex-wrap border-box xl:flex-row flex-col-reverse">
            <div className="xl:w-[calc((100%-2rem)/4*3)] min-w-[600px] flex gap-[2rem] flex-wrap">
              <DailyActivity id={userId}/>
              <AverageSession id={userId}/>
              <Performances id={userId}/>
              <Score id={userId} score={score}/>
            </div>
            <div className="xl:w-[calc((100%-2rem)/4)] flex xl:flex-col justify-between">
              {keyData.map((data, index) => {
                return <BlockKeyData key={index} data={data} />;
              })}
            </div>
          </div>
        </main>
      </div>
    );
  }
}
