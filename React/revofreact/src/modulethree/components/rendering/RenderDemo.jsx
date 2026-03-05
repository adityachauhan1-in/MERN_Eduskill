import UserList from "./Rendering"

// example usage in another component 
const Demo =() => {
 const sampleuserList = [
    {id : 1 , name : "Aditya" , hobby : "Runnig"},
    {id : 2 , name : "Killer" , hobby : "Runnig"},
    {id : 3 , name : "HatoBacho" , hobby : "Runnig"},
    {id : 4, name : "Happy" , hobby : "Scolarship"}
 ]

 return (
    <div> 
        <UserList  users={sampleuserList}/> 
    </div>
 )
}
export default Demo