import { Carousal } from "../Carousal/Carousal";
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import { Services } from "../Services/Services";
import { Team } from "../Team/Team";
import { Header } from "../Header/Header";



export const Menu = () => {
    return <>
        <section id="header"> {/*section id='header' => means whenever click home page href='#header' it navigate that mentioned page */} 
            <Header />
        </section>
        <section id="home">
            <Carousal />
        </section>
        <section id="about">
            <About />
        </section>
        <section id="services">
            <Services />
        </section>
        <section id="team">
            <Team />
        </section>
        <section id="contact">
            <Contact />
        </section>
    </>
}     