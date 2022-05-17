import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import slideImage1 from '../../image/unsplash_3Sf_G9m0gcQ.png'
import slideImage2 from '../../image/unsplash_b5HMwgoU2h4.png'
import slideImage3 from '../../image/unsplash_b5HMwgoU2h4 (1).png'
import user from '../../image/unsplash_FjvXUeYf1AA.png'
import './Slider.css'


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Slider = () => {
    return (
        <Carousel className='Slider' responsive={responsive}>
            <div className='item'>
                <img src={slideImage1} alt="" />
                <div className="user">
                  <img src={user} alt="" />
                  <div className="slideInfo">
                      <h6>Origin and Evolution#4477</h6>
                      <p>@miriamammi</p>
                  </div>
                </div>
                <div className='time'>
                  <p>0.99</p>
                  <p>4d 16h</p>
                </div>
            </div>
            <div className='item'>
                <img src={slideImage2} alt="" />
                <div className="user">
                  <img src={user} alt="" />
                  <div className="slideInfo">
                      <h6>Origin and Evolution#4477</h6>
                      <p>@miriamammi</p>
                  </div>
                </div>
                <div className='time'>
                  <p>0.99</p>
                  <p>4d 16h</p>
                </div>
            </div>
            <div className='item'>
                <img src={slideImage3} alt="" />
                <div className="user">
                  <img src={user} alt="" />
                  <div className="slideInfo">
                      <h6>Origin and Evolution#4477</h6>
                      <p>@miriamammi</p>
                  </div>
                </div>
                <div className='time'>
                  <p>0.99</p>
                  <p>4d 16h</p>
                </div>
            </div>
            <div className='item'>
                <img src={slideImage1} alt="" />
                <div className="user">
                  <img src={user} alt="" />
                  <div className="slideInfo">
                      <h6>Origin and Evolution#4477</h6>
                      <p>@miriamammi</p>
                  </div>
                </div>
                <div className='time'>
                  <p>0.99</p>
                  <p>4d 16h</p>
                </div>
            </div>
            <div className='item'>
                <img src={slideImage3} alt="" />
                <div className="user">
                  <img src={user} alt="" />
                  <div className="slideInfo">
                      <h6>Origin and Evolution#4477</h6>
                      <p>@miriamammi</p>
                  </div>
                </div>
                <div className='time'>
                  <p>0.99</p>
                  <p>4d 16h</p>
                </div>
            </div>
        </Carousel>
    );
};

export default Slider;