import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { About } from './components/About'
import { Rooms } from './components/Rooms'
import { Highlights } from './components/Highlights'
import { Gallery } from "./components/Gallery"
import { Review } from "./components/Review"
import { Footer } from "./components/Footer"

function App() {

  return (
    <>
      <div className="flex flex-col gap-40">
        <div className="bg-center bg-cover bg-no-repeat py-6  " style={{backgroundImage: "url('area/goggaHero.jpg')"}}>
          {/*1. Header (Logo + Navigation)*/}
          <Header/>

          {/*2. Hero Section (Headline + Call to Action)*/}
          <Hero/>
        </div>
       
        {/*3. About/Welcome Section*/}
        <About/>
        
        {/*4. Rooms & Rates*/}
        <Rooms/>

        {/*5. Amenities/Facilities*/}
        <Highlights/>

        {/*6. Gallery*/}
        <Gallery/>

        {/*7. Guest Reviews/Testimonials*/}
        <div className="flex mx-auto">
          <Review/>
        </div>
        
        {/*10. Footer */}
        <Footer/>
        
      </div>
    </>
  )
}

export default App
