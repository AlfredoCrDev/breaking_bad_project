import React from 'react';
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer-distributed">
        <div className="footer-right">
          <a href='' className=''> <FaLinkedin style={{ fontSize: 30 }} /></a>
          <a href='' className=''> <FaTwitterSquare style={{ fontSize: 30 }} /></a>
          <a href='' className=''> <FaGithubSquare style={{ fontSize: 30 }} /></a>
          <a href='' className=''> <FaFacebookSquare style={{ fontSize: 30 }} /></a>
        </div>
        <div className="footer-left">

          <p className="footer-links">
            <a className="link-1" href="#">Home</a>
            <a href="#">Blog</a>
            <a href="#">Pricing</a>
            <a href="#">About</a>
            <a href="#">Faq</a>
            <a href="#">Contact</a>
          </p>
          <p>A & D Enterprises &copy; 2022</p>
        </div>
      </div>
    </>
  )
}

export default Footer