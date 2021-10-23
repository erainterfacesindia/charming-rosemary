import React from 'react'
import FeatureSection from '../components/Pages/Industries/FeatureSection'
import Callus from '../components/Callus'
import Layout from "../components/Layout"
import '../components/Style/global.css'
import SEO from '../components/SEO'


const industries= () => {
return (
        <Layout>
            <SEO title="Industries" />
            <FeatureSection />
            <Callus />
        </Layout>
    )
}

export default industries
