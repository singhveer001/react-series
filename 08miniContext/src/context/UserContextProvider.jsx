import React from "react";
import UserContext from "./userContext";
import { children } from "react";


const UserContextProvider = ({children}) => {

    const [user,setUser] = React.useState(null)

    return(
        <UserContext.Provider value ={{user,setUser}}>
            {children}   {/* user Component  -- comment nhi ho rha tha isliye curly braces me dala hu */} 
        </UserContext.Provider>
    )
    
}

export default UserContextProvider