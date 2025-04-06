import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { workList } from "../constants/Work";

const Work = () => {
    const refHeading = useRef(null);
    const inViewHeading = useInView(refHeading);

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
          },
        },
      };
      
      const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      };
      
    const variants1 = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
    };

    return (
        <section className="sm:px-8 py-[80px]" id="work">
        <motion.div
            ref={refHeading}
            variants={variants1}
            initial="initial"
            animate={inViewHeading ? "animate" : "initial"}
            transition={{ duration: 0.6 }}
            className="flex gap-4 items-center"
        >
            <h3 className="text-textWhite text-3xl sm:text-5xl font-[800]">
                Work Experience
            </h3>
            <div className="min-w-0 flex-grow mt-2 h-[4px] bg-textWhite"></div>
        </motion.div>
    
        <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {workList.map((work) => (
                <motion.div
                    key={work.id}
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-[#1e1e1e] hover:bg-[#2a2a2a] border border-gray-700 p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300"
                >
                    <h4 className="text-2xl font-semibold text-textWhite mb-1">{work.position}</h4>
                    <p className="text-lg text-gray-300">{work.company}</p>
                    <p className="text-sm text-gray-400 mb-3">{work.year}</p>
                    <p className="text-textWhite leading-relaxed">{work.description}</p>
                </motion.div>
            ))}
        </div>
    </section>
    
    );
};

export default Work;