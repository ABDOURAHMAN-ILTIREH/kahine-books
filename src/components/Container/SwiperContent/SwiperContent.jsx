import React, { useRef, useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import './Swiper.css';

// import fake data 
import  Books from "../../../assets/fakeDate/Books"


const Slider = () => {
  const sliderRef = useRef(null);


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
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
       navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    },);

    return () => {
      swiper.destroy();
    };
  }, []);
  


  return (
    <div className="swiper-container" ref={sliderRef}>
      <div className="swiper-wrapper">
      {
        News.map( product => (
          <div className="swiper-slide">
            <div className='container_slider'>
                <div className="product_image">
                  <img src={product.image01} alt={product.title} />
                </div>
                <div className="content">
                  <div className="text_wrapper">
                    <p className='name-author'>{product.title}</p>
                    <h1 className="title">{product.author}</h1>
                    <p className='dec'>{product.price}</p>
                    <button>Addcart</button>
                  </div>
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
  );
};

export default Slider;






