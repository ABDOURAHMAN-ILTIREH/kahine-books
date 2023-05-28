import MainMessage from "./MainMessage"
import "./message.scss"

const Message = () => {
  return (
    <section className='message'>
        <div className="top_content">
        <h1>Message Center</h1>
        <p>welcome to the message center !</p>
      </div>
      <div className="main_message">
        <MainMessage />
        <MainMessage />
        <MainMessage />
        <MainMessage />
        <MainMessage />
        <MainMessage />
        <MainMessage />
      </div>
    </section>
  )
}

export default Message