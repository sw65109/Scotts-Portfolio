import resumePDF from "@/assets/Resume.pdf";
import heroPortrait from '@/assets/me.jpg'
import heroIllustration from '@/assets/netflixclone.png';
import "@/components/LandingPage.css";
import Navbar from "@/components/Navbar";

type LandingPageProps = {
  onOpenModal: () => void;
  onToggleTheme: () => void;
  isDarkMode: boolean;
};

const LandingPage = ({
  onOpenModal,
  onToggleTheme,
  isDarkMode,
}: LandingPageProps) => (
  <section id="about-me">
    <Navbar onOpenModal={onOpenModal} onToggleTheme={onToggleTheme} isDarkMode={isDarkMode} />

    <div className="flex flex-1">
      <div className="about-me__info row">
        <div className="about-me__info--container">
          <figure className="about-me__picture--mask">
            <img src={heroPortrait} className="about-me__picture" alt="Picture of Scott Weller" />
          </figure>

          <h1 className="about-me__info--title">
            Hey! I'm <span className="text--blue">Scott Weller</span>&nbsp;
            <span className="wave" role="img" aria-label="Waving hand">👋</span>
          </h1>

          <p className="about-me__info--para">
            I'm a junior <span className="text--blue">frontend software developer</span> with a strong passion for building web
            applications, and I'm looking forward to joining your team. I learned the ropes through{' '}
            <strong className="text--blue">Frontend Simplified</strong>. Here are some of the tech's I've used and projects I've built.
          </p>

          <div className="about-me__links">
            <a className="about-me__link social" href="https://www.linkedin.com/in/scott-weller-b2b87a365" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-linkedin" aria-hidden="true" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a className="about-me__link" href="https://github.com/sw65109" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-square-github" aria-hidden="true" />
              <span className="sr-only">GitHub</span>
            </a>
            <button className="about-me__link about-me__link--button" onClick={onOpenModal}>
              <i className="fa-solid fa-envelope" aria-hidden="true" />
              <span className="sr-only">Contact</span>
            </button>
            <a className="about-me__link" href={resumePDF} target="_blank" rel="noreferrer">
              <i className="fa-solid fa-file-pdf" aria-hidden="true" />
              <span className="sr-only">Resume</span>
            </a>
          </div>
        </div>

        <figure className="about-me__img--container" aria-hidden="true">
          <img src={heroIllustration} className="about-me__img" alt="" loading="lazy" />
        </figure>
      </div>
    </div>

    <button className="mail__btn click" onClick={onOpenModal} aria-label="Open contact form">
      <i className="fa-solid fa-envelope" />
    </button>

    <a className="scroll" href="#projects" aria-label="Scroll to projects">
      <div className="scroll__icon click" />
    </a>
  </section>
);

export default LandingPage;
