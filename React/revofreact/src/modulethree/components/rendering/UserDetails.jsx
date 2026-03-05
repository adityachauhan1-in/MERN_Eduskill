// import React from "react"
import UserCard from "./UserCard"
function UserDetails() {
   const user1 = {
    name : "Aditya Chauhan", 
    email : "aditya@gmail.com", 
    age : 23 , 
    isActive :  true
   }

      const user2 = {
    name : "Dilip Chauhan", 
    email : "dilipa@gmail.com", 
    age : 83 , 
    isActive :  false
   }
 return  (
    <> 
    <h1> User Profile</h1>
   <UserCard  user= {user1}/>
   <UserCard user = {user2} /> 
   </>
 )
}
export default UserDetails