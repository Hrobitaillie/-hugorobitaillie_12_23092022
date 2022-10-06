import { getUserFirstname } from "@utils/factory/FactoryUserInfos";
import useFetch from "@utils/useFetch";
import Error from "./Error";
import Loading from "./Loading";

export default function MainHeroSection(){
    const { loading, error, data } = useFetch(import.meta.env.VITE_USER_MAIN_DATA);

    data && (
        const userName = getUserFirstname(data)
        console.log(data)
            <div>
                <h1>Bonjour <span className="text-SportSeeRed">{userName}</span></h1>
                <p className="pt-[20px]">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
        )
    )
}