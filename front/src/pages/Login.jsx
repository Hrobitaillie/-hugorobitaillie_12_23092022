import { Link } from "react-router-dom"

export default function Login(){
    const classMain =
    "xl:px-[107px] xl:py-[70px] xl:pt-[calc(70px+93px)] px-[50px] py-[30px] pt-[calc(30px+93px)] w-full flex column justify-center items-center ";
    const buttons = 
    "bg-black text-white p-5 rounded-md"
    return(
        <div className="h-[calc(100vh)] flex">
            <main className={classMain}>
                <div className="flex gap-3">
                    <div className={buttons}>
                        <Link to={"/user/12"}>
                            <div>
                                Utilisateur 12
                            </div>
                        </Link>
                    </div>
                    <div className={buttons}>
                        <Link to={"/user/18"}>
                            <div>
                                Utilisateur 18
                            </div>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    )
}