import * as React from "react";
import "./work.css";
import image1 from "../assets/image1.jpg"
import Crezco from "../assets/Crezco.jpg"

import Home from "../assets/home.mp4"
import Komuso from "../assets/Komuso.mp4"
import Tubik from "../assets/Tubik.mp4"
import { Link } from 'react-router-dom';




const Work = () => {

  const handleClick = () => {
    window.open("https://www.hometogo.com/");
  };

  const handleClick1 = () => {
    window.open("https://ca.komusodesign.com/");
  };

  const handleClick2 = () => {
    window.open("https://www.crezco.com/");
  };

  

	return (
		<div className="mb-5">



<div className=" text-center container mb-5 ">

<h4 className="text22"> We believe in making the best work, and being the best to work with</h4>



<Link to="/connect"><button type="button" className=" btn1 btn btn-danger btn-rounded">GET IN TOUCH </button></Link>

</div>



<div className=" home-section container ">
  <div className="row">
    <div className=" col-md-6 mt-5">
      
      {/* <img src={image1} className="image1" alt="Not Found " /> */}

      <video style={{width:"500px",height:"400px"}}controls>  
        <source src={Tubik} type="video/mp4" />  
    </video> 

   
    </div>
    <div className="col-md-6  mt-5 ">
      <h4 className="brand-text">MUSIC LEARNING APP </h4>
      <p className="text3"> UI/UX, Mobile App  <br />
      </p>
      <button type="button" className=" btn1 btn btn-danger btn-rounded">COMING SOON </button>
    </div>

    <div className=" col-md-6 mt-5">
      
      <img src={Crezco} className="image12" alt="Not Found " />

      {/* <video style={{width:"500px",height:"400px"}}controls>  
        <source src={Tubik} type="video/mp4" />  
    </video>  */}

   
    </div>
    <div className="col-md-6  mt-5 ">
      <h4 className="brand-text">CREZCO </h4>
      <p className="text3"> UI/UX, Mobile App  <br />
      </p>
      <button   onClick={handleClick2} type="button" className=" btn1 btn btn-danger btn-rounded">VISIT WEBSITE </button>
    </div>


   
   

    <div className="col-md-6 mt-5">
      {/* <img src={image1} className="image1" alt="Not Found " /> */}
      
      <video style={{width:"500px",height:"400px"}}controls>  
        <source src={Home} type="video/mp4" />  
    </video> 

    </div>
    <div className="col-md-6  mt-5 ">
      <h4 className="brand-text"> HOME TO GO </h4>
      <p className="text3"> Branding</p>
      
    <button  onClick={handleClick} type="button" className=" btn1 btn btn-danger btn-rounded">VISIT WEBSITE </button>
    </div>


    <div className="col-md-6 mt-5">
      {/* <img src={image1} className="image1" alt="Not Found " /> */}
      
      <video style={{width:"500px",height:"400px"}}controls>  
        <source src={Komuso} type="video/mp4" />  
    </video> 

    </div>
    <div className="col-md-6  mt-5 ">
      <h4 className="brand-text"> KOMUSO WELLNESS </h4>
      <p className="text3"> Web Design</p>
      
      <button  onClick={handleClick1} type="button" className=" btn1 btn btn-danger btn-rounded">VISIT WEBSITE </button>
    </div>

    <hr className="hr"/>
  </div>
</div>




		</div>
	);
};

export default Work;
