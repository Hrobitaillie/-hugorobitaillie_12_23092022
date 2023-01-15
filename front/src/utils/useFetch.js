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
    if (process.env.NODE_ENV === "development") {
      var { data:{ sessions } } = await axios.get("./" + userid + "/USER_ACTIVITY.json ")
    }else{
      var data = await axios.get("http://localhost:3001/user/" + userid + "/activity")
      var sessions = data.data.data.sessions
    }
  return FactoryDailyActivity(sessions)
  } catch(error){
    errorDetected(error)
  }
}

export async function AverageSessionFetching(userid){
  let response;
  let data
  try{
    if (process.env.NODE_ENV === "development") {
      response = await axios.get("./" + userid + "/USER_AVERAGE_SESSION.json")
      data = response.data
    }else{
      response = await axios.get("http://localhost:3001/user/" + userid + "/average-sessions")
      data = response.data.data
    }

  const formatedData = FactoryAverageSessions(data)

  return formatedData
  } catch(error){
    errorDetected(error)
  }
}

export async function PerformancesFetching(userid){
  let response;
  let data
  try{
    if (process.env.NODE_ENV === "development"){
      response = await axios.get("./" + userid + "/USER_PERFORMANCE.json")
      data = response.data
    }else{
      response = await axios.get("http://localhost:3001/user/" + userid + "/performance")
      data = response.data.data
    }
  const formatedData = FactoryPerformances(data)

  return formatedData
  } catch(error){
    errorDetected(error)
  }
}

export default async function DashboardDataFetching(userid){
  let response;
  let data
  try{
    if (process.env.NODE_ENV === "development") {
      response = await axios.get("./" + userid + "/USER_Main_DATA.json")
      data = response.data
    }else{
      response = await axios.get("http://localhost:3001/user/" + userid + "/")
      data = response.data.data
  }

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
