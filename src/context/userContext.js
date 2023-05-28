import { createContext, useReducer, useEffect} from "react";


const userAuthReducer = (state, action) => {
    switch (action.type) {
        
        case "login":
            return {
                user : action.payload
            }
        case "logout":
            return{
               user : null
            };
        default:
            return state
    }
}


export const UserContext = createContext();

export const UserContextProvider  = ({children}) => {

    const [state, dispatch] = useReducer(userAuthReducer ,{
        user: null
    });

    useEffect (()=>{
        const user = JSON.parse(localStorage.getItem('user'));

        if(user) {
            dispatch({type: "login", payload: user});
        }
    },[])

    console.log('authcontext state', state);

    return (
    <UserContext.Provider value={{...state, dispatch}}>
        {children}
    </UserContext.Provider>
    )
}