

import EventCategory from "../components/EventCategory"
import FAQ from "../components/FAQ"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Subscription from "../components/subscription"
import Testimonials from "../components/Testimonials"
import VendorCategory from "../components/VendorCategory"
import WhyHarEvent from "../components/whyHarEvent"
import Work from "../components/work"


const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <VendorCategory/>
        <EventCategory/>
        <Work/>
        <WhyHarEvent/>
        <Testimonials/>
        <Subscription/>
        <FAQ/>
        <Footer/>
    </div>
  )
}

export default Home