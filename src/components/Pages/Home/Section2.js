import React from 'react'
import './section2.css'
import { StaticImage } from 'gatsby-plugin-image'
import { Badge } from 'react-bootstrap'
import Wrapper from '../../UI/Wrapper'
import {GiGraduateCap} from "react-icons/gi"
import { FaUsers } from "react-icons/fa"
import { FaMobileAlt } from "react-icons/fa"
import {IconContext} from "react-icons"
import '../../Style/global.css'


const Section2 = () => {
  return (
      
    <div class="p-3s bg-black text-white">
    <div class="container-fluid flex-wrap flex-md-nowrap" style={{padding:"0 5%"}}>
        <div class="row">
        <h2 class="py-5">
  <Badge bg="danger">OUR SERVICES</Badge>
                {/* <span class="underline"></span>  */}
              </h2> 
              <div class="col-md-4 col-sm-12 text-center py-3">
                <a href="/services">
              <img src="/Group69.png" style={{ maxWidth:"35%",height:"35%"}}/></a>
    <h4 class="text-white py-4 sectiontwo">EDUCATION</h4>
      <p>Our technology-enabled solutions are tailored to meet the demands of individuals & organisations...Our technology-enabled solutions are tailored to meet the demands of individuals & organisations</p>
      <a href="/services" class="text-danger text-start">Read More</a>
    </div>
    <div class="col-md-4 col-sm-12 text-center py-3">
      <a href="/services">
    <img src="/Group70.png" style={{ maxWidth:"35%",height:"35%"}}/></a>
      <h4 class="text-white py-4 sectiontwoo" to="/">RECRUITMENT</h4>
    <p>Our technology-enabled solutions are tailored to meet the demands of individuals & organisations...Our technology-enabled solutions are tailored to meet the demands of individuals & organisations</p>
    <a href="/services" class="text-danger text-start">Read More</a>
    </div>
    <div class="col-md-4 col-sm-12 text-center py-3">
      <a href="/services">
    <img src="/Group71.png" style={{ maxWidth:"35%",height:"35%"}}/></a>
      <h4 class="text-white py-4 sectiontwooo" to="/">APPLICATION</h4>
    <p>Our technology-enabled solutions are tailored to meet the demands of individuals & organisations...Our technology-enabled solutions are tailored to meet the demands of individuals & organisations</p>
    <a href="/services" class="text-danger text-start">Read More</a>
    </div> 
   </div>
   <div class="row py-5 text-center">
       <h2>Our Achievements</h2>
       <div class="col-md-4 col-sm-12 text-center py-3">
       <p className="pa">100+<br/><h5>Clients</h5></p>
       </div>
       <div class="col-md-4 col-sm-12 text-center py-3">
       <p className="pa">100+<br/><h5>Clients</h5></p>
       </div>
       <div class="col-md-4 col-sm-12 text-center py-3">
       <p className="pa">100+<br/><h5>Clients</h5></p>
       </div>
       

   </div>
 </div>
 </div>

  
      )
  }
  
export default Section2



















































































































































































//  import * as React from "react"
//  import { GatsbyImage } from "gatsby-plugin-image"
//  import { graphql } from "gatsby"
//  import 'bootstrap/dist/css/bootstrap.min.css';
// import styled from "styled-components"
// import {Button} from '../../Button'
// import { useStaticQuery } from 'gatsby'
// // import Wrapper from "../../UI/Wrapper";
// import * as heroStyles from '../Home/HeroSection/Section1.module.css';
// import Wrapper from "../../UI/Wrapper";
 
// export default function OurServices({heading}) {
//   const data= useStaticQuery(
//     graphql`
// query{
//  allFile(
//     filter: {relativeDirectory: {eq: "ourServices"}}
//     sort: {fields: base, order: ASC}
//   ) {
//     edges {
//       node {
//         id
//         name
//         base
//         relativePath
//         childImageSharp {
//            gatsbyImageData(
//             height: 480
//             width: 480
//             placeholder: BLURRED
//             quality: 70
//             blurredOptions: {width: 100}
//           )
//         }
//       }
//     }
//   }
// }
// `)


// function Section2(data)
//  {
//   const OurservicesArray = []      
//         data.allFile.edges.map(({node}) => {
//             OurservicesArray.push( 
//               <Productsection2container key={node}>
//                   <GatsbyImage image={node.childImageSharp.gatsbyImageData} alt={node.base} css={`
//                       height:100%;
//                       max-width:100%;
//                       position:absolute;
//                       border-radius:10px;
//                       filter:brightness(70%);
//                       transition: 0.4s cubic-bezier(0.075,0.82,0.165, 1);
       
//                             &:hover {
//                               filter: brightness(100%)
//                             }   
//                           `} />
                          
//           <ProductInfo>
//           <ProductTitle css={`color:white; font-size: 3vw;`}>
//              {node.name}
//           </ProductTitle>
//         <Button to="/services" primary="true" round="true" css={`
//           position:absolute;
//           top :320px;
//           font-size:14px;
//         `}>Explore More</Button>
//         </ProductInfo>
                                    
//    </Productsection2container> 
//                         )
                        
//                       })
                        
//                             return OurservicesArray
                            
                            
//                           }
                          

//                           console.log(data)
//                           return (
                            
//                                   <ProductsContainer>
//                                     <ProductsHeading>{heading}</ProductsHeading>
//                                     <ProductWrapper>{Section2(data)}</ProductWrapper> 
//                                   </ProductsContainer>
                                
                                 
                          
                          
//                           )
// }
                          
                          
// const ProductsContainer = styled.div`
// height:100%;
// /* padding:3rem calc((100vw - 1300px)/2); */
// background: white;
// color:#fff;
// background-color: black;
// `

// const ProductsHeading = styled.div`
// font-size: clamp(1.2rem,5vw,3rem);
// text-align: start;
// padding-left: 50px;
// padding-bottom: 2rem;
// color: #f26a2e;
// `
// const ProductWrapper = styled.div`
// display: grid;
// grid-template-columns:repeat(3,1fr);
// grid-gap:20px;
// justify-items:center;
// padding:0 3rem;
// height:50%;

// @media screen and (max-width: 1200px)
// {
// grid-template-columns: 1fr 1fr;
// }

// @media screen and (max-width: 868px)
// {
// grid-template-columns:1fr;
// }`

// const Productsection2container = styled.div`
// line-height: 2;
// width: 100%;
// height: 500px;
// position: relative;
// border-radius: 10px;
// filter: brightness(70%);
// transition: 0.4s cubic-bezier(0.075,0.82,0.165, 1);

// &:hover {
// filter: brightness(100%);
// }

// @media screen and (max-width: 280px)
// {
// padding:0 1rem;
// }`

// const ProductInfo = styled.div`
// display:flex;
// flex-direction:column;
// align-items:flex-start;
// padding: 0 2rem;

// @media screen and (max-width: 400px)
// {
// padding:0 1rem;
// }`

// const TextWrap = styled.div`
// align-items: center;
// position: absolute;
// top: 375px;`

// const ProductTitle = styled.div`
// position:absolute;
// top: 220px;
// text-align: center;
// justify-content: center;





// `
