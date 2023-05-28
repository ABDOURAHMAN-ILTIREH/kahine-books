import Users from "../../../assets/fakeDate/Users"
import { useParams } from "react-router-dom"
import { MdDelete } from "react-icons/md"
import "./UsersView.scss"


const ViewBook = () => {
    const {id} = useParams()
    const product = Users.find( product => product.id === id)
    console.log(product)
   
  return (
    <div className='Views_User'>
        <div className="top_content">
           <h1>user details</h1>
           <div className="buttons">
            <button><MdDelete className="icons"/><span>delete</span></button>
           </div>
         </div>
         <div className="content_form">
             <div className="image_file">
                <img src={product.image} alt={product.name} />
             </div>
             <div className="form">
                <div className="input_row">
                    <div className="input_from">
                       <span className="titleLabel">name</span>
                        <h1 className="title">{product.name}</h1>
                    </div>
                    <div className="input_from">
                        <span className="titleLabel">lastName</span>
                        <p>{product.lastName}</p>
                    </div>
                    <div className="input_from">
                        <span className="titleLabel">email</span>
                        <p>{product.email}</p>
                    </div>
                     <div className="input_from">
                        <span className="titleLabel">phone</span>
                        <p>{product.phone}</p>
                    </div>
                    
                    <div className="input_from">
                        <span className="titleLabel">address</span>
                        <p>{product.address}</p>
                    </div>
                    <div className="input_from">
                        <span className="titleLabel">Many books he bougth </span>
                        <p>{product.broughtBooks}</p>
                    </div>
                    <div className="input_from">
                        <span className="titleLabel">last reviews of the book he bougth</span>
                       <p className="text_dec">{product.reviews}</p>
                    </div>
                </div>
         </div>
        </div>
    </div>
  )
}

export default ViewBook