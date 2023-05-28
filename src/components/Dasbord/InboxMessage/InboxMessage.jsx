import {MdMessage, MdSend } from "react-icons/md"
import "./InboxMessage.scss"
import BoxMessage from "./BoxMessage"


const InboxMessage = () => {
  return (
    <section className='inboxMessage'>
      <div className="top_content">
        <h1>Inbox Chat</h1>
        <MdMessage className="icons"/>
      </div>
      <div className="inbox_message">
        <div className="wrapper_box">
          <BoxMessage />
          <BoxMessage own />
          <BoxMessage />
          <BoxMessage own />
          <BoxMessage />
          <BoxMessage own />
          <BoxMessage />
          <BoxMessage own />
          <BoxMessage />
          <BoxMessage own />
          <BoxMessage />
          <BoxMessage own />
          <BoxMessage own />
        </div>
        <div className="input_message">
           <div className="input_row">
            <textarea placeholder="Message" />
           </div>
           <button className="send-btn">
            <MdSend/> send
           </button>
        </div>
      </div>
    </section>
  )
}

export default InboxMessage