import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import ImageSlider from '../components/ImageSlider'
import Footer from '../components/Footer'
import Vcmessageforhome from '../components/Home/vc message'
import Partner from '../components/Home/Partners'

const Homelayout = (Components) => ({...props}) => {
  return (
    <div className='flex flex-col h-full'>
        <Header />
        <Navbar />
        <main>
          <ImageSlider /> 
          <Components {...props} />
          
        </main>
        <Vcmessageforhome/>
        <Partner/>
        <Footer />
    </div>
  )
}

export default Homelayout