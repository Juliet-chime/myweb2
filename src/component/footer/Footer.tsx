import React from 'react';
import { Link } from 'react-router-dom';
import {
  FooterArrowUp,
  FooterHolder,
  FooterItem,
  FooterLogo,
  FooterMobility,
  FooterSocialIcon,
  LineThrough,
} from './style';
import { FaFacebook,FaInstagram, FaTwitter} from 'react-icons/fa';
import logo from '../../component/img/logo.png';
import Input from '../input';
import Button from '../button/Button';
import arrowUp from '../../component/img/arrow-up-small-footer.svg';

const Footer = () => {
  return (
    <FooterHolder>
      <div className="footerNewsWrap">
        <div className="newText">
          <h1>
            Be the first to receive the latest news, events and product updates.
          </h1>
        </div>

        <div className="inputWrap">
          <div style={{ width: '90%' }}>
            <Input type="text" width="94%" />
          </div>
          <Button
            type="submit"
            text="Suscribe"
            onClick={() => console.log('hello')}
            width="50%"
            background="rgb(226, 29, 0)"
            borderRadius="8px"
            fontSize="14px"
            color="white"
            margin="10px 0px"
          />
        </div>
      </div>

      <div className="footerWrap">
        <div className="footerWrapText">
          <FooterLogo>
            <div className="footerLogo">
              <Link to="/about">
                <img src={logo} alt="" />
              </Link>
            </div>
          </FooterLogo>
          <FooterItem>
            <h2>Company</h2>
            <Link to="/about">About Us</Link>
            <Link to="/busterminal">Bus Terminal</Link>
            <Link to="/ambassador">Become an Ambassador</Link>
            <Link to="/captain">Become a Captain</Link>
          </FooterItem>
          <FooterItem>
            <h2>Experience</h2>
            <Link to="/travels">Travel and Tours</Link>
            <Link to="/safety">Safety</Link>
            <Link to="/contactus">Contact Us</Link>
            <Link to="/faqs">FAQs</Link>
          </FooterItem>
          <FooterItem>
            <h2>Terms</h2>
            <Link to="/privacy">Privacy &amp; policy</Link>
            <Link to="/terms">Terms &amp;</Link>
            <Link to="/luggage">Luggage Allowance</Link>
          </FooterItem>
          <FooterSocialIcon>
            <h2>Connect with us</h2>

            <div>
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
            </div>
          </FooterSocialIcon>
        </div>
        <br />
        <br />

        <div className="footerLineWrap">
          {/* <hr></hr> */}
          <LineThrough></LineThrough>
          <FooterArrowUp>
            <img src={arrowUp} alt="" />
          </FooterArrowUp>
          <FooterMobility>GIG Mobility</FooterMobility>
        </div>
      </div>
    </FooterHolder>
  );
};

export default Footer;
