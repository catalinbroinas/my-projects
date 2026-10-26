import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";

function Footer() {
  return (
    <footer className="footer">
      <nav className="footer__links" aria-label="Professional links">
        <a 
          href="https://catalinbroinas.netlify.app/"
          className="footer__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Portfolio
        </a>

        <a 
          href="https://catalinbroinas.github.io/journey-of-a-web-developer/"
          className="footer__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Journey
        </a>

        <a 
          href="https://github.com/catalinbroinas"
          className="footer__link footer__link--icon"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
        >
          <FontAwesomeIcon icon={faGithub} aria-hidden="true" />
        </a>
      </nav>

      <p className="footer__text">
        © 2026 Catalin Broinas. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
