import React from 'react'
import TopHeader from '../components/TopHeader'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Query from '../components/Query'
import '../components/Styles/services.css'

const Services = () => {
  const servisesSard = [
    { imageSrc: './images/image1.png', heading: 'Noteworthy technology acquisitions 2021' },
    { imageSrc: './images/image2.png', heading: 'Noteworthy technology acquisitions 2021' },
    { imageSrc: './images/image3.jpeg', heading: 'Noteworthy technology acquisitions 2021' },
    
   
  ]
  const tradeCard = [
    { imageSrc: './images/image4.png', heading: 'Noteworthy technology acquisitions 2021' },
    { imageSrc: './images/image5.png', heading: 'Noteworthy technology acquisitions 2021' },
    { imageSrc: './images/image6.png', heading: 'Noteworthy technology acquisitions 2021' },
    { imageSrc: './images/image7.png', heading: 'Noteworthy technology acquisitions 2021' },
    { imageSrc: './images/image8.png', heading: 'Noteworthy technology acquisitions 2021' },
    { imageSrc: './images/image9.png', heading: 'Noteworthy technology acquisitions 2021' },
    { imageSrc: './images/image10.png', heading: 'Noteworthy technology acquisitions 2021' },
    { imageSrc: './images/image11.png', heading: 'Noteworthy technology acquisitions 2021' },
    { imageSrc: './images/image12.png', heading: 'Noteworthy technology acquisitions 2021' },
    { imageSrc: './images/image13.png', heading: 'Noteworthy technology acquisitions 2021' },
    { imageSrc: './images/image14.png', heading: 'Noteworthy technology acquisitions 2021' },
    { imageSrc: './images/image15.png', heading: 'Noteworthy technology acquisitions 2021' },
    { imageSrc: './images/image16.png', heading: 'Noteworthy technology acquisitions 2021' },
    { imageSrc: './images/image17.png', heading: 'Noteworthy technology acquisitions 2021' },
    { imageSrc: './images/image18.png', heading: 'Noteworthy technology acquisitions 2021' },
    { imageSrc: './images/image19.png', heading: 'Noteworthy technology acquisitions 2021' },
    { imageSrc: './images/image20.png', heading: 'Noteworthy technology acquisitions 2021' },
    { imageSrc: './images/image21.png', heading: 'Noteworthy technology acquisitions 2021' },
  ]

  return (
    <div>
      <TopHeader  />
      <Navbar/>
      <h1>Services</h1>
      <div className="flex justify-center "> 
      <div className=' flex flex-row flex-wrap items-center'>
        {servisesSard.map(({ imageSrc, heading }, index) => {
          return <Card key={index} imageSrc={imageSrc} heading={heading} /> 
        })}
      </div>
      
    </div>

    <h1>Our Trades</h1>
      <div className="flex justify-center TAlign"> 
      <div className=' flex flex-row flex-wrap items-center'>
        {tradeCard.map(({ imageSrc, heading }, index) => {
          return <Card key={index} imageSrc={imageSrc} heading={heading} /> 
        })}
      </div>
      
    </div>

    <Query />
    <Footer />
    </div>
  )
}

export default Services
