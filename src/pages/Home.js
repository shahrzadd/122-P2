import * as React from "react";
import "./home.css";
import image1 from "../assets/BannerTop.png"
import Banner2 from "../assets/Banner-2.png";
import BannerMiddle from "../assets/Banner-Middle.png" 
import HomeVideo from "../assets/homeabout.mp4"
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className="home-section">

			<div className="container">
               <div className="row">
                 <div className="col-md-6 mt-5">
                   <h4 className="text1">WE WILL LAUNCH </h4>
				   <h4 className="text1"> YOUR BRAND IN</h4>
				   <h4 className="text1">RIGHT WAY</h4><br/>

				   <Link to="/about">  <button type="button" className=" btn1 btn btn-danger btn-rounded"> Learn More </button></Link>

				 </div>
				 <div className="col-md-6">

					 <img src={image1} className="abc image11 img-responsive"  alt="Not Found "/>
				 </div>

			   </div>
			</div>



			<div className="container-fluid">

				<img src={Banner2}  className="section2image img-responsive"/>
              
			</div>


			<div className=" text-center container">

			<h4 className="text22">WE ENRICH HUMAN LIVES THROUGH THE THOUGHTFUL APPLICATION OF DESIGN AND TECHNOLOGY</h4>

			<Link to="/work"> 	 <button type="button" className=" btn1 btn btn-danger btn-rounded">Learn More </button> </Link>

            </div>



			<div className=" home-section container">
               <div className="row">
                 <div className="col-md-6 mt-5">

				 <video style={{width:"580px",height:"400px"}}controls>  
        <source src={HomeVideo} type="video/mp4" />  
    </video> 
				 {/* <img src={BannerMiddle} className="image1"  alt="Not Found "/> */}
                   
				 </div>
				 <div className="col-md-5  mt-5">

				<p className="text3"> As a full-service partner to 
									the world’s most ambitious companies 
									we create transformational change 
									through best-in-class digital products 
									and communications.
</p>

<Link to="/about">   <button type="button" className=" btn1 btn btn-danger btn-rounded">About US </button></Link>


				 </div>

			   </div>
			</div>


			<div className="homeSection text-center container">

			<h4 className="text22">WE'D LOVE TO BE YOUR PARTNER </h4>

			<Link to="/connect"> 	<button type="button" className=" btn1 btn btn-danger btn-rounded">Get in touch </button></Link>

			<hr className="hr"/>

            </div>


		</div>
	);
};

export default Home;
