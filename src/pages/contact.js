import React from "react"
import Callus from "../components/Callus"
import Layout from "../components/Layout"
import ContactSection from "../components/Pages/Contact/ContactSection"
import Ourclients from "../components/Pages/Contact/Ourclients"
import SEO from '../components/SEO'


const Contact = () => {
    return (
      <Layout>
        <SEO title="Contact"/>
          <ContactSection/>
          <Ourclients/>
    </Layout>
    )
  }

  export default Contact
  