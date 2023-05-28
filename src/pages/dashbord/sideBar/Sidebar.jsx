import './sidebar.scss'
import {MdDashboard,MdNotes,MdPerson,MdReviews,MdMessage,MdUpdate,MdLogout,MdSettings} from 'react-icons/md'
import {FaBook, FaUser} from "react-icons/fa"
import {Link,NavLink} from 'react-router-dom'
import image from "../../../image/Image.jpg"


const Sidebar = () => {
  const Nav_Link = [
    {
      display:"Dashbord",
      path:"/",
      icons: MdDashboard
    },
    {
      display:"Books",
      path:"/Books",
      icons: FaBook 
    },
    {
      display:"Reviews",
      path:"/Reviews",
      icons: MdReviews
    },
    {
      display:"Message",
      path:"/Message",
      icons: MdMessage
    },
    {
      display:"users",
      path:"/ClientUser",
      icons: FaUser
    },
    {
      display:"Satting",
      path:"users",
      icons: MdSettings
    },
    {
      display:"Logout",
      path:"/Logout",
      icons: MdLogout
    },
  
  ]
  
  return (
    <div className='Sidebar'>
      <div className="Menu">
      </div>
      <div className="top">
        <div className="logo">
           <img src={image} alt="images" /> 
           <h1>kahine books</h1>
        </div>
      </div>
      <div className="center">
        <ul>
        <ul>
               {
                Nav_Link.map( (nav, index) =>(
                  <li>
                    <NavLink  key={index} to={nav.path}
                    className={(navclass)=>
                      navclass.isActive ? "active" : ""
                    }
                    >
                    {<nav.icons className='icons'/>}
                    {nav.display}  
                    </NavLink>
                  </li>
                ))
               }
               </ul>
        </ul>
      </div>
    </div>
  )
}


export default Sidebar