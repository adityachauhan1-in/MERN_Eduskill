
function UserCard({user})  {
    const {name , email , age , isActive } = user;

    return (
        <div >
            <h1>{name}</h1> 
            <h1> Email : {email}</h1> 
            <h1> Age : {age}</h1> 

            
            {/* conditional rendering  */}
            {isActive  ? 
            <p> the user is active</p>  : 
            <p> You are not active </p>}
            </div>
    )
}
export default UserCard