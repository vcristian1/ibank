import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { motion } from "framer-motion";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="features" className="flex md:flex-row flex-col sm:py-16 py-6 md:ml-16 ml-6">
    <motion.div 
     className={`flex-1 ${styles.flexStart} flex-col`}
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true, amount: 0.5 }}
     transition={{ delay: .25, duration: 0.5 }}
     variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
     }} 
    >
      <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
        You do the business, <br className="sm:block hidden" /> we’ll handle
        the money.
      </h2>
      <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5">
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds
        of credit cards on the market.
      </p>

      <Button styles={`mt-10`} />
    </motion.div>

    <motion.div 
     className={`${layout.sectionImg} flex-col mr-6`}
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true, amount: 0.5 }}
     transition={{ delay: 1.25, duration: 0.5 }}
     variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
     }} 
    >
      {features.map((feature, index) => (
        <FeatureCard 
         key={feature.id} {...feature} index={index}
        />
      ))}
    </motion.div>
  </section>
);

export default Business;
