import "./widgest.scss"
import {MdKeyboardArrowUp, MdOutlinePerson,
     MdOutlineAddShoppingCart, MdOutlineMonetizationOn ,MdOutlineAccountBalance, MdBook} from 'react-icons/md'
import Books from "../../../assets/fakeDate/Books"
import User from "../../../assets/fakeDate/Users"

import { Link } from "react-router-dom"

const Widgest = ({ type}) => {

    let data;
    const user = User.length
    const books = Books.length
   
    switch(type){
        case "user": 
          data = {
            title: "USERS",
            isMoney  : false,
            Links : "see all users",
            link: 'ClientUser',
            amount: user,
            icon : (
                <MdOutlinePerson className="icon"
                style={{color:"crimson", backgroundColor:"rgba(255,0,0,0.2)"}}
                 />
            )
          };
          break;
          case "books": 
          data = {
            title: "BOOKS",
            isMoney  : false,
            Links : "view Books",
            link: "books",
            amount: books, 
            icon : (
                <MdBook className="icon" 
                style={{color:"green", backgroundColor:"rgba(0,128,0,0.2)"}}/>
            )
          };
          break;
        case "order": 
          data = {
            title: "ORDERS",
            isMoney  : false,
            // link: ClientUser,
            Links : "see all orders",
            icon : (
                < MdOutlineAddShoppingCart className="icon"
                style={{color:"goldrenrod", backgroundColor:"rgba(218,165,32,0.2)"}}
                />
            )
          };
          break;
         
        case "balance": 
          data = {
            title: "BALANCE",
            isMoney  : true,
            Links : "see details ",
            // link: ClientUser,
            icon : (
                <MdOutlineAccountBalance className="icon"
                style={{color:"purple", backgroundColor:"rgba(128,0,128 ,0.2)"}}
                 />
            )
          };
          break;

        default:
            break;
    }
 // temporarily
//  const amount = 100;

 const diff = 0;

  return (
    <div className="widget">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "$"} {data.amount} </span>
            <Link to={data.link} className="Links">{data.Links}</Link>
        </div>
        <div className="right">
            <div className="percentage positive">
                <MdKeyboardArrowUp />
                {diff}%
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widgest