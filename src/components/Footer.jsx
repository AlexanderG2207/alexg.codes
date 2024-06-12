import React from 'react';
import './ComponentStyles.css';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-left">
                <p>Created with Vite, React and JavaScript. Hosted on GitHub!</p>
            </div>
            <div className="footer-center">
                <p>© 2024 Alexander Görtzen</p>
            </div>
            <div className="footer-right">
                <a href="https://github.com/alexanderg2207" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/alexanderg%C3%B6rtzen/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="https://www.instagram.com/alexgortzen" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </div>
        </footer>
    );
};

export default Footer;
