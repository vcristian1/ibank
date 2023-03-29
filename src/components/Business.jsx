import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const Business = () =>  (

  <section id="features" className="flex md:flex-row flex-col sm:py-16 py-6 ml-16">
    <div className={`flex-1 ${styles.flexStart} flex-col`}>
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
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeaturesCard />
      ))}
    </div>

  </section>
);

export default Business;