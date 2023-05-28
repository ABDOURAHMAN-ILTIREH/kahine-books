import "./BooksCustomer.scss" 
import TableCustomer from "./TableCustomer.jsx"
import Book from "../../../assets/fakeDate/Books"
import { useRef} from "react"
import { MdClose, MdTune } from "react-icons/md"


const BooksCustomer = () => {

  const Navbar = useRef();

  const SearchAdd = ()=> Navbar.current.classList.add('toggle__nav__add');
  const SearchRemove = ()=> Navbar.current.classList.remove('toggle__nav__add');


  return (
    <section className='books_customer'>
        <div className="content_books_wrapper">
          <div className="font-hidden" onClick={SearchAdd} >
              <MdTune className="tune_icon"/> 
               <span className="text_filter">Filter</span>
          </div>
          <div className="Navbar" ref={Navbar}>
              <div className="top_font">
                      <MdTune className="tune_icon"/> 
                      <h1 className="text_filter">Filter the Products</h1>
              </div>
                <MdClose className="top_icon" onClick={SearchRemove} />
              <div className="input_search">
                  <input type="text" placeholder='Search the book' />
                  <button className="product-search">Search</button>
              </div>
         </div>

          {/* Books Details */}
          <div className="books_container">
            {
              Book.map( (book,index)=>(
                <TableCustomer  key={book.id} {...book} index={index}/>
              ))
            }
          </div>
        </div>
    </section>
  )
}

export default BooksCustomer