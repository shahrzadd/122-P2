import * as React from "react";
import {Nav} from "react-bootstrap";
import "./footer.css";

import { Link } from 'react-router-dom';

import logo from "../assets/logo.png"

const Footer = () => {
	const handleClick = () => {
		window.open("https://www.pinterest.ca/shahrzads");
	  };
	  const handleClick1 = () => {
		window.open("https://www.instagram.com/club80s.ca/");
	  };

	  const handleClick2 = () => {
		window.open("https://twitter.com/club80s_ca");
	  };
	 
	  
	return (
		<div className="">
			

			<div class="container mt-3">

  
  
<div class="d-flex justify-content-between bg-black ">
    <div class="p-2 ">
    <img  className="footer-logo" src={logo}  alt="Not Found" />
</div>

<div class="p-2">
		<div class="d-flex flex-row bd-highlight mb-3">
		<div class="p-2 bd-highlight"> <a className="footer-a" href="/about"> WHO WE ARE </a></div>
		<div class="p-2 bd-highlight"><a className="footer-a" href="/whatwedo"> WHAT WE DO</a></div>
		<div class="p-2 bd-highlight"><a className="footer-a" href="/work">OUR WORK</a></div>
		<div class="p-2 bd-highlight"><a className="footer-a" href="/connect">HOW TO CONNECT</a></div>
</div>



	</div>


    <div class="p-2 ">
	<a  onClick={handleClick} href="#" class="fa fa-pinterest"></a>
	<a onClick={handleClick1} href="#" class="fa fa-instagram"></a>
	<a onClick={handleClick2} href="#" class="fa fa-twitter"></a>
	

	</div>
  </div>
 

</div>




		</div>
	);
};

export default Footer;
