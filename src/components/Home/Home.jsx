import { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import ContactMe from "../ContactMe/ContactMe";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import Portfolio from "../Portfolio/Portfolio";
import Skills from "../Skills/Skills";

const Home = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2500)
    }, []);

    return (
        <>
            {
                loading ? <div className="w-full h-screen -mt-[104px] bg-black flex justify-center items-center">
                    <PropagateLoader color="#FFFFFF" loading={loading} />
                </div> : <div>
                    <NavBar></NavBar>
                    <Banner></Banner>
                    <AboutMe></AboutMe>
                    <Skills></Skills>
                    <Portfolio></Portfolio>
                    <ContactMe></ContactMe>
                    <Footer></Footer>
                </div>
            }
        </>
    );
};

export default Home;