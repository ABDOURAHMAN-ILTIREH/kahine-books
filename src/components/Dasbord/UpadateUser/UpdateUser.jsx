import { MdUpdate } from "react-icons/md"
import "./Update.scss"

const UpdateUser = () => {
  return (
    <div className="UpadateUser">
     <div className="content_form">
     <h2>Update Details</h2>
            <form>
                <div className="input_row">
                    <div className="input_from">
                        <label htmlFor="name">first name</label>
                        <input type="text" placeholder='Enter Your First Name' />
                    </div>
                    <div className="input_from">
                        <label htmlFor="name">second name</label>
                        <input type="text" placeholder='Enter Your second Name' />
                    </div>
                    <div className="input_from">
                        <label htmlFor="name">user name</label>
                        <input type="text" placeholder='Enter Your User Email' />
                    </div>

                    <div className="input_from">
                        <label htmlFor="name">your email</label>
                        <input type="email" placeholder='Enter Your User Email' />
                    </div>
                    <div className="input_from">
                        <label htmlFor="name">phone number</label>
                        <input type="number" placeholder='Enter Your Number' />
                    </div>
                    <div className="input_from">
                        <label htmlFor="name">nationnality</label>
                        <input type="text" placeholder='Enter Your Nationnality' />
                    </div>
                    <div className="input_from">
                        <label htmlFor="name">gender</label>
                        <input type="text" placeholder='Enter Your Gender' />
                    </div>
                    <div className="input_from">
                        <label htmlFor="name">Day Of Brith</label>
                        <input type="text" placeholder='dd/mm/yyyy' />
                    </div>
                    <div className="input_from">
                        <label htmlFor="name">profile picture</label>
                        <input type="file"/>
                    </div>
                    <div className="input_from">
                        <label htmlFor="name">cover picture</label>
                        <input type="file"/>
                    </div>
              
                    <div className="input_from">
                        <label htmlFor="name">Facebook</label>
                        <input type="text" placeholder="www.FaceBook.com"/>
                    </div>
                    <div className="input_from">
                        <label htmlFor="name">Twitter</label>
                        <input type="text"  placeholder="www.Twitter.com"/>
                    </div>
                    <div className="input_from">
                        <label htmlFor="name">Instagram</label>
                        <input type="text" placeholder="www.Instagram.com"/>
                    </div>
                    <div className="input_from">
                        <label htmlFor="name">LinkedIn</label>
                        <input type="text" placeholder="www.LinkedIn.com"/>
                    </div>
  
                    <div className="input_from">
                        <label htmlFor="name">create password</label>
                        <input type="password" placeholder='Enter Your Password' />
                    </div>
                    <div className="input_from">
                        <label htmlFor="name">confirme password</label>
                        <input type="password" placeholder='Enter To Confirme Your Password' />
                    </div>
                </div>
                    <div className="input_from">
                        <button> <MdUpdate className="icons"/>submit the update</button>
                    </div>
            </form>
        </div>
    </div>
  )
}

export default UpdateUser