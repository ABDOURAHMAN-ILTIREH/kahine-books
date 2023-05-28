import "./footer.scss"
import image from "../../../image/Image.jpg"
import {FaFacebook,FaInstagram,FaTwitter,FaWhatsapp} from "react-icons/fa"

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="title">
          <div className="logo">
            <img src={image} alt="images" />
            <h2>kahine books</h2>
          </div>
          <p>we work to ensure digital accessiblity for individuals.</p>
         </div>
        <div className="support">
            <h1>quick links</h1>
            <ul>
              <li>home</li>
              <li>books</li>
              <li>cart shop</li>
              <li>Features</li>
              <li>contact</li>
            </ul>
        </div>
  
        <div className="service">
          <h1>Services</h1>
              <ul>
                <li>free delivery</li>
                <li>Q&A</li>
              </ul>
        </div>
        <div>
          <h1>about</h1>
              <ul>
                <li>Abouts Us</li>
                <li>History</li>
                <li>Contact</li>
              </ul>
        </div>

        <div className="social_Media">
          <h1>Address</h1>
          <p>Balbalah,Sheik Moussa,Djibouti</p>
          <div className="social_Media">
            <span> <FaFacebook className="icons" /></span>
            <span> <FaTwitter  className="icons"/></span>
            <span> <FaInstagram  className="icons"/></span>
            <span> <FaWhatsapp  className="icons"/></span>
          </div>
        </div>
      </div>
        <hr />
        <div className="bottom_footer">
           <p>All right reserved - Kahin Books 2023</p>
           <p>Services Parteners Feetbacks Bookings</p>
        </div>
    </footer>
  )
}

export default Footer