import React from 'react'
import HeaderPage from '@/components/HeaderPage/HeaderPage'
import About from '@/components/AboutPage/About'
import Brand from '@/components/Brand/Brand'
import Project from '@/components/Project/Project'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'

const Page = () => {
  return (
    <div>
      <HeaderPage />
      {/* <About /> */}
      <Brand />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}

export default Page