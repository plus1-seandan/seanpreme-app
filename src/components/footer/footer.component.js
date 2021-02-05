import { Center, Divider, Link } from "@chakra-ui/react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import PinterestIcon from "@material-ui/icons/Pinterest";
import YouTubeIcon from "@material-ui/icons/YouTube";

import CustomButton from "../custom-button/custom-button.component";
import "./footer.styles.scss";

const CompanyInfo = () => (
  <div className="footer-column company-info">
    <h1>COMPANY INFO</h1>
    <Link>About Us</Link>
    <Link>Careers</Link>
    <Link>Wanna Collab?</Link>
    <Link>Vendors</Link>
  </div>
);
const CustomerCare = () => (
  <div className="footer-column customer-care">
    <h1>CUSTOMER CARE</h1>
    <Link>Track My Order</Link>
    <Link>Need Help?</Link>
    <Link>Returns</Link>
    <Link>Shipping</Link>
    <Link>Contact Us</Link>
  </div>
);
const QuickLinks = () => (
  <div className="footer-column quick-links">
    <h1>QUICK LINKS</h1>
    <Link>My Account</Link>
    <Link>Size Guide</Link>
    <Link>Store Locations</Link>
    <Link>Gift Cards</Link>
    <Link>Reviews</Link>
  </div>
);

const FooterActions = () => (
  <div className="sign-up">
    <h2>GET EXCLUSIVE DISCOUNTS & NEW STYLES</h2>
    <p>
      Be the first to know about our secret sales, product giveaways, collection
      drops, most-wanted restocks, & more!
    </p>
    <CustomButton inverted>SIGN UP</CustomButton>
  </div>
);

const FooterTop = () => (
  <div className="follow">
    <h1>FOLLOW US</h1>
    <InstagramIcon />
    <FacebookIcon />
    <GitHubIcon />
    <PinterestIcon />
    <YouTubeIcon />
  </div>
);
const FooterBottom = () => (
  <div className="legal">
    <Center>
      <Link>
        <p>Privacy Policy</p>
      </Link>
      <Divider orientation="vertical" colorScheme="purple" />
      <Link>
        <p>Terms of Service</p>
      </Link>
      <Divider orientation="vertical" colorScheme="purple" />
      <Link>
        <p>CA Supply Chains Act</p>
      </Link>
      <Divider orientation="vertical" colorScheme="purple" />
      <Link>
        <p>Do Not Sell My Information</p>
      </Link>
    </Center>
    <span>1375 E Buena Vista Dr Orlando, FL </span>
  </div>
);

const Footer = () => (
  <div className="footer">
    <div className="footer-top">
      <FooterTop />
    </div>
    <div className="footer-body">
      <CompanyInfo />
      <CustomerCare />
      <QuickLinks />
      <FooterActions />
    </div>
    <div className="footer-bottom">
      <FooterBottom />
    </div>
  </div>
);
export default Footer;
