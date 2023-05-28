import "./main.scss"

// import addcart
import { addCart} from "../../../redux/redux";

// import useSelector
import { useDispatch} from "react-redux"

// import fake data 
import  Books from "../../../assets/fakeDate/Books"

const Main = () => {

  const products = Books.filter( product => product.exceptional === true)
  
  // set useDispatch to dispatch
  const dispatch = useDispatch();

  return (
   <div className="Main">
     <div className="wrapper_slider">
              {
                products.map( product => (
                    <div className="content-books">
                        <div className="images">
                          <img src={product.image01} alt={product.title} />
                        </div>
                        <div className="text-dec">
                              <h3 className="author">{product.author}</h3>
                              <h1 className="title">{product.title}</h1>
                              <p className="dec">{product.desc}</p>
                              <button onClick={()=>dispatch(addCart({
                                id: product.id,
                                image01:product.image01,
                                price: product.price,
                                title: product.title,
                                author: product.author
                              }))}>iibso hadda</button>
                        </div> 
                    </div>
                ))
              }
            </div>
      </div>
  )
}

export default Main