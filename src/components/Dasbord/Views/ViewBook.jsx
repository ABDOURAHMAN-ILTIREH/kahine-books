import Books from "../../../assets/fakeDate/Books"
import { useParams } from "react-router-dom"
import { MdDelete } from "react-icons/md"
import "./views.scss"


const ViewBook = () => {
    const {id} = useParams()
    const product = Books.find( product => product.id === id)
    console.log(product)
   
  return (
    <div className='Views_book'>
        <div className="top_content">
           <h1>book details</h1>
           <div className="buttons">
            <button><MdDelete className="icons"/><span>delete</span></button>
           </div>
         </div>
         <div className="content_form">
             <div className="image_file">
                <img src={product.image01} alt={product.title} />
             </div>
             <div className="form">
                <div className="input_row">
                    <div className="input_from">
                       <span className="titleLabel">title of the books</span>
                        <h1 className="title">{product.title}</h1>
                    </div>
                    <div className="input_from">
                        <span className="titleLabel">author</span>
                        <p>{product.author}</p>
                    </div>
                    <div className="input_from">
                        <span className="titleLabel">book language</span>
                        <p>{product.bookLanguage}</p>
                    </div>
                     <div className="input_from">
                        <span className="titleLabel">book categories</span>
                        <p>{product.category}</p>
                    </div>
                    
                    <div className="input_from">
                        <span className="titleLabel">price of book</span>
                        <p><span className="price">{product.price}</span>/fd</p>
                    </div>
                    <div className="input_from">
                        <span className="titleLabel">Many books in the stock</span>
                        <p>{product.inStore}</p>
                    </div>
                    <div className="input_from">
                        <span className="titleLabel">decription of this books</span>
                       <p className="text_dec">{product.desc}</p>
                    </div>
                </div>
         </div>
        </div>
    </div>
  )
}

export default ViewBook