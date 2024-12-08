import './Footer.css'
import utube from "../../assets/youtube_icon.png";
import twitter_icon from "../../assets/twitter_icon.png";
import insta from "../../assets/instagram_icon.png";
import facebook_icon from "../../assets/facebook_icon.png";

function Footer() {
  return (
    <div className='footer'>
      <div className="footer-icons">
      <img src={utube} alt="" />
      <img src={twitter_icon} alt="" />
      <img src={insta} alt="" />
      <img src={facebook_icon} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Perferences</li>
        <li>Coporate Information</li>
        <li>Contact Us</li>
        <p className="copyRight-text">&#169; 1997-2024 Netflix,Inc.</p>
      </ul>
    </div>
  )
}

export default Footer

