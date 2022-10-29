import axios from "axios";
import { useContext, useState } from "react";
import { useEffect } from "react";
import Auth from "@contexts/Auth";
import { getUserFirstname, FormatUserKeyData } from "@utils/factory/FactoryUserInfos";
import FactoryDailyActivity from "./factory/FactoryDailyActivity";
import FactoryAverageSessions from "./factory/FactoryAverageSessions";
import FactoryPerformances from "./factory/FactoryPerformances";
import { getUserScore } from "./factory/FactoryUserInfos";
import { PropTypes } from "prop-types";

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
export async function PerformancesFetching(userid){
  try{
  const response = await axios.get(import.meta.env.VITE_API_URL + userid + "/USER_PERFORMANCE.json")
  const data = response.data

  const formatedData = FactoryPerformances(data)

  return formatedData
  } catch(error){
    errorDetected(error)
  }
}
export default async function DashboardDataFetching(userid){
    try{
    const response = await axios.get(import.meta.env.VITE_API_URL + userid + "/USER_Main_DATA.json")
    const data = response.data
      
    const firstname = getUserFirstname(data)
    const keyData = FormatUserKeyData(data)
    const score = getUserScore(data)

    return{
      'firstname': firstname, 
      'keyData': keyData,
      'score': score
      }
    } catch(error){
      errorDetected(error)
    }
}

DailyActivityFetching.propTypes = {
  id: PropTypes.number.isRequired
}

AverageSessionFetching.propTypes = {
  id: PropTypes.number.isRequired
}

PerformancesFetching.propTypes = {
  id: PropTypes.number.isRequired
}

DashboardDataFetching.propTypes = {
  id: PropTypes.number.isRequired
}
