import Aos from "aos";
import { useEffect } from "react";
import { RiJavascriptFill } from "react-icons/ri";
import { FaBootstrap, FaNode, FaReact } from "react-icons/fa";
import { SiExpress, SiFirebase, SiJsonwebtokens, SiMongodb, SiStripe, SiTailwindcss } from "react-icons/si";
import { BiLogoFigma } from "react-icons/bi";

const Skills = () => {

    useEffect(() => {
        Aos.init({ easing: "linear" });
    }, []);

    return (
        <section className="py-24 bg-[#050810]" id="skills">
            <h2 className="text-4xl text-white font-semibold text-center uppercase w-fit mx-auto shadow-white 
                shadow-md px-8 py-3 border-0 border-[#050810] rounded-lg bg-transparent">
                Skills
            </h2>
            <div className="mt-24 max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-10 text-black">
                <div className="bg-white flex justify-center items-center px-8 py-4 rounded-md gap-3" data-aos="flip-down">
                    <FaReact className="text-5xl text-sky-600" />
                    <h4 className="text-3xl font-semibold">React JS</h4>
                </div>
                <div className="bg-white flex justify-center items-center px-8 py-4 rounded-md gap-3" data-aos="flip-down">
                    <RiJavascriptFill className="text-5xl text-yellow-500" />
                    <h4 className="text-3xl font-semibold">JavaScript</h4>
                </div>
                <div className="bg-white flex justify-center items-center px-8 py-4 rounded-md gap-3" data-aos="flip-down">
                    <SiTailwindcss className="text-5xl text-sky-500" />
                    <h4 className="text-3xl font-semibold">Tailwind CSS</h4>
                </div>
                <div className="bg-white flex justify-center items-center px-8 py-4 rounded-md gap-3" data-aos="flip-down">
                    <FaBootstrap className="text-5xl text-purple-700" />
                    <h4 className="text-3xl font-semibold">Tailwind CSS</h4>
                </div>
                <div className="bg-white flex justify-center items-center px-8 py-4 rounded-md gap-3" data-aos="flip-down">
                    <FaNode className="text-5xl text-green-700" />
                    <h4 className="text-3xl font-semibold">Node JS</h4>
                </div>
                <div className="bg-white flex justify-center items-center px-8 py-4 rounded-md gap-3" data-aos="flip-down">
                    <SiExpress className="text-5xl" />
                    <h4 className="text-3xl font-semibold">Express JS</h4>
                </div>
                <div className="bg-white flex justify-center items-center px-8 py-4 rounded-md gap-3" data-aos="flip-down">
                    <SiMongodb className="text-5xl text-green-700" />
                    <h4 className="text-3xl font-semibold">MongoDB</h4>
                </div>
                <div className="bg-white flex justify-center items-center px-8 py-4 rounded-md gap-3" data-aos="flip-down">
                    <SiFirebase className="text-5xl text-warning" />
                    <h4 className="text-3xl font-semibold">Firebase</h4>
                </div>
                <div className="bg-white flex justify-center items-center px-8 py-4 rounded-md gap-3" data-aos="flip-down">
                    <SiStripe className="text-5xl text-purple-500" />
                    <h4 className="text-3xl font-semibold">Stripe Payment</h4>
                </div>
                <div className="bg-white flex justify-center items-center px-8 py-4 rounded-md gap-3" data-aos="flip-down">
                    <SiJsonwebtokens className="text-5xl text-sky-400" />
                    <h4 className="text-3xl font-semibold">JWT</h4>
                </div>
                <div className="bg-white flex justify-center items-center px-8 py-4 rounded-md gap-3" data-aos="flip-down">
                    <BiLogoFigma className="text-5xl text-red-600" />
                    <h4 className="text-3xl font-semibold">Figma</h4>
                </div>
            </div>
        </section>
    );
};

export default Skills;