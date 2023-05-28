import "./header.scss"
import { useEffect,useRef, useContext, useState} from "react"
import { Link, NavLink } from "react-router-dom"
import image from "../../../image/Image.jpg"
import {MdClose,MdDarkMode,MdLightMode,MdLogout,MdMenu, MdPerson, MdSettings, MdShoppingCart} from "react-icons/md";

// import images
import image1 from "../../../assets/Users/teacher-1.png";

// import useSelector Hook
import { useSelector} from 'react-redux';

// import darkmodeContext
import { DarkModeContext } from "../../../context/Light&Dark"

import { useAuthContext } from "../../../hook/useAuthContext";

// import {}
const Header = ({Visibility, setCartVisibility}) => {

   const { user} = useAuthContext();

   // navLink
   const Nav_Link = [
      {
        display:"Home",
        path:"/home",
      },
      {
        display:"Books",
        path:"/booksCustomer",
       
      },
      // {
      //   display:"AboutUs",
      //   path:"/aboutUs",
        
      // },
      {
        display:"Contact",
        path:"/contactUs",
       
      },   
    ]

  
    // account state
    const [showAccount, setShowAccount] = useState(false);

    const HandlerClick = () =>{
      setShowAccount(!setShowAccount);
    }


   const scrollRef = useRef()
   const Navbar = useRef(null);
   
   // import amount
   const { amount} = useSelector(state => state.cart);

   // set useContext
   const { darkMode, dispatch} = useContext(DarkModeContext)


  
   const ToggleAdd = ()=> Navbar.current.classList.add('toggle__nav__add');
   const ToggleRemove = ()=> Navbar.current.classList.remove('toggle__nav__add');

  
   
 
   useEffect( ()=>{
     window.addEventListener( "scroll", ()=>{
       if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
         scrollRef.current.classList.add("scrool_ref");
       }else{
         scrollRef.current.classList.remove("scrool_ref");
       }
     })
   },[])
  return (
   <header ref={scrollRef}>

      <div className="header">

        {/*logo designe */}

         <div className="logo">
            <img src={image} alt="images" />
            <h2>kahine books</h2>
         </div>


        <div className="header_content">
            {/* navbar buttons */}
            <div className="navbar" ref={Navbar}>
               <div className="wrapper">
                  <nav>
                        <ul>
                        {
                              Nav_Link.map( (nav, index) =>(
                                 <li>
                                    <NavLink  key={index} to={nav.path}
                                    className={(navclass)=>
                                       navclass.isActive ? "active" : ""
                                    }
                                    onClick={ToggleRemove}
                                    >
                                    {nav.display}  
                                    </NavLink>
                                 </li>
                              
                              ))
                           }
                           <li>
                                 <MdShoppingCart className="icons" onClick={ ()=> setCartVisibility(!Visibility)}/>
                                 <span className="badgets">{amount}</span>
                           </li>
                        </ul>
                     <div className="closer">
                        <MdClose className="close_icons" onClick={ToggleRemove}/>
                     </div>
                  </nav> 
               </div>
            </div>
             {/* toggle light buttons */}
             <div className="toggle_DarkLight">
               {
                  darkMode ? 
                  <MdLightMode className="toggle_light" onClick={()=> dispatch({type:"toggle"})}/> :
                  <MdDarkMode className="toggle_light" onClick={()=> dispatch({type:"toggle"})}/> 
               }
            </div>
            {/* sign in logout buttons */}

            <div className="content-user-info">
               {
                  user && (
                  <article>
                     <picture onClick={() => setShowAccount(!showAccount)}>
                       <img src={image1} alt="images"/>
                     </picture>
                     {
                        showAccount ? 
                           <div className="wrapper-box-profile">
                              <div className="box-content-info">
                              <MdClose className="icon_close" onClick={HandlerClick}/>
                                 <ul>
                                    <li>
                                       <MdPerson className="icons"/>
                                       <Link to='/profile' onClick={HandlerClick }>Profile</Link>
                                    </li>
                                    <li>
                                       <MdSettings />
                                       <Link to='/setting' onClick={HandlerClick }>Settings</Link>   
                                    </li>
                                    <hr />
                                    <li>
                                       <MdLogout />
                                       <Link onClick={()=>{dispatch({type:"logout",payload: user})}}> Logout</Link>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        : ""
                     }
                  </article>
                  )
               }
               {
                  !user && (
                    <div className="user-button">
                       <Link to="signIn" className="signIn">Login</Link>
                       <Link to="signUp" className="signUp">Sign up</Link>
                    </div>
                  )
               }
            </div>
            <div className="menu">
               <MdMenu className="menu_icons"  onClick={ToggleAdd}/>
            </div>
        </div>
      </div>
   </header>
  )
}

export default Header