import React from 'react';
import DevAnimation from '../../assets/animations/developer-3.json';
import MouseScroll from '../../assets/animations/mouse-scroll.json';
import Lottie from 'lottie-react';
import { Typewriter } from 'react-simple-typewriter';
import ParticlesCompo from '../ParticlesCompo/ParticlesCompo';
import { Link } from 'react-router-dom';

const Banner = () => {

    const handleType = (count) => {
        // access word count number
        console.log(count)
    }

    const handleDone = () => {
        console.log(`Done after 5 loops!`)
    }

    return (
        <section className="lg:h-[660px] relative">
            <div>
                <ParticlesCompo></ParticlesCompo>
            </div>
            <div className='w-full h-full lg:h-[94%] flex flex-col lg:flex-row justify-center items-center'>
                <div className='h-full px-4 lg:px-0 lg:w-1/2 text-3xl font-bold text-green-500 text-center lg:text-left'>
                    <div className="h-32 lg:h-9 flex flex-col lg:flex-row lg:ms-16 mt-12 lg:mt-36">
                        <p className="mr-4 text-white">
                            Hey, I am
                        </p>
                        <Typewriter
                            words={['MD. Ashraf-Ul-Aanam Swapnil', 'A React Web Developer', 'A MERN Stack Developer']}
                            loop={0}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                            onLoopDone={handleDone}
                            onType={handleType}
                        />
                    </div>
                    <p className="lg:w-3/4 lg:ms-16 mt-6 text-white text-lg font-normal capitalize leading-7">
                        I create modern web application using MERN stack. Crafting beautiful, scalable and
                        responsive websites using react for me is as natural as shooting spider web for
                        spider-man is! I guess, playing with web is favorite for both us!
                    </p>
                    <div className="lg:ms-16 mt-12 lg:mt-16 flex flex-col-reverse lg:flex-row gap-7">
                        <Link to="https://drive.google.com/file/d/11_JIt90f3mM1_XKE4lUtSCXhearU1lbR/view?usp=drive_link" download className="px-7 py-4 rounded-md bg-green-600 text-white text-lg font-semibold hover:bg-green-700 border-0 capitalize">Hire Me</Link>
                        <Link to="https://drive.google.com/file/d/11_JIt90f3mM1_XKE4lUtSCXhearU1lbR/view?usp=drive_link" download className="px-7 py-4 rounded-md bg-red-600 text-white text-lg font-semibold hover:bg-red-700 border-0 capitalize">Download Resume</Link>
                    </div>
                </div>
                <div className='h-full mt-12 lg:mt-12 lg:w-1/2'>
                    <Lottie animationData={DevAnimation} className="h-full" />
                </div>
            </div>
            <div className="flex justify-center mt-12">
                <Lottie animationData={MouseScroll} className="w-16 h-16 absolute bottom-5" />
            </div>
        </section>
    );
}

export default Banner;