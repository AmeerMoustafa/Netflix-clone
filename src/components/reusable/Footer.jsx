import "../../styles/utilities.css";
import "../../styles/reusablecomponents/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        <a href="#">Questions? Contact us.</a>
      </p>
      <div className="footer-columns">
        <ul>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Investor Relations</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Speed Test</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Help Center</a>
          </li>
          <li>
            <a href="#">Jobs</a>
          </li>
          <li>
            <a href="#">Cookie Preferences</a>
          </li>
          <li>
            <a href="#">Legal Notices</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Account</a>
          </li>
          <li>
            <a href="#">Ways to Watch</a>
          </li>
          <li>
            <a href="#">Corporate Information</a>
          </li>
          <li>
            <a href="#">Only on Netflix</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Media Center</a>
          </li>
          <li>
            <a href="#">Terms of Use</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="language-picker flex">
        <select>
          <option>English</option>
          <option>العربية</option>
        </select>
      </div>
    </footer>
  );
};

export default Footer;
