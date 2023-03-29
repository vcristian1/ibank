import React from 'react'
import styles from "./style";
import Navbar from "./components/Navbar"
import Billing from "./components/Billing"
import Business from "./components/Business"
import CardDeal from "./components/CardDeal"
import Clients from "./components/Clients"
import CTA from "./components/CTA"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Stats from "./components/Stats"
import Testimonials from "./components/Testimonials"
import ContactUs from './components/ContactUs';

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
       {/* Container wrapping Navbar */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App