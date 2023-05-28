import './home.scss'
import { useRef, useEffect, useState} from 'react'

// import message icons
import { MdMessage } from "react-icons/md"

// import components
import Main from '../../../pages/client/main/Main'
import  Exception  from '../../../pages/client/Exceptional/Exception'
import { Question } from '../../../pages/client/Question/Question'

// import fake data 
import  Books from "../../../assets/fakeDate/Books"
// import  SwiperContent  from "../SwiperContent/SwiperContent";

import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import Message from '../Message/Message'


const Home = () => {

  // setup Message components
  const [message, setMessage] = useState(false);

  // slider
  const sliderRef = useRef(null);

  // import fake data
  const News = Books.filter(books => books.slider === true);

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
        delay: 5000, // 5 seconds
      },
    },);

    return () => {
      swiper.destroy();
      console.log(`swiper is moving ${swiper}`);
    };
  }, []);

 
  return (
    <div>
      <section className='home'>
      <div className="swiper-container" ref={sliderRef}>
          <div className="swiper-wrapper">
        {
          News.map( product => (
            <div className="swiper-slide" key={product.id}>
              <div className='container_slider'>
                  <div className="content">
                    <div className="text_wrapper">
                      <p className='name-author'>{product.author}</p>
                      <h1 className="title">{product.title}</h1>
                      <p className='dec'>{product.desc}</p>
                    </div>
                  </div>
                  <div className="product_image">
                    <img src={product.image01} alt={product.title} />
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
      <Exception />
      <Main />
      <Question />
      <div className="message_container">
        <div className="content_message"
          onClick={()=> setMessage(!message)}
        >
          <MdMessage className='icon' />
          <p className='text_message'>message</p>
        </div>
      </div>
      {
        message && (
          <Message message={message} setMessage={setMessage} />
        )
      }
  </div>
  )
}

export default Home