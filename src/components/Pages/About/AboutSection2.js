import React from 'react'
import styled from 'styled-components'
import * as Styles from '../Home/AboutCompany/Section4.module.css'
import {
  GiCompass,
  GiDiamondHard,


} from "react-icons/gi"
import "./about.css"
import Wrapper from '../../UI/Wrapper'



const AboutSection2 = () => {

return (

  <AboutElements>
  <div class="  bg-black">
  <div class="container-fluid flex-wrap flex-md-nowrap" style={{padding:"0 5%"}}>
   
        <div class="row">
<div class="col-lg-6 col-sm-12 text-center pad-top-md">
  <h3 className="abouth3">OUR MISSION</h3>
  <GiCompass size={70} color="#f26a2e"/>
  <p className="aboutp">Our technology-enabled solutions are tailored to meet the demands of individuals & organisations...Our technology-enabled solutions are tailored to meet the demands of individuals & organisations</p>
</div>
<div class="col-lg-6 col-sm-12 text-center">
<h3 className="abouth3">OUR VISSION</h3>
<GiDiamondHard size={70} color="#f26a2e"/>
<p className="aboutp">Our technology-enabled solutions are tailored to meet the demands of individuals & organisations...Our technology-enabled solutions are tailored to meet the demands of individuals & organisations</p>
</div>
</div>

</div>
</div>
</AboutElements>

)
}
export default AboutSection2;

const AboutElements=styled.div`
    height:100%;
    width: 100%;
    background-color:black;
    justify-content:center;
    align-items:center;
    padding-top: 30px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px; `