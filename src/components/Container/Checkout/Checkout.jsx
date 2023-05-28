import "./Checkout.scss"

import { Order } from "../Order/Order"
import { useState } from "react"

// import useSelector 
import {  useSelector } from "react-redux";

const Checkout = () => {

  const { products, total } = useSelector(state => state.cart);

  const [orderOpen, setOrderOpen] = useState(false);

  return (
    <div className='checkout'>
      <div className="checkout_content">
      <div className="box_right_checkout">
          <h1 className="title_right">order summary</h1>
          <div className="content_product">
           {
            products.map( product =>(
              <div className="product_itmes" key={product.id}>
                <div className="product">
                  <img src={product.image01} alt={product.title} />
                  <h1 className="title_product">{product.title}</h1>
                </div>
                <p className="price">{product.price}<span className="multi">x{product.amount}</span></p>
              </div>
            ))
           }
          <div className="totals">
              <h1 className="title_totals">totals:</h1>
              <p className="price"><span>{total}</span>/fd</p>
            </div>
          </div>
        </div>
        <div className="box_left_checkout">
          <h1 className="title_checkout">billing details</h1>
          <div className="content_input">

            <div className="input_form">
              <label htmlFor="">magaca <span>*</span></label>
              <input type="text" placeholder="Fadlan Qor Magacaaga oo Dhamaystiran" />
            </div>

            <div className="input_form">
              <label htmlFor="">dalka<span>*</span></label>
              <p>Djibouti</p>
            </div>

            <div className="input_form">
              <label htmlFor="">xafada<span>*</span></label>
              <input type="text" placeholder="Fadlan halkan gali xaafada aad degan tahay" />
            </div>

            <div className="input_form">
              <label htmlFor="">Halka Dalabkaaga Laguugu Keenayo<span>*</span></label>
              <input type="text" placeholder="Fadlan Halka Dalabkaaga Laguugu Keenayo" />
            </div>

            <div className="input_form">
              <label htmlFor="">mobile number<span>*</span></label>
              <input type="number" placeholder="Fadlan Halka Dalabkaaga Laguugu Keenayo" />
            </div>
            <button className="place_order" onClick={()=> setOrderOpen( !orderOpen)}>place order </button>
          </div>
        </div>
      </div>
        {
         orderOpen && (
           <Order  orderOpen={orderOpen} setOrderOpen={setOrderOpen}/>
         ) 
        }
    </div>
  )
}

export default Checkout