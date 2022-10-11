import { getUserFirstname } from "@utils/factory/FactoryUserInfos";
import useFetch from "@utils/useFetch";
import Error from "./Error";
import Loading from "./Loading";

export default function MainHeroSection({ name }){
    return(
        <div>
            <h1>Bonjour <span className="text-SportSeeRed">{ name }</span></h1>
            <p className="pt-[20px]">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    )
}