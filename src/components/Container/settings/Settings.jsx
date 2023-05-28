import React,{useState} from 'react'
import "./setting.css"
import { MdAddAPhoto,MdSaveAlt} from 'react-icons/md'
import { Link } from 'react-router-dom'
const Settings = () => {
  const [file,setFile] = useState(null)
  return (
    <section>
      <main className='sitting-main'>
       <div className="main-account-details">
          <p className='alert-msg'>Need to see your profile? go to <Link to="/profile">profile</Link></p>
          <hr />
          <div className="box-user-account">
            <div className="user-images">
            <img src= {file ? URL.createObjectURL(file) :"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"} alt="images" />
            <div className="image_choise">
                    <label className="file" htmlFor="file">
                       <MdAddAPhoto className='icons'/>
                    </label>
                    <input type="file" id="file" style={{display:'none'}}
                    onChange={(e)=>setFile(e.target.files[0])}
                    />
                </div>
            </div>
            <form className="user-info-content">
                <div className="single-user">
                    <label>Full Name:</label>
                    <input type="text" className="user-info" placeholder='Enter Your Name' />
                </div>
                <div className="single-user">
                    <label>Email:</label>
                    <input type='email' className="user-info"placeholder='Enter Your Email' />
                </div>
                <div className="single-user">
                    <label>password:</label>
                    <input type='password' className="user-info" placeholder='Enter Your New Password'/>
                </div>
                <div className="single-user">
                    <label>confirme password:</label>
                    <input type='password' className="user-info" placeholder='Enter Your New Password to Confirm'/>
                </div>
                <div className="single-user">
                    <label>Phone Number:</label>
                    <input type='number' className="user-info" placeholder='Enter Your Number'/>
                </div>
                <div className="single-user">
                    <label>Adress:</label>
                    <input type='text' className="user-info" placeholder='Enter Your Adress'/>
                </div>
                <button><MdSaveAlt className='icons'/> Save update</button>
            </form>
          </div>
       </div>
    </main>
    </section>
  )
}

export default Settings