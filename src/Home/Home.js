import React from 'react';
import './style.css';
import './footer.css';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className='burlwood'>
      <div className='navbar'>
        <div className='logo-holder'>
            <p className='logo'><span className='text1'>Market</span><span className='text2'>X</span></p>
        </div>
        <div className='navigation'>
          <div className='menus'>
              <Link to="/home" className='links'>Home</Link>
              <Link to="/work" className='links'>Work</Link>
              <Link to="/service" className='links'>Services</Link>
              <Link to="/about" className='links'>About</Link>
              <Link to="/contact" className='links'>Contact</Link>
          </div>
        </div>
        <div className='btn'>
            <button className='git'>Get in Touch</button>
        </div>
      </div>
      {/* <div className='gap2'></div> */}
      <div className='main-page'>
        <div className='Main-text'>
          <span className='cust'>Market<span className='degree2'>X</span> Beyond Boundaries<span className='degree2'>!</span></span>
          <br></br>
          <span className='degree'>360<span className='degree2'>°</span> Degree <span className='degree2'>Marketing</span></span> <br></br> <br></br>
          <span className='interested2'>With a dynamic team of over 500 marketing experts spanning the vibrant landscapes of Asia,&nbsp;
            <span className='marketx'>MarketX</span> stands as a beacon of innovation in the world of integrated <span className='theme-text'>marketing</span>.</span>
        </div>
        <div className='main-image'>
          {/* <img src='https://samymorsy.com/wp-content/uploads/2021/06/customer-first.jpg' className='images'></img> */}
          <img src='https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='images'></img>
        </div>
      </div>
      <div className='gap'></div>
      <div className='second-page'>
        <div className='inner-second-page'>
          Mark your next step
        </div>       
      </div>
      <div className='cards'>
          <div className='card1'>
            <div className='card-theme'></div>
            <div className='margin-cards'>
              <img src='https://assets.website-files.com/5f0a3ac2c99ebfc3a7c8728b/5f6bb8e8bea55c028be782dd_feature-icon-1.svg' className='card-images'></img>
              <h2 className='card-header'>Targeted Marketing</h2>
              <p className='card-text'>At MarketX, we pinpoint your audience with precision, crafting targeted marketing that speaks directly to the heart of your brand message</p>
              <Link className='card-text'>Learn More <span className='arrow'>→</span></Link>
            </div>
          </div>
          <div className='card2'>
          <div className='margin-cards'>
              <img src='https://assets.website-files.com/5f0a3ac2c99ebfc3a7c8728b/5f6bb8ea9c7e70f665259c5e_feature-icon-2.svg' className='card-images'></img>
              <h2 className='card-header'>Targeted Marketing</h2>
              <p className='card-text'>At MarketX, we pinpoint your audience with precision, crafting targeted marketing that speaks directly to the heart of your brand message</p>
              <Link className='card-text'>Learn More <span className='arrow'>→</span></Link>
            </div>
          </div>
          <div className='card3'>
          <div className='margin-cards'>
              <img src='https://assets.website-files.com/5f0a3ac2c99ebfc3a7c8728b/5f6bb8e8bea55c028be782dd_feature-icon-1.svg' className='card-images'></img>
              <h2 className='card-header'>Targeted Marketing</h2>
              <p className='card-text'>At MarketX, we pinpoint your audience with precision, crafting targeted marketing that speaks directly to the heart of your brand message</p>
              <Link className='card-text learn-more'>Learn More <span className='arrow'>→</span></Link>
          </div>
        </div>
      </div>
      <div className='gap2'></div>
      <div className='gap'></div>
      {/* <div className='tryout'>
        <img src='https://images.unsplash.com/photo-1618305520147-8af78f99a3f5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='images'></img>
        <div>TRYOUT</div>
      </div> */}
      <div className='main-page bg'>
      <div className='main-image'>
          {/* <img src='https://samymorsy.com/wp-content/uploads/2021/06/customer-first.jpg' className='images'></img> */}
          <img src='https://images.unsplash.com/photo-1618305520147-8af78f99a3f5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='images2'></img>
        </div>
        <div className='Main-text white'>
          <span className='cust'>TRYOUT Market<span className='degree2'>X</span><span className='degree2'></span>!</span>
          <br></br>
          <span className='degree'>360<span className='degree2'>°</span> Degree <span className='degree2'>Marketing</span></span> <br></br> <br></br>
          <span className='interested'>Interested to see how it works? Schedule a free demo to get to learn everything you need to know. </span>
            {/* <span className='marketx'>MarketX</span> stands as a beacon of innovation in the world of integrated <span className='theme-text'>marketing</span>.</span> */} <br></br>
          <button className='git demo'>Schedule A Demo</button>
        </div>
      </div>
      <div className='footer-holder'>
        <div className='footers'>
          <span className='newsletter'>Want to get our Newsletters?</span> <br></br> <br></br> 
          <div><span className='interested2'>Elevate your experience with us! <br></br>Join our community and subscribe to our newsletters for an enriching blend <br></br>of exclusive updates, latest trends, and special offers—delivered directly to your inbox, <br></br>ensuring you're always a step ahead.</span></div> <br></br>
          <input type='text' placeholder='Enter Your Email' className='email'/> <button className='subscribe'>Subscribe</button> <br></br><br></br>
          <span className='spam'>Your data is protected. We never spam in your inbox.</span>
        </div>
      </div>
      {/* <hr></hr> */}
      {/* <div className='gap'></div> */}
      <div>
      <footer class="footer">
  	 <div class="container">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>menus</h4>
  	 			<ul>
  	 				<li><a href="#">about us</a></li>
  	 				<li><a href="#">our services</a></li>
  	 				<li><a href="#">privacy policy</a></li>
  	 				<li><a href="#">affiliate program</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">Call Center</a></li>
  	 				<li><a href="#">Guide</a></li>
  	 				<li><a href="#">community</a></li>
  	 				<li><a href="#">blogs</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Contact</h4>
  	 			<ul>
  	 				<li><a href="#">Call</a></li>
  	 				<li><a href="#">Email</a></li>
  	 				<li><a href="#">Message</a></li>
  	 				<li><a href="#">Whatsapp</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
  	 				<a href="#"><i class="fab fa-facebook-f"></i></a>
  	 				<a href="#"><i class="fab fa-twitter"></i></a>
  	 				<a href="#"><i class="fab fa-instagram"></i></a>
  	 				<a href="#"><i class="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
      </div>
    </div>
  );
}

export default Home;
