import './App.css'
import Destination from './components/Destination/Destination'
import Discounts from './components/Discounts/Discounts'
import Footer from './components/Footer/Footer'
import Form from './components/Form/Form'

import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Review from './components/Review/Review'
import Testimonial from './components/Testimonial/Testimonial'

function App() {


  return (
    <>
     <Navbar></Navbar>
     <Hero></Hero>
     <Review></Review>
     <Destination></Destination>
     <Discounts></Discounts>
     <Form></Form>
     <Testimonial></Testimonial>
     <Footer></Footer>
    </>
  )
}

export default App
