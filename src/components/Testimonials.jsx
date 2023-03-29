import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import { motion } from "framer-motion";
const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <motion.div 
     className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1] md:ml-[130px] ml-12"
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
        What People are <br className="sm:block hidden" /> saying about us
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
    </motion.div>

    <motion.div 
     className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1] md:ml-[130px]"
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true, amount: 0.5 }}
     transition={{ delay: .75, duration: 0.5 }}
     variants={{
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
     }} 
    >
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}    
    </motion.div>
  </section>
);

export default Testimonials;