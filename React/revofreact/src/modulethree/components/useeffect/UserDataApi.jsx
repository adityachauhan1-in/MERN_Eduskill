import React, {useState , useEffect}  from "react";

function UserData ({userId}){

    const [userdata , setUserData] = useState(null)
    const [loading , setLoading ] = useState(true)
    const [error , setError ] = useState(null)
 // for independent timer 
 const [counter , setCounter] = useState(0);
 // 1 >> fetch user 
 useEffect (() => {
 
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchUserData = async ()=> {
        if(!userId){
            setUserData(null)
            setLoading(false)
            setError("Please provide a userId")
            return 
        }

        setLoading(true);
        setError(null)
        console.log(`We are fetching data of user id ${userId} , Wait for a while`)

        // start fetching
        try {
            const response = await fetch (`https://jsonplaceholder.typicode.com/users/${userId}`, {signal})
            if(!response.ok){
            throw new Error("Failed to fetch from the public Api , make your own ")

        }
const data = await response.json();
setUserData(data)  
        } catch (error) {
           if(error.name === 'AbortError'){
            console.log("Fetch Aborted")
           }
           else {
            setError("Failed for now , try after few minutes")
            console.log("Failed to fetch data --> " , error)
           } 
        }
  finally {
    setLoading(false)
  }
  
}
fetchUserData();
// clean uP function 
return (() => {
    console.log("Clean up function for user id  : " , userId)
    controller.abort()
})
 } , [userId])
 

 // 2 >> Timer 
 useEffect(() => {

    const intervalId = setInterval(()=> {
        setCounter(prevCounter => prevCounter + 1)
    } , 1000) // after every one second , 

    // clean up function 
    return (() => {
        console.log("Clean up funtion for timer " )
        clearInterval(intervalId)
    })
 } , [userId])

 return ( 
    <>
    <h1>User Profile </h1>
    {loading && <h2>Loading User ...</h2>}
    {error  && <h1>{error}</h1>}
    {userdata && 
    <div>
    <h1>{userdata.name}</h1>
    <h1>{userdata.email}</h1>
    <h1>{userdata.username}</h1>
    </div>
}

{/* Timer Section */}

<h1>Live Timer or countdown </h1>
<h2> live timer is {counter}</h2>
    </>
 )


}
export default UserData