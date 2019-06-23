import React from 'react';
import Header from '../components/Header';
// import ReactDOM from 'react-dom';
// import { stringify } from 'querystring';
import axios from "axios";
import Login from './Login';
import './home.css';
import smiley from '../smiley.bmp';
import cutie from '../cutie.bmp';
import rainbowplay from '../rainbowplay.png';
import puppybanner from '../puppybanner.jpg';
import gerbil from '../gerbil.bmp';
import happycat from '../happycat.bmp';
import turtle from '../turtle.bmp';
import fish from '../fish.bmp';
import snake from '../snake.bmp';
import duckcat from '../duckcat.bmp';
import logo from '../logo.png';
import stinky from '../stinky.bmp';
import bunny from '../bunny.bmp';
import pig from '../pig.bmp';
import horse from '../horse.bmp';
import raccoon from '../raccoon.bmp';



const Home = () => <SignUpForm />;

class SignUpForm extends React.Component {
  constructor(props) {
    super(props)



    this.firstName = React.createRef();
    this.lastName = React.createRef();
    this.emailName = React.createRef();
    // this.userName = React.createRef();
    this.passName = React.createRef();
    this.petsName = React.createRef();
    this.petsToy = React.createRef();
    this.petsBreed = React.createRef();
    this.petsTown = React.createRef();
    this.petsPlace = React.createRef();

  }
  getUser() {
    axios.get("http://localhost:3001/users").then(res => {
      const user = res.data;
      this.setState({ user });
    });
  }

  componentDidMount() {
    //this.getUser();
  }

  submitUser() {
    axios
      .post("http://localhost:3001/users", {
        name: this.firstName.current.value,
        lname: this.lastName.current.value,
        ename: this.emailName.current.value,
        // uname: this.userName.current.value,
        passname: this.passName.current.value,
        pname: this.petsName.current.value,
        tname: this.petsToy.current.value,
        bname: this.petsBreed.current.value,
        twname: this.petsTown.current.value,
        ppname: this.petsPlace.current.value,

      })
      .then(res => {
        this.setState({ newUser: "" });
        this.getUser();
      });
  }
  //

  render() {
    var inLineStyle={display:'inline-block'}
var opacity={opacity:1}
    return (
<div>
  
<div className='cloud-scroll'>
      </div>
               
<img  className ='slide-in-elliptic-top-fwd' id='img2' src={turtle}alt='turtle'></img>
<img  className ='slide-in-elliptic-top-fwd' id='img2' src={fish}alt='fish'></img>
<img  className ='slide-in-elliptic-top-fwd' id='img2' src={snake}alt='snake'></img>
<img  className ='slide-in-elliptic-top-fwd' id='img2' src={duckcat}alt='duckcat'></img>

<img  className ='slide-in-elliptic-top-fwd' id='img2' src={stinky}alt='skunk'></img>
<img  className ='slide-in-elliptic-top-fwd' id='img2' src={bunny}alt='bunny'></img>
<img  className ='slide-in-elliptic-top-fwd' id='img2' src={pig}alt='pig'></img>

      <div className="container">

      
        <Header title="" />

  

        <h1>Welcome to</h1>
        <row>
        <div className="col-lg-12">
        


            <div className="container-fluid" id="container3">
                <img class="heartbeat" id='rainbow'style ={opacity} src={rainbowplay} alt="cutie"></img>
                <img  className ='logo' id='logo' src={logo}alt='logo'></img>
                <img  className ='image' src={smiley}alt='cutie'></img>
                <img  className ='image' src={cutie}alt='cutie'></img>
                <img  className ='image' src={gerbil}alt='cutie'></img>
                <p id="pone" >A wonderful place of fun and play for your pets!!</p>
     </div> </div>  </row>
     <container className='all'>
     <row>
    <div class="col-lg-6">


    
<div id="form1" style ={inLineStyle}>

        <h1>Please Sign Up!</h1>
      
        <p id="ptwo"  >A Great way to explore your community find friends and neighbors with similiar intrests and likes </p>
         
       
        <p><input  style ={inLineStyle} className="inputid" type='text' placeholder='First Name' name='firstName' ref={this.firstName} /></p>
        <p><input style ={inLineStyle} className="inputid" type='text' placeholder='Last Name' lname='lastName' ref={this.lastName} /></p>
        <p><input className="inputid" type='email' placeholder='Email / User Name' ename='emailName' ref={this.emailName} /></p>
        {/* <p><input type='text' placeholder='User Name' uname='userName' ref = {this.userName}/></p> */}
        <p><input style ={inLineStyle} className="inputid" type='password' placeholder='Password' passname='passName' ref={this.passName} /></p>
        <p><input style ={inLineStyle} className="inputid" type='text' placeholder='Pets Name' pname='petsName' ref={this.petsName} /></p>
        <p><input style ={inLineStyle} className="inputid" type='text' placeholder='Pets Favorite Toy' tname='petsToy' ref={this.petsToy} /></p>
        <p><input style ={inLineStyle}  className="inputid"type='text' placeholder='Pets Breed' bname='petsBreed' ref={this.petsBreed} /></p>
        <p><input style ={inLineStyle} className="inputid" type='text' placeholder='Pets Town' twname='petsTown' ref={this.petsTown} /></p>
        <p><input style ={inLineStyle} className="inputid" type='text' placeholder='Pets Favorite Place' ppname='petsPlace' ref={this.petsPlace} /></p>
        <p><button style ={inLineStyle} className="inputid" onClick={() => this.submitUser()}>Submit</button></p>
        <img  className ='imagepup' src={puppybanner}alt='cutie'></img>
         <h1>Welcome back
          <br></br>
          Log-in</h1>
         
        <Login />

        <img  className ='image' src={happycat}alt='cutie'></img>
        <img  className ='image' src={horse}alt='cutie'></img>
        <img  className ='image' src={raccoon}alt='cutie'></img>
       </div>
       </div>
       
  
        </row>
    
        
       
       </container>
        </div> 
        </div>
       
       

        
       
       

    );
  }
}
//ReactDOM.render(<SignUpForm />, document.getElementById('root'));


export default Home;


// 

//test