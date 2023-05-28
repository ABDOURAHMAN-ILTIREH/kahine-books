import { useEffect, useState } from "react"

import { Link } from "react-router-dom"
import "./book.scss" 

import Table from "./Table"

import Books from "../../../assets/fakeDate/Books"
import { FaSearch } from "react-icons/fa"
import Dash from "../../dashContainer/Dash"

const Book = () => {

  const [search, setSearch] = useState("")
  const [bookLanguage, setbookLanguage] = useState('ALL');
  const [allProduct, setAllProduct] = useState(Books); 

  useEffect(() => { 
      
    if(bookLanguage === 'ALL'){
      setAllProduct(Books)
    }

    if(bookLanguage === 'SOMALIE'){
       const  filteredProuduct = Books.filter(itme => itme.bookLanguage === 'SOMALIE');
       setAllProduct(filteredProuduct)
    }

    if(bookLanguage === 'ARABE'){
       const  filteredProuduct = Books.filter(itme => itme.bookLanguage === 'ARABE');
       setAllProduct(filteredProuduct)
    }

    if(bookLanguage === 'FRANCE'){
       const  filteredProuduct = Books.filter(itme => itme.bookLanguage === 'FRANCE');
       setAllProduct(filteredProuduct)
    }
      
  },[bookLanguage]);

  return (
    <section className='books'>
         <div className="top_content">
           <h1>Books List</h1>
             <div className="search">
              <input type="text" placeholder='search....' onChange={(e)=>setSearch(e.target.value)}/>
              <FaSearch className='icon' />
             </div>
             <button><span>+</span><Link to='addNewBooks'> add new book</Link></button>
         </div>
         <div className="content_title">
          <div className="seach_product">
          <button className={`all__food ${bookLanguage === 'ALL' ?'active__foods' : ''}`}
         onClick={()=>setbookLanguage('ALL')}
         >All</button>

         <button
         onClick={()=>setbookLanguage('FRANCE')}
         className={`${bookLanguage === 'FRANCE' ?'active__foods' : ''}`}
         >
           <p>FRANCE</p>
         </button>

         <button  
         onClick={()=>setbookLanguage('ARABE')}
         className={`${bookLanguage === 'ARABE' ?'active__foods' : ''}`}
         >
           <p>ARABE</p>
         </button>
         <button
         onClick={()=>setbookLanguage('SOMALIE')}
         className={`${bookLanguage === 'SOMALIE' ?'active__foods' : ''}`}
         >
           <p>SOMALIE</p>
         </button>
          </div>
                <Dash />
         </div>
         <div className="content">
          <div className="books_container">
            {
              allProduct.filter( (item)=>{
              return search === '' ? item: item.title.includes(search) || item.author.includes(search);
              }).map( (book,index)=>(
                <Table  key={book.id} {...book} index={index}/>
              ))
            }

          </div>
         </div>
    </section>
  )
}

export default Book