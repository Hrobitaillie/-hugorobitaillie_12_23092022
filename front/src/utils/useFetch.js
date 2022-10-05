import axios from "axios";
import { useContext, useState } from "react";
import { useEffect } from "react";
import Auth from "@contexts/Auth";

const useFetch = (prop) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { userId } = useContext(Auth);
  const url = import.meta.env.VITE_API_URL + userId + "/" + prop;
  // au chargement de la fonction récupérer les données
  useEffect(() => {
    console.log(url);
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);
  return { loading, error, data };
};

export default useFetch;
