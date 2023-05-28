import {FaFacebook,FaInstagram,FaTwitter,FaWhatsapp} from "react-icons/fa"
import "./setting.scss"

import { Link } from "react-router-dom"
import image1 from "../../../image/BImages/OIP (1).jpg"
import {MdManageAccounts, MdUpdate} from 'react-icons/md'


const Setting = () => {
  return (
   <section className="setting">
      <div className="top_content">
        <h1>Settings Pages</h1>
        <p>Views your details and update if you need to .</p>
      </div>
      {/* <h2 className="admin_title">Admistrations Details</h2> */}
      <div className="main_content">
        <div className="banner_image">
          <img src={image1} alt="images" className="img_banner" />
        </div>
        <div className="admins_info">
          <div className="left_content">
              <div className="admins_img">
                <img src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg" alt="images2" className="img_admins" />
              </div>
              <div className="admins_dec">
                <p className="name">chairman thain</p>
                <span className="maneger"><MdManageAccounts /> Adminstrator </span>
                <p className="contact">charmaine@outlook.com</p>
                <div className="social_Media">
                    <span> <FaFacebook className="icons" /></span>
                    <span> <FaTwitter  className="icons"/></span>
                    <span> <FaInstagram  className="icons"/></span>
                    <span> <FaWhatsapp  className="icons"/></span>
                </div>
              </div>
            </div>
            <div className="admins_wrapper">
               <div className="container">
                <div className="col">
                   <div className="row">
                      <h3>First Name</h3>
                      <p>Chairmain</p>
                   </div>
                   <div className="row">
                      <h3>last Name</h3>
                      <p>thain</p>
                   </div>
                   <div className="row">
                      <h3>Brith Day</h3>
                      <p>dd/mm/yyyy</p>
                   </div>
                   <div className="row">
                      <h3>Gender</h3>
                      <p>Male</p>
                   </div>
                   <div className="row">
                      <h3>phone number</h3>
                      <p>+253 77 12 12 30</p>
                   </div>
                   <div className="row">
                      <h3>Nationnalite</h3>
                      <p>Djiboutien</p>
                   </div>
                   <button><Link to='updateUser'><MdUpdate/> Update</Link></button>
                </div>
               </div>
            </div>
        </div>
      </div>
   </section>
  )
}

export default Setting