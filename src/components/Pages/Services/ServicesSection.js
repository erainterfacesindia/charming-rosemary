import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image"
 import { graphql } from "gatsby"
import './services.css'
import Badge from 'react-bootstrap/Badge'
import '../../Style/global.css'





const ServicesSection = () => {
    return (
        <div class="p-3s bg-black text-white">
    <div class="container-fluid flex-wrap flex-md-nowrap py-5" style={{padding:"0 5%"}}>
    <div class="row">
        <h2 class="py-4">
  <Badge bg="danger">Services</Badge>
              </h2>
        <div class="row">
  <h2 class="headlines">
                EDUCATION
              </h2>
    <div class="col-md-3">
        <a href="/services/Itlf" class="widgetcontainer widgetcontainer-image">
        {/* <a href="services/Itlf/" title="read more" class="btn btn-round btn-info">Read More</a>  */}
            <div class="widgetcontainer-image-cover">
                <img src="/img_new/COE/coe.webp" alt=""/>
            </div>
            <div class="widgetcontainer-image-info">
                <h4>COE</h4>
                <p>
                    Curabitur ullamcorper mi ut rutrum gravida commodo tellus.
                </p>
                <h5 style={{width:"fit-content",fontSize:"13px"}}>Read More..</h5>
            </div>
        </a>
    </div>
    <div class="col-md-3">
        <a href="/services/Itlf" class="widgetcontainer widgetcontainer-image">
        {/* <a href="services/Itlf/" title="read more" class="btn btn-round btn-info">Read More</a>  */}
            <div class="widgetcontainer-image-cover">
                <img src="/img_new/itlf/itlf.webp" alt=""/>
            </div>
            <div class="widgetcontainer-image-info">
                <h4>ITLF</h4>
                <p>
                    Curabitur ullamcorper mi ut rutrum gravida commodo tellus.
                </p>
                <h5 style={{width:"fit-content",fontSize:"13px"}}>Read More..</h5>
            </div>
        </a>
    </div>
    <div class="col-md-3">
        <a href="/services/digipedagogy" class="widgetcontainer widgetcontainer-image">
        {/* <a href="services/Itlf/" title="read more" class="btn btn-round btn-info">Read More</a>  */}
            <div class="widgetcontainer-image-cover">
                <img src="/recruitment3.jpg" alt=""/>
            </div>
            <div class="widgetcontainer-image-info">
                <h4>DIGIPEDAGOGY</h4>
                <p>
                    Curabitur ullamcorper mi ut rutrum gravida commodo tellus.
                </p>
                <h5 style={{width:"fit-content",fontSize:"13px"}}>Read More..</h5>
            </div>
        </a>
    </div>
    <div class="col-md-3">
        <a href="/services/internships" class="widgetcontainer widgetcontainer-image">
        {/* <a href="services/Itlf/" title="read more" class="btn btn-round btn-info">Read More</a>  */}
            <div class="widgetcontainer-image-cover">
                <img src="/about_home.jpeg" alt=""/>
            </div>
            <div class="widgetcontainer-image-info">
                <h4>PROJECTS & INTERNSHIP</h4>
                <p>
                    Curabitur ullamcorper mi ut rutrum gravida commodo tellus.
                </p>
                <h5 style={{width:"fit-content",fontSize:"13px"}}>Read More..</h5>
            </div>
        </a>
    </div>
    <div class="row">
  <h2 class="headlines">
                RECRUITMENT
                
              </h2>
              
      </div>
    <div class="col-md-4">
        <a href="/services/recruitment" class="widgetcontainer widgetcontainer-image">
        {/* <a href="services/Itlf/" title="read more" class="btn btn-round btn-info">Read More</a>  */}
            <div class="widgetcontainer-image-cover">
                <img src="/recruitment2.jpg" alt=""/>
            </div>
            <div class="widgetcontainer-image-info">
                <h4>RECRUITMENT</h4>
                <p>
                    Curabitur ullamcorper mi ut rutrum gravida commodo tellus.
                </p>
                <h5 style={{width:"fit-content",fontSize:"13px"}}>Read More..</h5>
            </div>
        </a>
    </div>
    <div class="col-md-4">
        <a href="/services/assessment" class="widgetcontainer widgetcontainer-image">
        {/* <a href="services/Itlf/" title="read more" class="btn btn-round btn-info">Read More</a>  */}
            <div class="widgetcontainer-image-cover">
                <img src="/recruitment3.jpg" alt=""/>
            </div>
            <div class="widgetcontainer-image-info">
                <h4>ASSESSMENT</h4>
                <p>
                    Curabitur ullamcorper mi ut rutrum gravida commodo tellus.
                </p>
                <h5 style={{width:"fit-content",fontSize:"13px"}}>Read More..</h5>
            </div>
        </a>
    </div>
    <div class="col-md-4">
        <a href="/services/development" class="widgetcontainer widgetcontainer-image">
        {/* <a href="services/Itlf/" title="read more" class="btn btn-round btn-info">Read More</a>  */}
            <div class="widgetcontainer-image-cover">
                <img src="/about_home.jpeg" alt=""/>
            </div>
            <div class="widgetcontainer-image-info">
                <h4>SOFTWARE DEVELOPMENT</h4>
                <p>
                    Curabitur ullamcorper mi ut rutrum gravida commodo tellus.
                </p>
                <h5 style={{width:"fit-content",fontSize:"13px"}}>Read More..</h5>
            </div>
        </a>
    </div>
    <div class="row">
  <h2 class="headlines">
                APPLICATION
              </h2>
      </div>
    <div class="col-md-4">
        <a href="/services/attendance" class="widgetcontainer widgetcontainer-image">
        {/* <a href="services/Itlf/" title="read more" class="btn btn-round btn-info">Read More</a>  */}
            <div class="widgetcontainer-image-cover">
                <img src="/recruitment2.jpg" alt=""/>
            </div>
            <div class="widgetcontainer-image-info">
                <h4>ATTENDANCE</h4>
                <p>
                    Curabitur ullamcorper mi ut rutrum gravida commodo tellus.
                </p>
                <h5 style={{width:"fit-content",fontSize:"13px"}}>Read More..</h5>
            </div>
        </a>
    </div>
    <div class="col-md-4">
        <a href="/services/digitalmarketing" class="widgetcontainer widgetcontainer-image">
        {/* <a href="services/Itlf/" title="read more" class="btn btn-round btn-info">Read More</a>  */}
            <div class="widgetcontainer-image-cover">
                <img src="/recruitment3.jpg" alt=""/>
            </div>
            <div class="widgetcontainer-image-info">
                <h4>DIGITAL MARKETING</h4>
                <p>
                    Curabitur ullamcorper mi ut rutrum gravida commodo tellus.
                </p>
                <h5 style={{width:"fit-content",fontSize:"13px"}}>Read More..</h5>
            </div>
        </a>
    </div>
    <div class="col-md-4">
        <a href="/services/examportal" class="widgetcontainer widgetcontainer-image">
        {/* <a href="services/Itlf/" title="read more" class="btn btn-round btn-info">Read More</a>  */}
            <div class="widgetcontainer-image-cover">
                <img src="/about_home.jpeg" alt=""/>
            </div>
            <div class="widgetcontainer-image-info">
                <h4>EXAM PORTAL </h4>
                <p>
                    Curabitur ullamcorper mi ut rutrum gravida commodo tellus.
                </p>
                <h5 style={{width:"fit-content",fontSize:"13px"}}>Read More..</h5>
            </div>
        </a>
    </div>
  </div>
</div>
</div>
  </div>
  
    )
}

export default ServicesSection

