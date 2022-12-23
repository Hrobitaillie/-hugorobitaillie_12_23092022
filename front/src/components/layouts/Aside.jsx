/**
 * Display Left SideBar.
 * 
 * @returns { React.ReactElement } The Aside component
 */

export default function Aside(){
    return(
        <aside className="xl:h-[calc(100vh-93px)] h-[calc(100vh-66.27px)] fixed left-0 xl:top-[93px] top-[66.27px] text-white bg-black py-[60px] px-[10px] xl:w-[117px] w-[60px] flex flex-col justify-end items-center gap-[2rem]">
            <nav className="">
                <ul className="flex flex-col gap-4">
                    <li>
                        <a href="">
                            <img src="./src/assets/img/pictos/yoga.svg" alt="yoga" />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="./src/assets/img/pictos/swim.svg" alt="swim" />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="./src/assets/img/pictos/bicycle.svg" alt="bicycle" />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="./src/assets/img/pictos/gym.svg" alt="gym" />
                        </a>
                    </li>
                </ul>
            </nav>
            <span className="copyrightAside shrink h-[40%] min-h-fit inline-block">Copyright, SportSee 2020</span>
        </aside>
    )
}