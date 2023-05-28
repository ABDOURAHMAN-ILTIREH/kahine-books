import React from 'react'
import "./home.scss"

// import icons
import {MdLibraryBooks,  MdOutlineArrowForwardIos } from 'react-icons/md'


// import components
import Widgest from '../../../pages/dashbord/widgest/Widgest'
import Dash from '../../dashContainer/Dash'
import { Link } from 'react-router-dom'


// import Books
import Books from "../../../assets/fakeDate/Books"

const Home = () => {
  const productNew = Books.filter( product => product.info === "news")
  console.log(productNew)

  return (
    <div className='Home'>
        <div className="widgest">
             <Widgest type="user" />
             <Widgest type="books" />
             <Widgest type="order" />
             <Widgest type="balance" />
        </div>
        <div className="content_title">
              <h2>lastest books</h2>
                <Dash />
              <p><Link to='/books'>all books <MdOutlineArrowForwardIos className='icons' /></Link></p>
         </div>
        <div className="container_books">
          {
            productNew.map( (product)=>(
              <div className="wrapper">
                <div className="image_content">
                  <img src={product.image01} alt="images" />
                </div>
                <div className="dec_wrapper">
                    <h2 className="title">{product.title}</h2>
                    <h3 className="author">author:<span>{product.author}</span></h3>
                    <p className="text">Tarjoumid : <span>{product.tarjumide}</span></p>
                    <p className='price'>price: <span>{product.price}</span>/fd</p>
                    <Link to={`/books/${product.id}`} className='link_button'>view details <MdLibraryBooks className='icons'/></Link>
                </div>
              </div>
            ))
          }
        </div>
    </div>
    
  )
}

export default Home
