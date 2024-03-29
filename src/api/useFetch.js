import { useEffect, useState } from "react";


export function useFetch(url){
    const[data, setData]= useState([]);
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState();
        
    useEffect(()=>{
        setLoading(true)
        fetch(url)
            .then(response => response.json())
            .then((data)=>setData(data))
            .catch((error)=> setError(error))
            .finally(()=>setLoading(false))
    },[url])

    return { data, loading, error}
}


