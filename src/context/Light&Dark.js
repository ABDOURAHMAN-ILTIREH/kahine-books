import { createContext, useReducer} from "react";
// import useDarkReducer from "./useDarkReducer";


const initial_state = {
    darkMode : false,
}

const useDarkReducer = (state, action) => {
    switch (action.type) {
        
        // case "light":
        //     return {
        //         darkMode : false,
        //     }

        // case "dark":
        //     return{
        //         darkMode: true,
        //     }

        case "toggle":
            return {
            darkMode : !state.darkMode
        }

        default:
            return state
    }
}

// export default useDarkReducer;


export const DarkModeContext = createContext(initial_state);

export const DarkModeContextProvider  = ({children}) => {

    const [state, dispatch] = useReducer(useDarkReducer,initial_state);

    return (
    <DarkModeContext.Provider value={{darkMode : state.darkMode, dispatch}}>
        {children}
    </DarkModeContext.Provider>
    )
}