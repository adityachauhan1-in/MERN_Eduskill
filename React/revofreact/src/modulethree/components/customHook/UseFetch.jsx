import React ,{useState  , useEffect, useRef} from 'react'

function useFetch(url , options= {}){

const [data , setData] = useState(null)
const [loading , setLoading ] = useState(true)
const [error , setError] = useState(null)
 const isMounted = useRef(true)
 
  
    const fetchData = async() => {
        setLoading(true);
        setError(null)
        try {
            const response = await fetch(url , options)
            if(!response.ok){
                throw new Error (`failed to fetch data  , ${response.status}`)
            }
            const result =  response.json()
            if(isMounted.current){
                setData(result)
            }
        } catch (error) {
            if(isMounted.current){
                setData(error)
            }
            console.log("here is the error " , error)
        }
        finally{
            if(isMounted.current){
                setLoading(false)
            }
        }
    }


useEffect (() => {
    isMounted.current = true
    fetchData()

    return () => {
        isMounted.current = false

    }
},[url , JSON.stringify(options)])

const refetch = () => {
    fetchData()
}
return {data , loading , error , refetch}
}
export default useFetch

