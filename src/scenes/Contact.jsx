import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const Contact = () => {
   const {
      register,
      trigger,
      formState: { errors },
   } = useForm();

   const onSubmit = async (e) => {
      const isValid = await trigger();

      if (!isValid) {
         e.preventDefault();
      }
   };

   return (
      <section id="contact" className="py-48">
         <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
               hidden: { opacity: 0, y: 50 },
               visible: { opacity: 1, y: 0 },
            }}
         >
            <div className="relative h-32">
               <div className="z-10">
                  <p className="font-playfair font-semibold text-5xl">01</p>
                  <p className="font-playfair font-semibold text-3xl mt-3">
                     Imaganative
                  </p>
               </div>
               <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
            </div>
         </motion.div>
      </section>
   );
};

export default Contact;
