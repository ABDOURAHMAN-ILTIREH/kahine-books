import {MdMyLocation, MdSend } from 'react-icons/md'
import './ContactUs.css'
import {FaUser, FaEnvelope, FaPhone, FaBook, FaLocationArrow} from 'react-icons/fa'
// import image3 from "../../../assets/images/header/contact-img.svg"
const ContactUs = () => {
  return (
    <section className="contact">
         <div className="text-title-details">
          <h1 className='title'>contact us</h1>
          <p className='paragraph'>waxaan kugu soo dhaweeyneeynaa gacamo furaan, waan ku faraxasanhay in aan kaaga jawaabno wixii su'aal ah.</p>
         </div>
         <div className="box_content">
             <div className="box_left">
                <div className="content_icons">
                  <MdMyLocation/>
                  <div className="decscription">
                    <h1>dkngkh</h1>
                  </div>
                </div>
             </div>
             <form  className="box_right">
             <div className="input__form">
                    <div className="input__row">
                        <label><FaUser /></label>
                        <input type="text" placeholder='enter your name' />
                    </div>
                    <div className="input__row">
                    <label><FaEnvelope /></label>
                        <input type="text" placeholder='enter your email' />
                    </div>
              </div>
              <div className="input__form">
                        <div className="input__row">
                        <label><FaPhone/></label>
                        <input type="number" placeholder='enter your phone number' />
                        </div>
                        <div className="input__row">
                          <label><FaLocationArrow /></label>
                          <input type="text" placeholder='enter your address' />
                        </div>
                    </div>
                    <div className="textarea">
                    <label><FaBook /></label>
                        <textarea placeholder='write your message'></textarea>
              </div>
                    <button className="button"><MdSend className='buttion_icons'/><span>send message</span></button>
             </form>
         </div>
   </section>
  )
}

export default ContactUs