import React from 'react';
import Header from '../components/Header';
// import ReactDOM from 'react-dom';
// import { stringify } from 'querystring';
import axios from "axios";
import Login from './Login';



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
    return (

<body>
<div id='cloud-scroll'></div>

      <div className="container">



        <Header title="Welcome!" />

  

        <h1>Welcome to</h1>
    
        <div className="col-lg-12">



            <div className="container-fluid" id="container3">
                <div className="hero-image">

                </div>
                <div className="hero-text">A wonderful place of fun and play for your pets

     </div> </div>
   <p id="pone">
   </p>
            <div className="all" >
  <div class="row">
    <div class="col-lg-6">
<div id="form1">

        <h1>Please Sign Up!</h1>

        <p><input className="inputid" type='text' placeholder='First Name' name='firstName' ref={this.firstName} /></p>
        <p><input className="inputid" type='text' placeholder='Last Name' lname='lastName' ref={this.lastName} /></p>
        <p><input className="inputid" type='email' placeholder='Email / User Name' ename='emailName' ref={this.emailName} /></p>
        {/* <p><input type='text' placeholder='User Name' uname='userName' ref = {this.userName}/></p> */}
        <p><input className="inputid" type='password' placeholder='Password' passname='passName' ref={this.passName} /></p>
        <p><input className="inputid" type='text' placeholder='Pets Name' pname='petsName' ref={this.petsName} /></p>
        <p><input className="inputid" type='text' placeholder='Pets Favorite Toy' tname='petsToy' ref={this.petsToy} /></p>
        <p><input  className="inputid"type='text' placeholder='Pets Breed' bname='petsBreed' ref={this.petsBreed} /></p>
        <p><input className="inputid" type='text' placeholder='Pets Town' twname='petsTown' ref={this.petsTown} /></p>
        <p><input className="inputid" type='text' placeholder='Pets Favorite Place' ppname='petsPlace' ref={this.petsPlace} /></p>
        <p><button className="inputid" onClick={() => this.submitUser()}>Submit</button></p>
        </div>
       
        
       
        <p id="ptwo" >A Great way to explore your community find friends and neighbors with similiar intrests and likes </p>

        <div class="col-lg-6">

       <div id="form2">
  
    
        <Login />


       
       </div>  </div> 
        </div> 
        </div>    
        </div>
        </div>
        </div>
       
        </body>

    );
  }
}
//ReactDOM.render(<SignUpForm />, document.getElementById('root'));


export default Home;


// 

//test