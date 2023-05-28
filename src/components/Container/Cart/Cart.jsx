import "./Cart.scss"
// import products fake
import ProductsDT from "../../../assets/fakeDate/Books";
import { useParams, Link } from "react-router-dom"

//import fake data
import Book from "../../../assets/fakeDate/Books"

// import useSelector
import { useDispatch} from "react-redux";

// import increase & decrease &
import { addCart} from "../../../redux/redux";
import { useState } from "react";

// import arrw icon
import arrow from "../../../assets/images/arrowup.svg";
import {MdStar, MdStarOutline, MdComment} from "react-icons/md"

// import Commentaire
import Commentaire from "../commentaire/Commentaire";

const Cart = () => {
   
  // create a use params object
  const { id } = useParams();
  const product = ProductsDT.find( product => product.id === id);

  // books also like
  const products = Book.filter( itme => itme.bookLanguage === product.bookLanguage);

  // set useDispatch as dispatch
  const dispatch = useDispatch();

  const [reviews , setReviews] = useState(false);

  const setReviewsHandler = () =>{
    setReviews(!reviews);
  }


  const [comment, setComment] = useState(false);
  const comentHadler = ()=> {
    setComment(!comment)
  }



  return (
    <div className="cart">
       <div className="content_cart" key={product.id}>
         <div className="box_left">
             <img src={product.image01} alt="" />
         </div>
         <div className="box_right">
            <div className="wrapper">
                <h1 className="title">{product.title}</h1>
               <div className="dec_books">
                  <h2 className="dec_title">{product.bookLanguage}</h2>
                  <p className="dec_text">{product.desc}</p>
              </div>
               <p className="price"><span>{product.price}</span>/fd</p>
                <div className="button-product">
                  <button
                  onClick={ ()=> dispatch( addCart( {
                    id:product.id,
                    image01: product.image01,
                    title: product.title,
                    price: product.price,
                    author: product.author
                  }))}
                  >add to cart</button>
                </div>
            </div>
         </div>
       </div>

       {/* reviews components */}

       <div className="wrapper_reviews">
          <div className="arrow_title">
            <h1 className="title">reviews (2)</h1>
            <img src={arrow} alt="arrow" className={`arrow-icon ${reviews ? 'up' : 'down'}`}
              onClick={setReviewsHandler}
            />
          </div>
          {
            reviews && (
              <div>
                <div className="clients_reviews">
                  <div className="content_reviews">
                    <h2 className="name_client">john doe</h2>
                    <p  className="decs_client">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor exercitationem quibusdam, numquam natus placeat ullam laborum fugit.</p>
                    <div className="start_satisfaction">
                      <MdStar className='start select'/>
                      <MdStar className='start select'/>
                      <MdStar className='start select'/>
                      <MdStarOutline className='start'/>
                      <MdStarOutline className='start'/>
                   </div>
                  </div>
                  <div className="content_reviews">
                    <h2 className="name_client">john doe</h2>
                    <p  className="decs_client">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor exercitationem quibusdam, numquam natus placeat ullam laborum fugit.</p>
                   <div className="start_satisfaction">
                      <MdStar className='start select'/>
                      <MdStar className='start select'/>
                      <MdStarOutline className='start select'/>
                      <MdStarOutline className='start'/>
                      <MdStarOutline className='start'/>
                   </div>
                  </div>
                </div>
                <button className='commente' onClick={comentHadler}>
                   <MdComment /> commentaire
                </button>
              </div>
            )
          }
       </div>

       {/* you might also components */}
  
       <div className="simulary_products">
            <h1 className="title">you might like also</h1>
            <div className="books_container">
              {
                products.map( product => (
                  <div className="wrapper" key={product.id}>
                    <div className="image_content">
                      <img src={product.image01} alt="images" />
                    </div>
                    <div className="dec_wrapper">
                            <Link to={`/booksCustomer/${product.id}`} className="title">{product.title}</Link>
                            <h3 className="author">{product.author}</h3>
                            <p className='price'>price: <span>{product.price}</span>/fd</p>
                            <button 
                            onClick={()=>dispatch(addCart(
                              {
                                id : product.id,
                                image01 :product.image01,
                                price :product.price,
                                title :product.title,
                                author :product.author,
                              }
                            ))}
                            >iibso hadda</button>
                    </div>
                </div>

                ))
              }
          </div>
       </div>
       {
         comment && (
           <Commentaire setComment={setComment} comment={comment} />
           )
          }
    </div>
  )
}

export default Cart