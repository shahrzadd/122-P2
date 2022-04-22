import * as React from "react";
import "./header.css";
import {Container, Navbar, Nav} from "react-bootstrap";
import logo from "../assets/logo.png"


const Header = () => {
	return (
		<div className="">
			
			<nav class="navbar navbar-expand-lg py-3 navbar-dark bg-dark shadow-sm">
  <div class="container">
    <a href="#" class="navbar-brand">
      
      <img src={logo}  width="60" alt="" className="mainheaderlogo d-inline-block align-middle mr-2" />
      
      <span class="text-uppercase font-weight-bold"></span>
    </a>

    <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"><span class="navbar-toggler-icon"></span></button>

    <div id="navbarSupportedContent" class="collapse navbar-collapse">
      <ul class="navbar-nav ml-auto">
      <li class="nav-item active "><a href="/" class="nav-link">HOME  <span class="sr-only">(current)</span></a></li>
       
        <li class="nav-item active ml-4"><a href="/about" class="nav-link">WHO WE ARE   <span class="sr-only">(current)</span></a></li>
        <li class="nav-item active ml-4"><a href="/whatwedo" class="nav-link">WHAT WE DO  <span class="sr-only">(current)</span></a></li>
        <li class="nav-item active ml-4" ><a href="/work" class="nav-link">OUR WORK  <span class="sr-only">(current)</span></a></li>
		<li class="nav-item active ml-4" ><a href="/connect" class="nav-link">HOW TO CONNECT <span class="sr-only">(current)</span></a></li>
       
       
      </ul>
    </div>
  </div>
</nav>

		</div>
	);
};

export default Header;
