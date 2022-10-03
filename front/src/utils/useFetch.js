import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const useFetch = (prop) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    
    // au chargement de la fonction récupérer les données
    console.log(process.env.NODE_ENV);
    
    useEffect(()=> {
        const fetchData = async () => {
            setLoading(true);
            const result = await axios(import.meta.env.VITE_API_URL + prop);
            const data = result.data
            console.log(data);
        }
        fetchData()
    }, [])

    return { loading, error, data }
}

export default useFetch;