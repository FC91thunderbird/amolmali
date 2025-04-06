import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { educationList } from "../constants/Education";

const Education = () => {
    const refHeading = useRef(null);
    const inViewHeading = useInView(refHeading);


    const variants1 = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
    };

    return (
        <section className="sm:px-8 py-[80px]" id="education">
            <motion.div
                ref={refHeading}
                variants={variants1}
                initial="initial"
                animate={inViewHeading ? "animate" : "initial"}
                transition={{ duration: 0.6 }}
                className="flex gap-4 items-center"
            >
                <h3 className="text-textWhite text-3xl sm:text-5xl font-extrabold">
                    Education
                </h3>
                <div className="flex-grow mt-2 h-[4px] bg-textWhite rounded-full"></div>
            </motion.div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {educationList.map((edu, index) => {
                    const cardRef = useRef(null);
                    const isInView = useInView(cardRef, { once: true });

                    return (
                        <motion.div
                            key={index}
                            ref={cardRef}
                            variants={variants1}
                            initial="initial"
                            animate={isInView ? "animate" : "initial"}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="relative w-full rounded-2xl bg-bgDark p-6 shadow-lg shadow-slate-800 transition-all duration-500 ease-in-out hover:shadow-xl hover:shadow-textWhite/20"
                        >
                            <div className="absolute top-0 left-0 w-full h-[6px] bg-gradient-to-r from-purple-500 to-cyan-400 rounded-t-2xl"></div>
                            <h4 className="text-2xl font-semibold text-textWhite mb-2">{edu.degree}</h4>
                            <p className="text-lg text-textWhite/90">{edu.institution}</p>
                            <p className="text-sm text-textWhite/70 mb-3">{edu.year}</p>
                            <p className="text-base text-textWhite/80">{edu.description}</p>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default Education;