import { Link } from "react-router-dom"

import { useDispatch } from "react-redux"
import { addCart} from "../../../redux/redux";

const TableCustomer = ({title,image01,price,author,id}) => {
 
  // set useDispatch as dispatch
  const dispatch = useDispatch();

  return (
    <>
    <div className="wrapper">
            <div className="image_content">
              <img src={image01} alt="images" />
            </div>
            <div className="dec_wrapper">
                    <Link to={`/booksCustomer/${id}`} className="title">{title}</Link>
                    <h3 className="author">{author}</h3>
                    <p className='price'>price: <span>{price}</span>/fd</p>
                    <button 
                    onClick={()=>dispatch(addCart(
                      {
                        id,
                        image01,
                        price,
                        title,
                        author
                      }
                    ))}
                    >iibso hadda</button>
             </div>
           </div>
    </>
  )
}

export default TableCustomer