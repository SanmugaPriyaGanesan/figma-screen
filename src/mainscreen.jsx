import React, { Component, useEffect, useState } from "react";
import Ellipse from "./Ellipse.svg";
import img1 from './img1.png';
import img2 from './img2.png';
import speaker from './speaker.png';
import mic from './mic.png';
import avatar from './avatar.png';
import star from './star.png';
import fb from './fb.png';
import twitter from './twitter.png';
import inst from './insta.png';
import youtube from './youtube.png';
import craft from './craft.png';


function Mainscreen() {

    return ( 
<>
<div  style={{width:100+'vw',height:100+'vh'}}>
  <img src={craft} style={{position:'absolute',top:'300px',right:-2+'px'}}/>
<img src={Ellipse} alt="Your SVG" style={{position:'absolute',height:'500px',display:'flex',marginTop:'-240px',marginLeft:'-120px'}}/>
<div style={{width:0,height:0,borderTop:'0px solid transparent',borderLeft:'50vw solid #331950',borderBottom:'50vh solid transparent',position:'absolute',marginLeft:'50%'}}>



</div>
<div className="row"  style={{width:1140+'px',height:91+'px',position:'absolute'}}>
<div className="col-3" style={{color:'white',textAlign:'center'}}>
Logo
</div>
<div className="col-4">

</div>
<div className="col-5" style={{color:'white'}}>
  <div className="row">
  <div className="col-4">
About
</div>
<div className="col-4">
Pricing
</div>
<div className="col-4">
Review
</div>
  </div>

</div></div>
<div className="row" style={{position:'absolute',textAlign:'justify',marginTop:'70px',marginLeft:100+'px',width:'100vw'}}>
  <div className="col-6" style={{color:'white'}}>
<p style={{fontSize:36+"px",width:390+'px',fontWeight:'bold'}}>Learn how to launch a successful podcast</p>
<p style={{width:350+'px',fontSize:'12px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting in ustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
 <button style={{backgroundImage:'linear-gradient(to left,#4776E6,#8E54E9)',borderRadius:10+'px',width:'137px',color:'white',height:'50px',fontWeight:'bold',marginTop:'30px',border:'none'}}>sign up now</button>
  </div>
  <div className="col-3" style={{color:'yellow'}}>
  <div style={{width:'340px',borderRight:'5px dotted #7A3199',backgroundColor:'transparent',height:270+'px',borderBottom:'5px dotted #7A3199',letterSpacing:'10px'}}>

<img src={img2} style={{width:'300px',borderBottom:'5px dotted #7A3199',paddingBottom:2+'px'}}/>
<img src={img1} style={{width:'300px',position:'relative',top:'-100px',left:'-50px',}}/>
<img src={mic} style={{position:'relative',top:-150+'px',width:100+'px',left:260+'px'}}/>
<img src={speaker} style={{position:'relative',top:-280+'px',width:120+'px',left:180+'px'}}/>
</div>
  </div>
</div>

  <div style={{width:0,height:0,borderTop:'0px solid transparent',borderLeft:'100vw solid    #161033',borderBottom:'80vh solid transparent'}}>
  </div>

<div className="row" style={{marginTop:'-20px'}}>
  <div className="col-6">
    <div className="row">
    <div className="col-6" style={{position:'relative',left:'60px'}}>
<div class="card" style={{width:250+'px',border:'1px solid #7A3199',borderRadius:'10px'}}>
  <div class="card-body">
    <h5 class="card-title"style={{fontWeight:'bold',fontSize:'16px'}}>Interactive Features</h5>
    <p class="card-text" style={{fontSize:'12px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
   
  </div>
  </div>

  <div class="card" style={{width:250+'px',border:'1px solid #7A3199',borderRadius:'10px',marginTop:'20px'}}>
  <div class="card-body">
    <h5 class="card-title" style={{fontWeight:'bold',fontSize:'16px'}}>Interactive Features</h5>
    <p class="card-text" style={{fontSize:'12px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
   
  </div>
  
</div>


</div>
<div className="col-6">
<div class="card" style={{width:250+'px',border:'1px solid #7A3199',borderRadius:'10px',marginTop:'20px'}}>
  <div class="card-body">
    <h5 class="card-title"style={{fontWeight:'bold',fontSize:'16px'}}>Interactive Features</h5>
    <p class="card-text" style={{fontSize:'12px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
   
  </div>
  </div>

  <div class="card" style={{width:250+'px',border:'1px solid #7A3199',borderRadius:'10px',marginTop:'20px'}}>
  <div class="card-body">
    <h5 class="card-title"style={{fontWeight:'bold',fontSize:'16px'}}>Interactive Features</h5>
    <p class="card-text" style={{fontSize:'12px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
   
  </div>
  
</div>


</div>
    </div>

  </div>
  <div className="col-6">
  <div  style={{width:500+'px',marginTop:'20px',textAlign:'start'}}>
  <div>
    <h5 style={{fontWeight:'bolder',fontSize:'50px',textAlign:'start'}}>About the Course</h5>
    <p  style={{fontSize:'16px',textAlign:"justify"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unkno</p>
    <button style={{backgroundImage:'linear-gradient(to left,#4776E6,#8E54E9)',borderRadius:10+'px',width:'137px',color:'white',height:'50px',fontWeight:'bold',marginTop:'30px',border:'none'}}>Explore Now</button>

  </div>
  
</div></div>
</div>

<div className="row" style={{marginTop:'50px'}}>
  <div className="row">
<div  style={{textAlign:'center'}}>
  <h1 style={{fontWeight:'bold'}}>Choose your plan</h1>
  <p style={{fontSize:'16px',width:'450px',margin:'auto',textAlign:'justify'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
  
  <div  style={{display:'inline-flex',marginTop:'20px',backgroundColor:'ghostwhite',border:'2px solid white',borderRadius:'15px',padding:'10px'}}>
    <p style={{marginBottom:0,border:'1px solid #E1A6FF66',backgroundColor:'#E1A6FF66',borderRadius:'10px',padding:2+'px'}}>Monthly</p> <p style={{marginLeft:'20px',marginBottom:0}}>Yearly</p>
  </div>

 
</div>
<div  style={{fontSize:100+'px',opacity:'0.2',fontWeight:'bolder',position:'absolute',top:'820px',textAlign:'end'}}>
  Podcast
  </div>

  </div>
  <div className="row" style={{marginTop:'50px',textAlign:'center',margin:'auto',}}>
<div className="col-4">
<div class="card" style={{textAlign:'start',border:'1px solid #7A3199',width:'300px',margin:'auto',height:'350px'}}>
  <div class="card-body">
    <h5 class="card-title" style={{fontWeight:'bold'}}>Basic Plan</h5>
    <div class="card-text">
      <p style={{marginTop:'20px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
      <h2 style={{color:'#7A3199'}}><b style={{fontWeight:'bolder'}}>&#36; 54</b> <span style={{fontWeight:'lighter',fontSize:'20px'}}>/month</span></h2>
      <ul style={{fontWeight:'bold',marginTop:'20px'}}>
        <li>Free access to video class</li>
        <li>Free access to video class</li>
        <li>Free access to video class</li>
      </ul>
    </div>
    <button style={{backgroundColor:'transparent',height:'40px',marginTop:'20px',color:'#7A3199',border:'2px solid #7A3199',width:'150px',borderRadius:'10px'}}>Start Free Trail</button>
  </div>
</div>
</div>
<div className="col-4">
<div class="card" style={{textAlign:'start',border:'1px solid #7A3199',width:'300px',margin:'auto',backgroundColor:'#7A3199',color:'white',height:'350px'}}>
  <div class="card-body">
    <h5 class="card-title" style={{fontWeight:'bold'}}>Premium Plan</h5>
    <div class="card-text">
      <p style={{marginTop:'20px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
      <h2 ><b style={{fontWeight:'bolder'}}>&#36; 54</b> <span style={{fontWeight:'lighter',fontSize:'20px'}}>/month</span></h2>
      <ul style={{fontWeight:'bold',marginTop:'20px'}}>
        <li>Free access to video class</li>
        <li>Free access to video class</li>
        <li>Free access to video class</li>
      </ul>
    </div>
    <button style={{backgroundColor:'white',height:'40px',marginTop:'20px',color:'#7A3199',border:'2px solid #7A3199',width:'150px',borderRadius:'10px'}}>Start Free Trail</button>
  </div>
</div>
</div>
<div className="col-4">
<div class="card" style={{textAlign:'start',border:'1px solid #7A3199',width:'300px',margin:'auto',height:'350px'}}>
  <div class="card-body">
    <h5 class="card-title" style={{fontWeight:'bold'}}>Basic Plan</h5>
    <div class="card-text">
      <p style={{marginTop:'20px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
      <h2 style={{color:'#7A3199'}}><b style={{fontWeight:'bolder'}}>&#36; 54</b> <span style={{fontWeight:'lighter',fontSize:'20px'}}>/month</span></h2>
      <ul style={{fontWeight:'bold',marginTop:'20px'}}>
        <li>Free access to video class</li>
        <li>Free access to video class</li>
        <li>Free access to video class</li>
      </ul>
    </div>
    <button style={{backgroundColor:'transparent',marginTop:'20px',height:'40px',color:'#7A3199',border:'2px solid #7A3199',width:'150px',borderRadius:'10px'}}>Start Free Trail</button>
  </div>
</div>
</div>
  </div>
</div>

<div className="row" style={{marginTop:'50px'}}>
  <div className="row" style={{textAlign:'start',marginLeft:'50px',width:'500px'}}>
    <h1 style={{fontWeight:'bold'}}>Review from customers</h1>
    <p style={{fontSize:14+'px',width:450+'px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
  </div>
  <div className="row">
    <div className="col-4">
    <div class="card" style={{margin:'auto',padding:'10px',border:'0.5px solid #7A3199'}} >
  <div class="card-body">
    <h5 class="card-title" style={{display:'flex'}}>
      <div><img src={avatar}/></div>
      <div style={{marginLeft:'20px',textAlign:'start'}}>
        <b>Lolla Smith</b>
        <p style={{marginTop:'5px',textAlign:'start'}}>Microsoft</p>
        <div style={{display:'inline-flex'}}>
        <img src={star} style={{marginRight:'5px'}}/><img src={star}style={{marginRight:'5px'}}/>
        <img src={star}style={{marginRight:'5px'}}/><img src={star}style={{marginRight:'5px'}}/>
        <img src={star}style={{marginRight:'5px'}}/>
        </div>
   </div>
      
    </h5>
    <p class="card-text" style={{fontSize:'12px',textAlign:'justify'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make </p>
  </div>
</div>
    </div>
    <div className="col-4">
    <div class="card" style={{margin:'auto',padding:'10px',border:'0.5px solid #7A3199'}} >
  <div class="card-body">
    <h5 class="card-title" style={{display:'flex'}}>
      <div><img src={avatar}/></div>
      <div style={{marginLeft:'20px',textAlign:'start'}}>
        <b>Lolla Smith</b>
        <p style={{marginTop:'5px',textAlign:'start'}}>Microsoft</p>
        <div style={{display:'inline-flex'}}>
        <img src={star} style={{marginRight:'5px'}}/><img src={star}style={{marginRight:'5px'}}/>
        <img src={star}style={{marginRight:'5px'}}/><img src={star}style={{marginRight:'5px'}}/>
        <img src={star}style={{marginRight:'5px'}}/>
        </div>
   </div>
      
    </h5>
    <p class="card-text" style={{fontSize:'12px',textAlign:'justify'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make </p>
  </div>
</div>
    </div>
    <div className="col-4">
    <div class="card" style={{margin:'auto',padding:'10px',border:'0.5px solid #7A3199'}} >
  <div class="card-body">
    <h5 class="card-title" style={{display:'flex'}}>
      <div><img src={avatar}/></div>
      <div style={{marginLeft:'20px',textAlign:'start'}}>
        <b >Lolla Smith</b>
        <p style={{marginTop:'5px',textAlign:'start'}}>Microsoft</p>
        <div style={{display:'inline-flex'}}>
        <img src={star} style={{marginRight:'5px'}}/><img src={star}style={{marginRight:'5px'}}/>
        <img src={star}style={{marginRight:'5px'}}/><img src={star}style={{marginRight:'5px'}}/>
        <img src={star}style={{marginRight:'5px'}}/>
        </div>
   </div>
      
    </h5>
    <p class="card-text" style={{fontSize:'12px',textAlign:'justify'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make </p>
  </div>
</div>
    </div>
  </div>

</div>

<div className="row" style={{marginTop:'50px'}}>
<div style={{width:0,height:0,borderTop:'35vh solid transparent',borderRight:'100vw solid    #161033',borderBottom:'0px solid transparent'}}>
  </div>
<div className="row" style={{position:'absolute'}}>
  <h2 style={{fontWeight:'bold'}}>
  We have what you’re looking for
  </h2>
    <p style={{fontSize:'14px',width:700+'px',margin:'auto',marginTop:'20px',color:'#4776E6'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type a</p>
    <div style={{marginTop:'40px'}}>
    <button style={{backgroundImage:'linear-gradient(to left,#4776E6,#8E54E9)',borderRadius:10+'px',width:'150px',color:'white',height:'50px',fontWeight:'bold',marginTop:'50px',border:'none',margin:'auto'}}>Get Started Now</button>

    </div>

</div>


</div>
<div className="row" style={{backgroundColor:'#161033',fontSize:'12px'}}>
 <div className="row"style={{width:1000+'px',borderTop:'1px solid white',margin:'auto'}}>
  <div className="col-4" style={{marginTop:'10px'}}>
  <p style={{color:'white'}}>All Right Reserved @Copyright 2023</p>
  </div>
  <div className="col-4" style={{color:'white',display:'inline-flex',marginTop:'10px'}}>
<p >Terms of Service</p>
<p style={{marginLeft:'20px'}}>Privacy Policy</p>
<p style={{marginLeft:'20px'}}>Product</p>
  </div>
  <div className="col-4" style={{display:'inline-flex'}}>
<img src={fb} style={{width:'30px',height:'30px',marginTop:'10px',marginLeft:'20px'}}/>
<img src={youtube} style={{width:'30px',height:'30px',marginTop:'10px',marginLeft:'20px'}} />
<img src={inst} style={{width:'30px',height:'30px',marginTop:'10px',marginLeft:'20px'}}/>
<img src={twitter} style={{width:'30px',height:'30px',marginTop:'10px',marginLeft:'20px'}}/>

  </div>
 </div>
</div>

</div>
        </>
     );
}

export default Mainscreen;


