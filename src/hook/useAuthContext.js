import { UserContext } from "../context/userContext";
import { useContext } from "react";

export const useAuthContext = () => {
    const context = useContext(UserContext)

    if(!context){
        throw Error ("useAuthContext must be used inside AuthContextProvider")
    }
    return context
    
}