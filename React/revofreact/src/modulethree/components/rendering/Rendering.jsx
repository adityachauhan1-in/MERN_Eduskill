import React from "react";

function  UserList({users}){
    return (
        <div>
            <h1>UserList</h1>
         {users.map((user) => {
            return (
                <p  key =  {user.id}>
                    {user.name} - {user.hobby} </p>
            )
            })} 
      
        </div>
    )
}


export default UserList