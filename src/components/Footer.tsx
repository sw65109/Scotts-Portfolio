import personalLogo from '@/assets/personal logo.png'
import '@/components/Footer.css'

type FooterProps = {
    onOpenModal: () => void;
};

const Footer = ({ onOpenModal }: FooterProps) => (
    <footer>
        <div className="container">
            <div className="row footer__row">
                <figure>
                    <img className="footer__logo--img" src={personalLogo} alt="Scott Weller logo"  />
                </figure>
                <div className="footer__social--list">
                    <a 
                      className="footer__social--link 
                      link__hover-effect 
                      link__hover-effect--white" 
                      href="https://github.com/sw65109" 
                      target="_blank" 
                      rel="noreferrer"
                    >
                    GitHub
                    </a>
                    <a 
                      className="footer__social--link 
                      link__hover-effect 
                      link__hover-effect--white" 
                      href="https://www.linkedin.com/in/scott-weller-b2b87a365" 
                      target="_blank" 
                      rel="noreferrer"
                    >
                      LinkedIn  
                    </a>
                    <button 
                      className="footer__social--link 
                      link__hover-effect 
                      link__hover-effect--white" 
                      onClick={onOpenModal}
                    >
                        Contact
                    </button>
                    <a 
                      className="footer__social--link 
                      link__hover-effect 
                      link__hover-effect--white" 
                      href="/assets/Resume.pdf" 
                      target="_blank" 
                      rel="noreferrer"
                    >
                        Resume
                    </a>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;