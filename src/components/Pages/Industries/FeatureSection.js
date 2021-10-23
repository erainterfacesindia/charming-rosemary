import React from 'react'
import Wrapper from '../../UI/Wrapper';
import * as Styles from './FeatureSection.module.css'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import {
    GiGraduateCap,
    GiShoppingCart,
    GiHospital,
    GiHeartBeats,
  } from "react-icons/gi"
  import { FaUsers } from "react-icons/fa";
  import "./feature.css"
  import '../../Style/global.css'



 const FeatureSection = () => {
    return (
     
<div class="bg-black">
<div class="container-fluid flex-wrap flex-md-nowrap py-3 uipad" style={{padding:"0 5%"}}>
  <div className={Styles.container + " row"}>
  <h2 class="py-5">
  <Badge bg="danger">Industries We Serve</Badge>
                {/* <span class="underline"></span>  */}
              </h2> 
    <div class="col-lg-6 col-sm-12 text-center py-3">
      <FaUsers size={70} color="#f26a2e"/>
      <h4 class="text-white" to="/">RECRUITMENT</h4>
      <p className="aboutp">Our technology-enabled solutions are tailored to meet the demands of individuals & organisations...Our technology-enabled solutions are tailored to meet the demands of individuals & organisations</p>
    </div>
    <div class="col-lg-6 col-sm-12 text-center py-3">
    <GiGraduateCap size={70} color="#f26a2e"/>
    <h4 class="text-white">EDUCATION</h4>
    <p className="aboutp">Our technology-enabled solutions are tailored to meet the demands of individuals & organisations...Our technology-enabled solutions are tailored to meet the demands of individuals & organisations</p>
    </div>
     <div class="col-lg-6 col-sm-12 text-center py-3">
      <GiShoppingCart size={70} color="#f26a2e"/>
      <h4 class="text-white">E-COMMERCE</h4>
      <p className="aboutp">Our technology-enabled solutions are tailored to meet the demands of individuals & organisations...Our technology-enabled solutions are tailored to meet the demands of individuals & organisations</p>
    </div>
    <div class="col-lg-6 col-sm-12 text-center py-3">
    <GiHeartBeats size={70} color="#f26a2e"/>
    <h4 class="text-white">HEALTH CARE</h4>
    <p className="aboutp center-block ">Our technology-enabled solutions are tailored to meet the demands of individuals & organisations...
    Our technology-enabled solutions are tailored to meet the demands of individuals & organisations</p>
    </div> 
    </div>
  </div>
  </div>
 

)
}
  
export default FeatureSection

