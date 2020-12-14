import React, { Component } from 'react';
export default class Header extends Component {
  render() {
   
    return (
      <div>
 <header id="home">
         <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="nav-wrap">
         <img style= {{width: '10%', height: '10%', margin:'10px'}} src="images\moneymall-logo.png" alt="" />
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Credit Cards</a></li>
               <li><a className="smoothscroll" href="#about">Loans</a></li>
             <li><a className="smoothscroll" href="#resume">Islamic</a></li>
               <li><a className="smoothscroll" href="#portfolio">Tool</a></li>
               <li><a className="smoothscroll" href="#testimonials">Money Guides</a></li>
               <li><a className="smoothscroll" href="#contact">Login</a></li>
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
            <div class="container">
             <div class="row">
                <div class="col-6">
                <h1 className="responsive-headline">Your Credit, Sorted </h1>
"
               <h3>Check you Credit Score &amp; Unlock your Borrowing Power
               </h3>
                </div>
                <div class="w-100"></div>
                <div class="col-6">
                <img style= {{width: '50%', height: '50%', marginLeft:'700px', marginTop:'-500px'}} src="images\credit-score-background-image.png" alt="" />
                 </div> 
                </div>
                   </div>
               
               <hr/>
             
            </div>
         </div>



      </header>
      <img style= {{width: '10%', height: '50%', marginLeft:'1200px'}} src="images\google.png" alt="" />

      <img style= {{width: '10%', height: '50%', marginLeft:'1200px'}} src="images\apple.png" alt="" />

      </div>
     
     
    );
  }
}
