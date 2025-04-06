import { useForm, ValidationError } from "@formspree/react";
import linkedin from "../assets/linkedin.svg";
import git from "../assets/git.svg";
import twitter from "../assets/twitter.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import Loading from "./Loading";

const Contact = () => {
    const refHeading = useRef(null);
    const inViewHeading = useInView(refHeading);
    const refContent = useRef(null);
    const inViewContent = useInView(refContent);

    const [show, setShow] = useState(false);
    // const formId = import.meta?.env?.VITE_FORM_ID;
    // const [state, handleSubmit] = useForm(formId);
    // const [formData, setFormData] = useState({
    //     email: "",
    //     subject: "",
    //     message: "",
    // });

    const variants1 = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
    };
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // useEffect(() => {
    //     if (state?.succeeded) {
    //         setShow(true);
    //         setFormData({
    //             email: "",
    //             subject: "",
    //             message: "",
    //         });
    //     }
    // }, [state?.succeeded]);

    return (
        <section className=" sm:px-8 pt-[80px]" id="contact">
            <motion.div
                ref={refHeading}
                variants={variants1}
                initial="initial"
                animate={inViewHeading ? "animate" : "initial"}
                transition={{ duration: 0.6 }}
                className="flex gap-4 items-center"
            >
                <h3 className="text-textWhite text-3xl sm:text-5xl font-[800]">
                    Get In Touch
                </h3>
                <div className="min-w-0 flex-grow mt-2 h-[4px] bg-textWhite"></div>
            </motion.div>
            <div className="grid md:grid-cols-2 mt-4 md:mt-10 py-12 gap-4 relative">
                <motion.div
                    ref={refContent}
                    initial={{ opacity: 0, y: -50 }}
                    animate={
                        inViewContent
                            ? { opacity: 1, y: 0 }
                            : { opacity: 1, y: -50 }
                    }
                    transition={{ duration: 1 }}
                >
                    <h5 className="text-2xl font-bold leading-9 text-textWhite my-2">
                        Let&apos;s Connect
                    </h5>
                    <p className="text-textWhite max-w-md">
                        I&apos;m actively seeking new opportunities, and I
                        welcome your messages. Whether you have inquiries or
                        simply want to say hello, feel free to reach out. <br />
                        I&apos;ll try my best to get back to you!
                    </p>
                    <div className="flex flex-row gap-5 mt-6">
                        <a
                            href="http://github.com/FC91thunderbird"
                            className="relative group hover:-translate-y-[2px] transition-all duration-500 ease-in-out "
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <BsGithub className="w-7 h-7" />
                            <span className="text-textLight text-xs px-2 opacity-0 group-hover:opacity-100 absolute top-10 -left-3 w-fit">
                                Github
                            </span>
                        </a>
                        <a
                            href="#"
                            className="relative group hover:-translate-y-[2px] transition-all duration-500 ease-in-out "
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={linkedin} alt="Linkedin Icon" />
                            <span className="text-textLight text-xs px-2 opacity-0 group-hover:opacity-100 absolute top-10 -left-4 w-fit">
                                Linkedin
                            </span>
                        </a>
                        <a
                            href="#"
                            className="relative group hover:-translate-y-[2px] transition-all duration-500 ease-in-out "
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={twitter} alt="twitter Icon" />
                            <span className="text-textLight text-xs px-2 opacity-0 group-hover:opacity-100 absolute top-10 -left-3 w-fit">
                                Twitter
                            </span>
                        </a>
                    </div>
                </motion.div>
                <motion.div
                    ref={refContent}
                    initial={{ opacity: 0, y: -50 }}
                    animate={
                        inViewContent
                            ? { opacity: 1, y: 0 }
                            : { opacity: 1, y: -50 }
                    }
                    transition={{ duration: 1 }}
                    className="mt-10 md:mt-0"
                >
                    {/* after form submission greetings */}
                    
                        <div className="mt-6 w-[80%] flex items-center">
                            <p className="text-md text-textPara ">
                                Thank you for reaching out! I appreciate your
                                interest and will get back to you as soon as
                                possible. In the meantime, feel free to explore
                                more of my portfolio.
                            </p>
                        </div>
                    
                </motion.div>
            </div>

            <footer className="flex items-center p-6 text-center">
                <span className="w-full text-textPara">
                    All Rights Reserved © {new Date().getFullYear()} - Amol Mali
                </span>
            </footer>
        </section>
    );
};

export default Contact;
