import { useEffect, useState } from "react"
import axios from "axios"

function Dashboard(){

    const url = "https://dummyjson.com/quotes"

    //HOOKS
    const [quotes, setQuotes] = useState([])
    const [loading, setLoading]=useState(true)

    //INDICAR AL SERVICIO (ENDPOINT)
    const getQuotes=async()=>{
        try{
                  const result = await axios.get(url)
                  console.log(result.data.quotes)
                  setQuotes(result.data.quotes)
                  setLoading(false)

        }
        catch(error){
            console.error("Error al solicitar los datos:" . error)
            setLoading(true)
        }

        
    }

    useEffect(()=>{
        getQuotes()
    }, [])
    return (
  <>
    <h1>Dashboard</h1>
    {loading ? (
      <p>Cargando datos...</p>
    ) : (
      <>
        <p>Mostrando datos</p>
        {quotes.map((item, index) => (
          <p key={index}>
            <strong>{item.quote}</strong> - {item.author}
          </p>
        ))}
      </>
    )}
  </>
);
}

export default Dashboard
