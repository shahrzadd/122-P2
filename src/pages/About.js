import * as React from "react";
import "./about.css";

import Dubai from "../assets/Dubai.jpeg"
import London from "../assets/London.jpeg"
import Toronto from "../assets/Toronto.jpeg"
import whowe from "../assets/whowe.png"
import { Link } from 'react-router-dom';



const About = () => {
	return (
		<div className="">

<div className=" text-center container mb-5 ">

<h4 className="text22"> Hey, we're club 80’s</h4>

<p className="  p-text text-center">
We're a digital design agency based in Toronto.
we are here to assist you with all of your digital needs;
From Web Design and Branding, all the way to Advertisement
</p>

<Link to="/about"><button type="button" className=" btn1 btn btn-danger btn-rounded">OUR SERVICES  </button></Link>

</div>



<div className="homeSection text-center container">

<h4 className="text-about">We have worked with clients from around the world </h4>


</div>


<div className="container">
<div class="row">
  <div class="column">
    <img src={Dubai} alt="Snow" style={{width:"100%"}} />
  </div>
  <div class="column">
    <img src={Toronto} alt="Forest" style={{width:"100%"}} />
  </div>
  <div class="column">
    <img src={London} alt="Mountains" style={{width:"100%"}} />
  </div>
</div>
</div>



<div className="homeSection text-center container">

<h4 className="text-about2">OUR MISSION </h4>


</div>




<div className=" home-section container ">
  <div className="row">
    <div className="col-md-6 mt-5">
      <img src={whowe} className="image1" alt="Not Found " />
    </div>
    <div className="col-md-6  mt-5 ">
      <h4 className="brand-text"> INSIGHT DRIVEN </h4>
      <p className="text-3"> 
	  We use the power of research and data to uncover insights that lead to transformational change
	   
      </p>

	  <h4 className="brand-text">  USER CENTRIC  </h4>
      <p className="text-3"> 
	  We create experiences that improve our collective human experience.
	   
      </p>

	  <h4 className="brand-text">   SYSTEMATICALLY TESTED  </h4>
      <p className="text-3"> 
	  We validate our solutions by creating testable experiments that produce exceptional outcomes.
	 
      </p>

	  <h4 className="brand-text">   FINANCIALLY IMPACTFUL </h4>
      <p className="text-3"> 
	  We deliver work that has an immediate, substantial, and sustained impact on your brand.
	
      </p>
     
    </div>
	</div>
	</div>






	<div className=" text-center container mb-5 ">

<h4 className="text-5"> We believe in making the best work, and being the best to work with</h4>



<Link to="/connect"><button type="button" className=" btn1 btn btn-danger btn-rounded">GET IN TOUCH  </button></Link>

<hr className="hr"/>

</div>




		</div>
	);
};

export default About;
