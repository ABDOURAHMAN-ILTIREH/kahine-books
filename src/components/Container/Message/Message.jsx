import React, {useState} from 'react'
import "./Message.scss"

import image01 from  "../../../assets/Users/teacher-1.png"

// import close icons
import {MdClose, MdMessage, MdSend } from "react-icons/md"


// import motion framer
import {motion, AnimatePresence} from "framer-motion"

import {Link } from "react-router-dom"
// import box message components
import BoxMessage from './BoxMessage';


const Message = ({setMessage, message}) => {

  const [own, setOwn] = useState("");
 
    const backdrop = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }
      
      const modal = {
        hidden: { y: "100vh", opacity: 0 },
        visible: { 
          y: "0px", 
          opacity: 1,
          transition: { delay: 0.5 }
        },
      }

  return (
    <AnimatePresence>
    <motion.div className='Message_content'
    variants={backdrop}
    initial="hidden"
    animate="visible"
    exit="hidden"
    >
        <motion.div className="wrapper_container"
           variants={modal}
        >
            <MdClose className='icon' onClick={()=> setMessage(!message)}/>
            {/* <div className="wrapper_content">
              <div>
                <div className="icon_box">
                  <MdMessage className='icons'/>
                  <h1 className="title">message box</h1>
                </div>
                <p className="decs">before you open the chat box please register your account!</p>
                <div className="button_register">
                  <Link to="/signIn">Login</Link>
                  <Link to="/signUp">Sign up</Link>
                </div>

              </div>
            </div> */}
            <div className="container">
              <div className="box_top">
                  <div className="images">
                    <img src={image01} alt="" />
                  </div>
                  <div>
                    <h1 className='title'>abdourahman</h1>
                    <p className="static">online</p>
                  </div>
              </div>
                 <hr />
              <div className="box_center">
                <BoxMessage />
                <BoxMessage own={own}/>
                <BoxMessage />
                <BoxMessage />
                <BoxMessage />
                <BoxMessage />
                <BoxMessage />
                <BoxMessage />
                <BoxMessage />
                <BoxMessage />
                <BoxMessage />
                <BoxMessage />
                <BoxMessage />
                <BoxMessage />
                <BoxMessage />
              </div>
              <hr />
              <div className="box_bottom">
                <div className="input_message">
                  <textarea cols="30" rows="10" placeholder='message'></textarea>
                  <button className="button">
                    <MdSend  className='icons'/>
                  </button>
                </div>
              </div>
            </div>
        </motion.div>
    </motion.div>
    </AnimatePresence>
  )
}

export default Message