import React from 'react'
import Callus from '../components/Callus'
import Layout from '../components/Layout'
import BlogSection from '../components/Pages/Blogs/BlogSection'
import SEO from '../components/SEO'

const blogs = () => {
    return (
        <Layout>
            <SEO title="Blogs"/>
            <BlogSection heading="Our Blogs" />
            <Callus />
        </Layout>
    )
}

export default blogs
