import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import { motion } from "framer-motion";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={`${layout.sectionInfo} md:ml-16 ml-6`}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <motion.div 
     className={`md:ml-16 ml-6 md:mr-16 mr-6 ${layout.sectionImg}`}
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true, amount: 0.5 }}
     transition={{ delay: .25, duration: 0.5 }}
     variants={{
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
     }} 
    >
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </motion.div>
  </section>
);

export default CardDeal;