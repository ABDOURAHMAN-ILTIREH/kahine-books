import React from 'react'
import "./Profile.css"
import { Link } from 'react-router-dom'
import user1 from "../../../assets/Users/teacher-1.png"

const Profile = () => {
  return (
    <main className='profile-main'>
       <div className="main-account-details">
          <p className='alert-msg'>Need to updates your profile? go to <Link to="/setting">Setting</Link></p>
          <hr />
          <div className="box-user-account">
            <div className="user-images">
                <img src={user1} alt="user-images" />
            </div>
            <div className="user-info-content">
                <div className="single-user">
                    <h3>Full Name:</h3>
                    <p className="user-info">Abdorahman said iltireh</p>
                </div>
                <div className="single-user">
                    <h3>Email:</h3>
                    <p className="user-info">arfanabdourahman@gmail.com</p>
                </div>
                <div className="single-user">
                    <h3>Phone Number:</h3>
                    <p className="user-info">not Mentionned</p>
                </div>
                <div className="single-user">
                    <h3>Adress:</h3>
                    <p className="user-info">not Mentionned</p>
                </div>
            </div>
          </div>
       </div>
    </main>
  )
}

export default Profile