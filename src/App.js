import { useEffect, useContext } from 'react';
import './index.css';
import "./scss/scss_content_features.scss"
import Layout from './layout/Layout';
import DashLayout from './layout/DashLayout';

// import dark style page
import "./scss/dark.scss"

// import calca
import  {calculateProducts} from "./redux/redux"
import {useSelector, useDispatch} from "react-redux"

// import darkmodeContext
import { DarkModeContext } from "./context/Light&Dark"

function App() {
 // set lightOrdark Mode
 const { darkMode} = useContext(DarkModeContext);

 //import products from state cart
 const {products} = useSelector( (state)=> state.cart);



 const dispatch = useDispatch()

   useEffect(()=>{
     dispatch(calculateProducts())
   },[products])
  
  return (
    <div className={darkMode ? "app dark" : "app"}>
       <Layout />
        {/* <DashLayout /> */}
    </div>
  );
}

export default App;
