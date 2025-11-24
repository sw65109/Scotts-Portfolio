import personalLogo from '@/assets/personal logo.png';
import '@/components/Navbar.css';

type NavbarProps = {
  onOpenModal: () => void;
  onToggleTheme: () => void;
  isDarkMode: boolean;
};

const Navbar = ({ onOpenModal, onToggleTheme, isDarkMode }: NavbarProps) => (
  <nav className="navbar">
    <figure>
      <img id="personal-logo" src={personalLogo} alt="Scott Weller logo" />
    </figure>
    <ul className="nav__link--list">
      <li className="nav__link">
        <a href="#languages" className="nav__link--anchor link__hover-effect link__hover-effect--black">
          Languages
        </a>
      </li>
      <li className="nav__link">
        <a href="#projects" className="nav__link--anchor link__hover-effect link__hover-effect--black">
          Projects
        </a>
      </li>
      <li className="nav__link">
        <a href='mailto:sjweller65109@gmail.com'
          className="nav__link--anchor nav__link--anchor-primary"
          onClick={onOpenModal}
        >
          Contact
        </a>
      </li>
      <li className="nav__link click">
        <button
          className="nav__link--anchor link__hover-effect link__hover-effect--black"
          onClick={onToggleTheme}
          aria-pressed={isDarkMode}
        >
          <i className="fas fa-adjust" aria-hidden="true" />
          <span className="sr-only">Toggle theme</span>
        </button>
      </li>
    </ul>
  </nav>
);

export default Navbar;