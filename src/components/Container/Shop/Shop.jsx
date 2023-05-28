import {FaArrowCircleLeft} from 'react-icons/fa'
import './Shop.scss'
import { Link } from 'react-router-dom'
import { MdClose } from 'react-icons/md'
// import motion framer
import { motion, AnimatePresence } from 'framer-motion'
// import useSelectors
import {  useSelector, useDispatch } from "react-redux";

// import  increase & decrease
import { increase, decrease, deleteProducts } from "../../../redux/redux"


export const Shop = ({Visibility, setCartVisibility}) => {

  const { products, total, amount } = useSelector( state => state.cart)
  const dispatch = useDispatch();


  const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }
  
  const modal = {
    hidden: { y: "100vh", opacity: 0 },
    visible: { 
      y: "0px", 
      opacity: 1,
      transition: { delay: 0.5 }
    },
  }

  return (
    <AnimatePresence>
    <motion.section className="shop"
    variants={backdrop}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
       <motion.div className="content_products"
       variants={modal}
       >
        <div className="content_top">
            <FaArrowCircleLeft className='icons' onClick={()=> setCartVisibility(!Visibility)}/>
            <h1 className="title">Your Cart</h1>
            <p className="dec">({amount} Books)</p>
        </div>
        <div className="products">
          {
              products.map((product) =>(
                <div className="cart_product" key={product.id}>
                  <div className="images">
                    <img src={product.image01} alt={product.title} />
                  </div>
                  <div className="content_dec">
                    <div className="top_dec">
                      <h1 className='title'>{product.title}</h1>
                      <p className="price"><span>{product.price}</span>/fd</p>
                    </div>
                    <div className="bottom_dec">
                        <div className="select_qty">
                              <span className="munis"
                              onClick={()=>{
                                let amount = product.amount
                                if(amount === 1){
                                     dispatch(deleteProducts(product.id));
                                     return
                                } 
                                dispatch(decrease({id:product.id}))
                              }}

                              >-</span>
                              <span>{product.amount}</span>
                              <span className="plus"
                                onClick={()=>dispatch(increase({id: product.id}))}
                              >+</span>
                        </div>
                        <MdClose className="icons"  onClick={()=>dispatch(deleteProducts(product.id))}/>
                    </div>
                  </div>
                </div>

              ))
          }
        </div>
          <div className="content_subtotals">
            <div className="dec_subtotals">
              <h1 className='title_subtotals'>Subtotals :</h1>
              <p className="price_subtotals"><span>{total}</span>/fd</p>
            </div>
            <Link to='checkout' onClick={()=> setCartVisibility(!Visibility)}><button> checkout </button></Link>
          </div>
       </motion.div>
    </motion.section>  
    </AnimatePresence>
  )
}
