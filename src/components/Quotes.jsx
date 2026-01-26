import{ useEffect, useState} from "react"

function Quotes(){
    const url="https://dummyjson.com/quotes"


    //HOOKS

    //MANEJO DE LISTAS
    const [quotes, setQuotes]=useState([])

    //ESTADO ACTUAL 
    const[loading, setLoading]=useState(true)

    const getData=()=>{
        return fetch(url)
        .then((res)=>res.json())
        .then(console.log);
    }

    useEffect(()=>{
        getData()
    },[])
    return(
        <>
        <h2> Frases Listados</h2>
        </>
    )
}
export default Quotes;