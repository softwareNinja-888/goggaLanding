import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Gallery } from "./components/Gallery"
import { Footer } from "./components/Footer"

function App() {

  return (
    <>
      <div className="">


        <div className="bg-center bg-cover bg-no-repeat py-6  " style={{backgroundImage: "url('/view4.jpg')"}}>
          {/*1. Header (Logo + Navigation)*/}
          <Header/>

          {/*2. Hero Section (Headline + Call to Action)*/}
          <Hero/>
        </div>
       
        {/*<Hero/>*/}
        {/*3. About/Welcome Section*/}
        {/*4. Rooms & Rates*/}
        {/*5. Amenities/Facilities*/}
        {/*6. Gallery*/}
        <Gallery/>
        {/*7. Guest Reviews/Testimonials*/}
        {/*9. Contact & Booking Form*/}

        {/*10. Footer */}
        <Footer/>
        
      </div>
    </>
  )
}

export default App
