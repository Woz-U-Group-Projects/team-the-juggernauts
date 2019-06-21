import React from 'react';
import Header from '../components/Header';
// import ReactDOM from 'react-dom';
// import { stringify } from 'querystring';
import axios from "axios";
import Login from './Login';
import './Home.css';

const Home = () => <SignUpForm />;

class SignUpForm extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    emailName: '',
    passName: '',
    petsName: '',
    petsToy: '',
    petsBreed: '',
    petsTown: '',
    petsPlace: ''
  }

  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
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

  // submitUser() {
  //   axios
  //     .post("http://localhost:3001/users", {
  //       name: this.firstName.current.value,
  //       lname: this.lastName.current.value,
  //       ename: this.emailName.current.value,
  //       passname: this.passName.current.value,
  //       pname: this.petsName.current.value,
  //       tname: this.petsToy.current.value,
  //       bname: this.petsBreed.current.value,
  //       twname: this.petsTown.current.value,
  //       ppname: this.petsPlace.current.value,

  //     })
  //     .then(res => {
  //       this.setState({ newUser: "" });
  //       this.getUser();
  //     });
  // }

  render() {
    return (
      <div>
        <div id='cloud-scroll'></div>
        <div className="container">
          <Header title="Welcome!" />
          <h1>Welcome to</h1>
          <div className="col-lg-12">
            <div className="container-fluid" id="container3">
              <div className="hero-image">
                <div className="animated-image"></div>
              </div>
              <div className="hero-text">
                A wonderful place of fun and play for your pets
              </div>
            </div>
            <div className="container-fluid">
            <p id="pone"></p>
            <div className="all">
              <div class="row">
                <div style={{ display: 'flex', width: '100%' }}>
                  <div id="form1" style={{ width: 'initial', maxWidth: 'initial', flex: 1, display: 'flex', justifyContent: 'center', justifyContent: 'flex-end' }}>
                    <div>
                      <h1>Please Sign Up!</h1>

                      <input className="inputid" type='text' placeholder='First Name' name='firstName' />

                      <input className="inputid" type='text' placeholder='Last Name' name='lastName' />

                      <input className="inputid" type='email' placeholder='Email / User Name' name='emailName' />

                      <input className="inputid" type='password' placeholder='Password' name='passName' />

                      <input className="inputid" type='text' placeholder='Pets Name' name='petsName' />

                      <input className="inputid" type='text' placeholder='Pets Favorite Toy' name='petsToy' />

                      <input  className="inputid"type='text' placeholder='Pets Breed' name='petsBreed' />

                      <input className="inputid" type='text' placeholder='Pets Town' name='petsTown' />

                      <input className="inputid" type='text' placeholder='Pets Favorite Place' name='petsPlace' />

                      <button className="inputid" onClick={() => this.submitUser()}>Submit</button>
                    </div>
                  </div>

                  <div style={{ flex: 1, display: 'flex', justifyContent: 'center'  }} >
                    <p id="ptwo" >A Great way to explore your community find friends and neighbors with similiar intrests and likes</p>
                  </div>

                  <div style={{ marginTop: 60, flex: 1, display: 'flex', justifyContent: 'center'  }}>
                    <div id="form2" style={{ margin: 0 }}>
                      <Login />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
//ReactDOM.render(<SignUpForm />, document.getElementById('root'));

export default Home;
