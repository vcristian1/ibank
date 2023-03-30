import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import Button from './Button';
import styles from '../style';

const ContactUs = () => {
  const inputStyles = `w-full rounded-lg bg-transparent px-5 py-3 placeholder-${styles.paragraph} mt-5 border-2 border-white`

  const {
    register,
    trigger,
    formState: { errors }
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
        e.preventDefault();
    }
  }

  return (
    <section id="contact" className=''>
        <motion.div
        >
            {/* FORM AND IMAGE HERE */}
            <div className="justify-between gap-8 md:flex">
                <motion.div
                 className='mt-10 basis-3/5 md:mt-0 '
                >
                    <form 
                     action="https://formsubmit.co/09821b6ccaa4f7a4347fa2a6712cb014"
                     target="_blank"
                     onSubmit={onSubmit}
                     method="POST"
                    >
                        <input className={inputStyles} type="text" placeholder='NAME' required {...register ("name", {
                            required: true, maxLength: 100,
                        })}/>
                        {errors.name && (
                            <p className="mt-1 text-primary-500">
                              {errors.name.type === "required" && "This field is required."}
                              {errors.name.type === "maxLength" && "Max Length is 100 characters."}
                            </p>
                        )}

                        <input className={inputStyles} type="text" placeholder='EMAIL' required {...register ("name", {
                            required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        })}/>
                        {errors.email && (
                            <p className="mt-1 text-primary-500">
                              {errors.email.type === "required" && "This field is required."}
                              {errors.email.type === "pattern" && "Invalid email address."}
                            </p>
                        )}

                        <textarea
                            className={inputStyles}
                            placeholder="MESSAGE"
                            rows={5}
                            cols={50}
                            {...register("message", {
                            required: true,
                            maxLength: 2000,
                            })}
                        />
                        {errors.message && (
                            <p className="mt-1 text-primary-500">
                            {errors.message.type === "required" &&
                                "This field is required."}
                            {errors.message.type === "maxLength" &&
                                "Max length is 2000 char."}
                            </p>
                        )}
                        
                        <button
                            type="submit"
                            className="text-primary text-[18px] font-semibold mt-5 rounded-lg bg-blue-gradient px-7 py-4 transition duration-500 hover:text-white"
                        >
                            SUBMIT
                        </button>                      
                    </form>
                </motion.div>
            </div>
        </motion.div>
    </section>
  )
}

export default ContactUs