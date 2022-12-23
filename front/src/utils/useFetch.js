import axios from "axios";
import { getUserFirstname, FormatUserKeyData } from "@utils/factory/FactoryUserInfos";
import FactoryDailyActivity from "./factory/FactoryDailyActivity";
import FactoryAverageSessions from "./factory/FactoryAverageSessions";
import FactoryPerformances from "./factory/FactoryPerformances";
import { getUserScore } from "./factory/FactoryUserInfos";

const errorDetected = (error) =>{
  console.log("An error as expected", error);
}

export async function DailyActivityFetching(userid){
  try{
  const { data:{ sessions } } = await axios.get(import.meta.env.VITE_API_URL + userid + "/USER_ACTIVITY.json")

  return FactoryDailyActivity(sessions)
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
