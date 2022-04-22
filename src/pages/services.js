import * as React from "react";
import "./service.css";
import branding from "../assets/branding.jpg";
import branding1 from "../assets/branding1.jpeg";
import branding3 from "../assets/branding3.jpeg";

import { Link } from 'react-router-dom';


const Service = () => {
	return (
		<div className="mb-5">

<div className=" text-center container mb-5 ">

<h4 className="text222"> Our sole goal is to bring your vision to life</h4>

<p className="  p-text text-center">
 Our teams are purpose-built around our client’s unique business challenges, and they bring multidisciplinary
 creative thinking to every stage of the engagement
</p>

<Link to="/about"> <button type="button" className=" btn1 btn btn-danger btn-rounded">Learn More </button></Link>

</div>




<div className=" home-section container ">
  <div className="row">
    <div className="col-md-6 mt-5">
      <img src={branding} className="image1" alt="Not Found " />
    </div>
    <div className="col-md-6  mt-5 ">
      <h4 className="brand-text">BRAND IDENTITY + POSITIONING </h4>
      <p className="text3"> Today’s customers expect the brands they interact with to have an opinion. To take a stance. To give a sh*t. <br />
        <br />We design brands that connect to audiences through shared culture and values, and that explore the cultural tensions that determine loyalties and behaviours. <br />
        <br /> Brand Strategy <br /> Brand Naming <br /> Brand Messaging <br /> Visual Identity <br />
      </p>
      <Link to="/connect">   <button type="button" className=" btn1 btn btn-danger btn-rounded">STARTING FROM $4000 </button></Link>
    </div>


    <div className="col-md-6 mt-5">
      <img src={branding1} className="image1" alt="Not Found " />
    </div>
    <div className="col-md-6  mt-5 ">
      <h4 className="brand-text">WEB DESIGN + DEVELOPMENT </h4>
      <p className="text3"> We design and develop industry-leading websites that define categories and position our
       clients to succeed in an interconnected world. Most importantly, we build them the right way; scaleable, 
       fast, and with your users’ needs and expectations top of mind.
       
       <br /> <br /> Strategy <br /> UX + UI Design <br /> Usability Testing <br /> Technical Planning <br /> 
       Development <br /> Quality Assurance <br /> Ongoing Iteration<br/>

        </p>
      
        <Link to="/connect">  <button type="button" className=" btn1 btn btn-danger btn-rounded">STARTING FROM $8000 </button></Link>
    </div>

    <div className="col-md-6 mt-5">
      <img src={branding3} className="image1" alt="Not Found " />
    </div>
    <div className="col-md-6  mt-5 ">
      <h4 className="brand-text">DIGITAL PRODUCTS + SERVICES </h4>
      <p className="text3"> Since the beginning, we’ve believed that software can change the world. Combining 
      agile development with strategic thinking, our digital products and services bridge the gap between
       physical and digital experiences to make clients’ digital ambitions a reality.
       
       <br /> <br /> MVP + Product Roadmaps <br /> Market + Business Validation <br /> Prototyping <br /> Usability Testing <br /> 
       Feature Development 

        </p>
      
        <Link to="/connect">  <button type="button" className=" btn1 btn btn-danger btn-rounded">STARTING FROM $10,000 </button></Link>
    </div>


  </div>
</div>




<div className="home-section text-center container mb-5 mt-5">

<h6 className="text4"> Let's work together Get in touch</h6>

<Link to="/connect">  <button type="button" className=" btn1 btn btn-danger btn-rounded">GET IN TOUCH </button></Link>


<hr className="hr"/>
</div>





		</div>
	);
};

export default Service;
