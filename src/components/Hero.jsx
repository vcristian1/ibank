import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
import { motion } from "framer-motion"; 

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <motion.div 
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
        }} 
      >
        <motion.div 
         className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2"
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, amount: 0.5 }}
         transition={{ delay: 1, duration: 0.5 }}
         variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
         }}
        >
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </motion.div>


        {/* Get Started/Next Generation Section */}
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
       
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">Payment Method</h1>
        <p className={`${styles.paragraph} ml-2`}>Our team of experts use a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.</p>
      </motion.div>

      <motion.div 
       className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
       initial="hidden"
       whileInView="visible"
       viewport={{ once: true, amount: 0.5 }}
       transition={{ delay: 0.5, duration: 0.5 }}
       variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
       }}
      >
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]"/>
        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </motion.div>
      
      {/* Get Started Button for Mobile Devices */}
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  )
}

export default Hero