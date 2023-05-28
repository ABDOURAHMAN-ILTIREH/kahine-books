import React from 'react'
import image01 from "../../../assets/Users/teacher-1.png"
import { MdDelete, MdLibraryBooks, MdMessage } from "react-icons/md"
import { Link } from 'react-router-dom'
const MainMessage = () => {
  return (
      <div className="message_category">
        <picture className="picture">
          <img src={image01} alt="images" />
        </picture>
        <div className="message_box">
          <div className="title">
            <MdMessage className="icons" />
            <p className="last_mss">From: <span>Ali</span></p>
          </div>
          <div className="wrapper_ms">
             <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="button_directory">
            <Link to='inboxMessage'><MdLibraryBooks/> Details</Link>
            <button><MdDelete/> Delete</button>
          </div>
        </div>
      </div>
  )
}

export default MainMessage