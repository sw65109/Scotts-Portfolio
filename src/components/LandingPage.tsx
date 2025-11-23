import resumePDF from '@/assets/Resume.pdf'
import "@/components/LandingPage.css"
import Navbar from '@/components/Navbar';

type LandingPageProps = {
  onOpenModal: () => void;
  onToggleTheme: () => void;
  isDarkMode: boolean;
}

const LandingPage = ({ onOpenModal, onToggleTheme, isDarkMode, }: LandingPageProps) => (
  
    <section id="landing-page">
      <Navbar
      onOpenModal={onOpenModal}
      onToggleTheme={onToggleTheme}
      isDarkMode={isDarkMode} 
      />

      <header className="header">
        <div className="header__content">
            <h1 className="title">Hey</h1>
            <h1 className="title blue">I'm Scott.</h1>
            <p className="header__para">
                I'm a <span className="blue">Junior Frontend Software Developer</span>. I have a strong passion for building web applications.
                <br />
                Here's a little bit more{" "}
                <button 
                  className="blue 
                  click 
                  header__inline-button" 
                  onClick={onOpenModal}
                >
                    about me
                </button>
                .             
            </p>
            <div className="social__list">
                <a  className="social__link click" href="https://www.linkedin.com/in/scott-weller-b2b87a365" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-linkedin-in" aria-hidden="true" />
                    <span className="sr-only">LinkedIn</span>
                </a>
                <a  className="social__link click" href="https://github.com/sw65109" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-square-github" aria-hidden="true" />
                    <span className="sr-only">GitHub</span>
                </a>
                <a  className="social__link click" href={resumePDF} target="_blank" rel="noreferrer">
                    <i className="fa-solid fa-file-circle-plus" aria-hidden="true" />
                    <span className="sr-only">Resume</span>
                </a>
            </div>
        </div>
      </header>

      <button className="mail__btn click" onClick={onOpenModal} aria-label="Open contact form">
        <i className="fa-solid fa-envelope" />
      </button>

      <a className="scroll" href="#projects" aria-label="Scroll to projects">
        <div className="scroll__icon click" />
      </a>
    </section>
  
);


export default LandingPage;