import { getUserFirstname } from "@utils/factory/FactoryUserInfos";

import { PropTypes } from "prop-types";

/**
 * Display header.
 * 
 * @param { string } name - The user's firstname
 * @returns { React.ReactElement } The header component
 */
export default function MainHeroSection({ name }){
    return(
        <div>
            <h1>Bonjour <span className="text-SportSeeRed">{ name }</span></h1>
            <p className="pt-[20px]">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    )
}

MainHeroSection.propTypes = {
    name: PropTypes.string.isRequired
}