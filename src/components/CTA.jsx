import styles from "../style";
import Button from "./Button";
import ContactUs from "./ContactUs";

const CTA = () => (
  <section id="contact" className={`md:ml-16 md:mr-16 ml-6 mr-6 ${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Let’s try our service now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
      <ContactUs />
    </div>
  </section>
);

export default CTA;