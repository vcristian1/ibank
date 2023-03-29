import styles from "../style";
import Button from "./Button";
import ContactUs from "./ContactUs";
import { motion } from "framer-motion";

const CTA = () => (
    <motion.div 
     className="flex-1 flex flex-col md:ml-[100px] md:mr-[100px] ml-6 mr-6 mb-[150px]"
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true, amount: 0.5 }}
     transition={{ delay: .25, duration: 0.5 }}
     variants={{
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
     }} 
    >
      <section id="contact">
        <h2 className={styles.heading2}>Let’s try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
        <ContactUs />
      </section>
    </motion.div>
);

export default CTA;