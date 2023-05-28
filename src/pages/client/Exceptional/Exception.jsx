import { useRef, useEffect} from "react"

import './exception.scss'

// import products books
import Books from "../../../assets/fakeDate/Books";
// import addcart
import { addCart} from "../../../redux/redux";

// import useSelector
import { useDispatch} from "react-redux"

//import swiper depandencies
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';


const Exception = () => {

  const dispatch = useDispatch();

  // Books 
  const News = Books.filter(books => books.slider === true);
  

  const sliderRef = useRef(null);

  const handlePrevClick = () => {
    sliderRef.current.swiper.slidePrev();
  };

  const handleNextClick = () => {
    sliderRef.current.swiper.slideNext();
  };

  useEffect(() => {
    const swiper = new Swiper(sliderRef.current, {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 1000, // 5 seconds
      },
    },);

    return () => {
      swiper.disable();
      console.log(`swiper is moving ${swiper}`);
    };
  }, []);


  return (
    <section className="exceptionnel">
      <div className="swiper-container" ref={sliderRef}>
      <h1 className="title">qaar kamid ah - buugta ugu iibka badan</h1>
        <div className="swiper-wrapper">
          {
          News.map( product => (
               <div className="swiper-slide">
                  <div className="product_image">
                    <img src={product.image01} alt={product.title} />
                  </div>
                  <div className="content">
                    <div className="text_wrapper">
                      <p className='name-author'>{product.title}</p>
                      <h1 className="title_auth">{product.author}</h1>
                      <p className='dec'>{product.price}<span>/fd</span></p>
                      <button onClick={()=>dispatch(addCart({
                         id: product.id,
                         image01:product.image01,
                         price: product.price,
                         title: product.title,
                         author: product.author
                      }))}>Add Cart</button>
                    </div>
                  </div>
                </div>
            ))
          }
      </div>
          <div className="swiper-pagination">...</div>
          <div className="swiper-button-prev" onClick={handlePrevClick}></div>
          <div className="swiper-button-next" onClick={handleNextClick}></div>
    </div>
    </section>
  )
}

export default Exception