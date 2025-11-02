import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { FaPhoneSquareAlt, FaGithub, FaFacebook } from 'react-icons/fa';

const Footer = () => {
    const phoneNumber="+8801837952688";
    const url= `https://wa.me/${phoneNumber}`;
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-base-300 text-base-content p-10">
  <nav>
    <h6 className="footer-title">Social links</h6>
    <a className="link link-hover flex items-center gap-1"><FaGithub/>Github</a>
    <a className="link link-hover flex items-center gap-1"><FaFacebook/>Facebook</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">privacy policy</a>
  </nav>
  <nav>
    <h6 className="footer-title">Contact info</h6>
    <div className="grid grid-flow-col gap-4">
        <a href={`tel:${phoneNumber}`}>
        <FaPhoneSquareAlt/>
        </a>
        <a href={url} target="_blank">
        <BsWhatsapp/>
        </a>
    </div>
  </nav>
</footer>
        </div>
    );
};

export default Footer;