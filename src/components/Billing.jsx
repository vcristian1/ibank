import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
import { motion } from "framer-motion";

const Billing = () => {
  return (
    <section id="product" className={`${layout.sectionReverse} md:ml-16 ml-6`}>
      <motion.div 
       className={layout.sectionImgReverse}
       initial="hidden"
       whileInView="visible"
       viewport={{ once: true, amount: 0.5 }}
       transition={{ delay: 1, duration: 0.5 }}
       variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
       }} 
      >
        <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]"/>

        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white_gradient" />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white_gradient" />

      </motion.div>

      <motion.div 
       className={layout.sectionInfo}
       initial="hidden"
       whileInView="visible"
       viewport={{ once: true, amount: 0.5 }}
       transition={{ delay: .25, duration: 0.5 }}
       variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
       }} 
      >
        <h2 className={styles.heading2}>
          Easily control your <br className="sm:block hidden" /> billing &
          invoicing
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
          <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
        </div>
      </motion.div>
    </section>
  )
}

export default Billing