import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import ContactMe from "../ContactMe/ContactMe";
import NavBar from "../NavBar/NavBar";
import Portfolio from "../Portfolio/Portfolio";
import Skills from "../Skills/Skills";

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Portfolio></Portfolio>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;