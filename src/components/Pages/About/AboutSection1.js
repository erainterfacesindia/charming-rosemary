import React from 'react'
import styled from 'styled-components'
import '../../Style/global.css'
import Wrapper from '../../UI/Wrapper'
import * as Styles from '../Home/AboutCompany/Section4.module.css'
import { Badge } from 'react-bootstrap'
import "./about.css"



const AboutSection1 = () => {
    return (
        
        <div class=" bg-black text-white">
        <div class="container-fluid flex-wrap flex-md-nowrap py-5" style={{padding:"0 5%"}}>
            
        <div class="row">
        <h2 class="py-5">
  <Badge bg="danger">ABOUT US</Badge>
                {/* <span class="underline"></span>  */}
              </h2> 
                <div className="col-lg-7 col-sm-12">
                        <SubTitle>Reliable & Cost Efficient Company</SubTitle>
                            <p>ERA Interfaces wants to provide smart and proactive digituls solutions to 
                                ensure its customers stay relevant in these progressive and dynamic market conditions.</p>
                                <p>ERA Interfaces wants to provide smart and proactive digituls solutions to 
                                ensure its customers stay relevant in these progressive and dynamic market conditions.</p>
                        <ul class="checkmark">
                        <li>Understand Your Needs</li>
                        <li>Find the Perfect Solution</li>
                        <li>Understand Your Needs</li>
                        <li>Find the Perfect Solution</li>
                        <li>Understand Your Needs</li>
                        <li>Find the Perfect Solution</li>
                        </ul>
                    </div>
                <div className="col-lg-5 col-sm-12 text-end">
                <img className="about" src="/aboutus.png" ulst="home_about image" />
                </div>
            </div>
       
        </div>
        </div>
)
        }
        export default AboutSection1 
    
    
const SubTitle=styled.div`
text-align:start;
/* padding-left:0 1rem;
padding-bottom:2rem; */
font-size:2rem;
`
const TitleContainer=styled.div`
padding-top: 20px; 
font-size:3rem;
/* padding-left:0 1rem;*/
padding-bottom:1rem; 
color:#f26a2e;

p {
font-size: 1.3rem;
}
`


