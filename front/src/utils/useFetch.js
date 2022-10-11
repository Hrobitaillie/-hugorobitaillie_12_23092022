import axios from "axios";
import { useContext, useState } from "react";
import { useEffect } from "react";
import Auth from "@contexts/Auth";
import { getUserFirstname, FormatUserKeyData } from "@utils/factory/FactoryUserInfos";
import FactoryDailyActivity from "./factory/FactoryDailyActivity";
import FactoryAverageSessions from "./factory/FactoryAverageSessions";

const errorDetected = (error) =>{
  console.log("An error as expected", error);
}
export async function DailyActivityFetching(userid){
  try{
  const response = await axios.get(import.meta.env.VITE_API_URL + userid + "/USER_ACTIVITY.json")
  const data = response.data

  const formatedData = FactoryDailyActivity(data.sessions)

  return formatedData
  } catch(error){
    errorDetected(error)
  }
}

export async function AverageSessionFetching(userid){
  try{
  const response = await axios.get(import.meta.env.VITE_API_URL + userid + "/USER_AVERAGE_SESSION.json")
  const data = response.data

  const formatedData = FactoryAverageSessions(data)

  return formatedData
  } catch(error){
    errorDetected(error)
  }
}
export default async function dashboardDataFetching(userid){
    try{
    const response = await axios.get(import.meta.env.VITE_API_URL + userid + "/USER_Main_DATA.json")
    const data = response.data

    const firstname = getUserFirstname(data)
    const keyData = FormatUserKeyData(data)

    return{
      'firstname': firstname, 
      'keyData': keyData
      }
    } catch(error){
      errorDetected(error)
    }
}
