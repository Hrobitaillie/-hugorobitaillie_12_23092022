import { useContext, useState } from "react"
import Auth from "@contexts/Auth";

export default function Login(){
    const { isLogged, userId } = useContext(Auth);

    const [inputId, setInputId] = useState();

    const handleSubmit=e => {
        e.preventDefault();

        isNaN(inputId) ? (
            alert("Vous devez rentrer un NUMERO d'adhérent valide")
        ):(
            ['12','18'].includes(inputId) ? (
                
                userId = inputId,

                console.log(userId)
                ): (
                    alert("ce numéro d'adhérent valide n'existe pas")
                )
        );
        console.log(inputId);
    }

    return(
        <div className="h-[calc(100vh-93px)] py-[93px] flex justify-center items-center">
            <div className="max-w-[700px] text-center">
                <h1 className="pb-[2rem]">Pour vous connecter merci de renseigner un numéro d'ID</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-[1rem]">
                    <label>
                        Numéro Adhérant:
                        <input 
                        type="text" 
                        onChange={e => setInputId(e.target.value)}
                        className="ml-[1rem] border-black border rounded-md"
                        />
                    </label>
                    <input type="submit" value="Se connecter" className="cursor-pointer p-3 rounded-lg bg-black  w-fit m-auto text-white hover:bg-white hover:text-black hover:border hover:border-black"/>
                </form>
            </div>
        </div>
    )
}