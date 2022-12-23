
import { Fragment } from "react";
import { Link } from "react-router-dom";

/**
 * Display header.
 * 
 * @returns { React.ReactElement } The header component
 */
export default function Header(){
    return(
        <Fragment>
            <header className="fixed top-0 left-0 w-full z-10 flex text-white bg-black max-w-full py-4 px-7 shadow-header">
                <img 
                src="\src\assets\img\logo_sportsee.svg" 
                alt=""
                className="xl:w-[178px] w-[100px]" 
                />
                <nav className="w-full mx-[70px]" >
                    <ul className="flex w-full justify-between items-center flex-row h-full pl-7 xl:text-[24px] text-[15px]">
                        <li>
                            <Link to="/">Accueil</Link>
                        </li>
                        <li>Profil</li>
                        <li>Réglages</li>
                        <li>Communauté</li>
                    </ul>
                </nav>
            </header>
        </Fragment>
    )
}