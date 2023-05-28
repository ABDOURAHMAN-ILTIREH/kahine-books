import { MdCreate, MdOutlineDriveFolderUpload } from "react-icons/md"
import "./new.scss"
import { useState } from "react"

const New = () => {

    const  [file, setFile] = useState(null)
  return (
    <div className='new_properties'>
        <div className="top_content">
           <h1>add new books</h1>
           <p>Creating a amizing properties</p>
         </div>
         <div className="content_form">
        <h2>completly fill the form below</h2>
            <form>
                <div className="main_picture">
                    <label htmlFor="name">book picture <span>(Main)</span></label>
                    <div className="image_file">
                       <img src= {file ? URL.createObjectURL(file) :"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"} alt="images" />
                    </div>
                <div className="image_choise">
                    <label className="file" htmlFor="file">
                       <MdOutlineDriveFolderUpload/>
                    </label>
                    <input type="file" id="file" style={{display:'none'}}
                    onChange={(e)=>setFile(e.target.files[0])}
                    />
                </div>
                </div>
                <div className="input_row">
                    <div className="input_from">
                        <label htmlFor="name">book name</label>
                        <input type="text" placeholder='Enter The Book Name' />
                    </div>
                    <div className="input_from">
                        <label htmlFor="name">author</label>
                        <input type="text" placeholder='Enter The Author Name' />
                    </div>
                    <div className="input_from">
                        <label>book language</label>
                        <select name="somalie" id="select">
                            <option value="somalie">somalie</option>
                            <option value="arabe">Arabe</option>
                            <option value="france">France</option>
                            <option value="anglish">Anglish</option>
                        </select>
                    </div>
                     <div className="input_from">
                        <label>book categories</label>
                        <select name="" id="select">
                            <option value="arabe">Romain</option>
                            <option value="france">Science</option>
                            <option value="anglish">Histoire</option>
                            <option value="anglish">Developement Personne</option>
                            <option value="anglish">Comunication</option>
                            <option value="anglish">islamic book</option>
                            <option value="anglish">Academic Books</option>
                            <option value="anglish">Athers</option>
                        </select>
                    </div>
                    
                    <div className="input_from">
                        <label htmlFor="name">price of book</label>
                        <input type="number" placeholder='Enter The Price Of Book' />
                    </div>
                    <div className="input_from">
                        <label htmlFor="name">Many books in the stock</label>
                        <input type="number" placeholder='Enter The Book In The Stock' />
                    </div>
                    <div className="input_from">
                        <label htmlFor="name">decription of this books</label>
                        <textarea cols="30" rows="10" placeholder="Write a litle over views of this book"></textarea>
                    </div>
                    <div className="input_from">
                        <button><MdCreate className="icons"/> Create a new books</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default New