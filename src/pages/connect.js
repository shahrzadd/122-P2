import * as React from "react";
import "./connect.css";

import brands from "../assets/brands.jpeg";
import { Link } from "react-router-dom";

const Connect = () => {
	return (
		<div className="mb-5">


<div className=" text-center container mb-5 ">

<h4 className="text222"> Don’t be shy, say hi</h4>

<p className="  p-text text-center">
Some of the world’s most impactful products, solutions and campaigns start with a conversation.
Tell us about what you’re making and we’ll see how we can help.

</p>

<Link to="/about"><button type="button" className=" btn1 btn btn-danger btn-rounded">OUR SERVICE </button></Link>

</div>


<div className="container-fluid">

<img src={brands}  className="section2image img-responsive"/>

</div>



<div className="homeSection text-center container">

<h4 className="text-2">What would you like to talk about today? </h4>




</div>



<div className="homeSection text-center container">

<form className="text-center">
  <div class="form-group">
  
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name"/>
 </div>
  <div class="form-group">
   
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Email"/>
  </div>
 
  <div class="form-group">
   
   <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Phone Number "/>
 </div>

 <div class="form-group">
   
   <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Subject "/>
 </div>

 <div class="form-group">
    
    <textarea class="form-control" placeholder="Message" id="exampleFormControlTextarea1" rows="10"></textarea>
  </div>

  <button type="button" className=" btn1 btn btn-danger btn-rounded">SUBMIT </button>

</form>


<hr className="hr"/>

</div>




		</div>
	);
};

export default Connect;
