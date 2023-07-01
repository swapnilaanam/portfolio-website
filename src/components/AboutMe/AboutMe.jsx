import Aos from 'aos';
import 'aos/dist/aos.css';
import SwapImg from '../../assets/images/SwapnilAanam.jpg';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";

const AboutMe = () => {

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <section className="pt-40 px-4 lg:px-0 bg-[#050810]" id="about">
            <div className="max-w-7xl mx-auto overflow-hidden lg:overflow-visible">
                <h2 className="text-4xl text-white font-semibold text-center uppercase w-fit mx-auto shadow-white 
                shadow-md px-8 py-3 border-0 border-[#050810] rounded-lg bg-transparent">
                    About Me
                </h2>
                <div className="mt-24 flex flex-col lg:flex-row justify-center items-start gap-4 lg:gap-24">
                    <div className="lg:w-1/2 flex justify-center items-center">
                        <div className="p-8 lg:p-10 bg-white rotate-2 shadow-xl" data-aos="fade-right">
                            <img src={SwapImg} alt="Swapnil Aanam" className="w-[330px] h-[330px] shadow-xl border-2 border-black -rotate-2" />
                        </div>
                    </div>
                    <div className="lg:w-1/2 mt-12" data-aos="fade-left">
                        <p className="text-white text-center lg:text-left text-lg font-normal">
                            My name is MD. Ashraf-Ul-Aanam Swapnil. I am from Sylhet, Bangladesh. Currently I am completing my bachelor graduation in computer science from Metropolitan University, Bangladesh. My passion is to be a good React web developer. Over the last 6 months, I  have learned React JS, Express JS, Node JS, MongoDB and relevant technologies. I have participated in a few on-site team programming contents during my university days.
                        </p>
                        <div className="mt-10 flex flex-col lg:flex-row gap-7">
                            <Link to="tel:+8801685016531" target="_blank" className="btn text-base">
                                <FaPhone /> Phone
                            </Link>
                            <Link to="mailto:swapnilaanam211@gmail.com" target="_blank" className="btn text-base">
                                <FaMailBulk /> Mail
                            </Link>
                            <Link to="https://www.linkedin.com/in/md-ashraf-ul-aanam-swapnil/" target="_blank" className="btn text-base">
                                <FaLinkedin /> LinkedIn
                            </Link>
                            <Link to="https://github.com/swapnilaanam" target="_blank" className="btn text-base">
                                <FaGithub /> GitHub
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;