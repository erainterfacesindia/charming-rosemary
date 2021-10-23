import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Wrapper from '../../UI/Wrapper'
import { Badge } from 'react-bootstrap'
import './contact.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Ourclients = () => {
    return (
    
      <div class="p-3s bg-black text-white">
     <div class="container-fluid flex-wrap flex-md-nowrap" style={{padding:"0 5%"}}> 
      <h2 class="py-5">
  <Badge bg="danger">OUR Clients</Badge>
                {/* <span class="underline"></span>  */}
              </h2> 
              </div>
        <div class="row">
  <div class="col-lg-12 col-sm-12">
  <Slider {...settings}>
              <div class="clientprofile" style={{width:"280px"}}>
            <img src="/img3.jpg" class="clientprofile-img"/>
            </div>
            <div class="clientprofile" style={{width:"280px"}}>
            <img src="/img3.jpg" class="clientprofile-img"/>
            </div>
            <div class="clientprofile" style={{width:"280px"}}>
            <img src="/img3.jpg" class="clientprofile-img"/>
            </div>
            <div class="clientprofile" style={{width:"280px"}}>
            <img src="/img3.jpg" class="clientprofile-img"/>
            </div>
            <div class="clientprofile" style={{width:"280px"}}>
            <img src="/img3.jpg" class="clientprofile-img"/>
            </div>
            <div class="clientprofile" style={{width:"280px"}}>
            <img src="/img3.jpg" class="clientprofile-img"/>
            </div>
            <div class="clientprofile" style={{width:"280px"}}>
            <img src="/img3.jpg" class="clientprofile-img"/>
            </div>
            <div class="clientprofile" style={{width:"280px"}}>
            <img src="/img3.jpg" class="clientprofile-img"/>
            </div>
            </Slider>
            </div>
            </div>
         </div>
         
    )
}

export default Ourclients

const settings = {
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed:2000,
  autoplaySpeed: 2000,
  cssEase: "linear",
  pauseOnHover: true
    }