import React from 'react'
import TopHeader from '../components/TopHeader'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Query from '../components/Query'
import '../components/Styles/services.css'

const Services = () => {
  const servisesSard = [
    { imageSrc: './images/image1.png', heading: 'Cost Estimation \n (Labor & Material)' },
    { imageSrc: './images/image2.png', heading: 'Quantities & Materials Takeoffs' },
    { imageSrc: './images/image3.jpeg', heading: 'Construction Work Schedules' },
    
   
  ]
  const tradeCard = [
    { imageSrc: './images/image4.png', heading: 'General Requirement' },
    { imageSrc: './images/image5.png', heading: 'Site Constructionn' },
    { imageSrc: './images/image6.png', heading: 'Concrete' },
    { imageSrc: './images/image7.png', heading: 'Masonry' },
    { imageSrc: './images/image8.png', heading: 'Metals' },
    { imageSrc: './images/image9.png', heading: 'Wood & Plastics' },
    { imageSrc: './images/image10.png', heading: 'Thermal and Moisture Protection' },
    { imageSrc: './images/image11.png', heading: 'Doors and Windows' },
    { imageSrc: './images/image12.png', heading: 'Finishes' },
    { imageSrc: './images/image13.png', heading: 'Specialties' },
    { imageSrc: './images/image14.png', heading: 'Equipment' },
    { imageSrc: './images/image15.png', heading: 'Furnishings' },
    { imageSrc: './images/image16.png', heading: 'Special Construction' },
    { imageSrc: './images/image17.png', heading: 'Conveying Systems' },
    { imageSrc: './images/image18.png', heading: 'Mechanical' },
    { imageSrc: './images/image19.png', heading: 'Electrical' },
    { imageSrc: './images/image20.png', heading: 'Plumbing' },
    { imageSrc: './images/image21.png', heading: 'HVAC' },
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
