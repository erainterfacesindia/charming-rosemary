import * as React from "react"
import {Button} from "../../../Button"
import styled from 'styled-components'
import Wrapper from "../../../UI/Wrapper"
import Carousel from 'react-bootstrap/Carousel'
import './Section.css'



const Section1 = (props) => {
    return (
       
        <div class="p-3s bg-black text-white">
       {/* <div class="container-xxl flex-wrap flex-md-nowrap" >  */}
      
       <Carousel controls={false}>
  <Carousel.Item interval={1000}>
  <Wrapper>
  <div class="row">
            <div className="col-lg-5 col-sm-12 py-5">               
                    <HeroH1  className="pad-bottom-md">Our Technology Enabled Solutions!</HeroH1>
                    <HeroP className="pad-bottom-md">Are tailored to meet the demands of individuals & organisations...</HeroP>
                    <Button primary="true" to="/about" > Explore More</Button>
                </div>  
            <div className="col-lg-7 col-sm-12 py-5 text-end">
                    <img  className="about" src="/img_new/home-scroll/home_slide1.webp" alt="home_about image" /> 
                    {/* <iframe width="420" height="345" src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0">
</iframe> */}
                </div>          
            </div>
            </Wrapper>
  </Carousel.Item>
  <Carousel.Item>
  <Wrapper>
  <div class="row">
            <div className="col-lg-5 col-sm-12 py-5">               
                    <HeroH1  className="pad-bottom-md">Our Technology Enabled Solutions!</HeroH1>
                    <HeroP className="pad-bottom-md">Are tailored to meet the demands of individuals & organisations...</HeroP>
                    <Button primary="true" to="/about" > Explore More</Button>
                </div>  
            <div className="col-lg-7 col-sm-12 py-5 text-end">
                    <img className="about" src="/img_new/home-scroll/home_slide1.webp" alt="home_about image" />
                </div>          
            </div>
            </Wrapper>
  </Carousel.Item>
  <Carousel.Item>
  <Wrapper>
  <div class="row">
            <div className="col-lg-5 col-sm-12 py-5">               
                    <HeroH1  className="pad-bottom-md">Our Technology Enabled Solutions!</HeroH1>
                    <HeroP className="pad-bottom-md">Are tailored to meet the demands of individuals & organisations...</HeroP>
                    <Button primary="true" to="/about"> Explore More</Button>
                </div>  
            <div className="col-lg-7 col-sm-12 py-5 text-end">
                    <img className="about" src="/img_new/home-scroll/home_slide1.webp" alt="home_about image" />
                </div>          
            </div>
            </Wrapper>
  </Carousel.Item>
</Carousel>
        </div>
        // </div>
        
       
    )
}

export default Section1
    

const HeroH1=styled.div`
text-align:start;
padding-left:0 1rem;
font-size:2rem;
font-weight:bold;
padding-top:5rem;
`
const HeroP=styled.div`
text-align:start;
font-size:1.8rem;`





