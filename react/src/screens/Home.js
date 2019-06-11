import React from 'react';
import Header from '../components/Header';
// import ReactDOM from 'react-dom';
// import { stringify } from 'querystring';
import axios from "axios";



const Home = () => <SignUpForm />;

class SignUpForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      firstName: null,
      lastName: null,
      petsName: null,
      petsBreed:null,
      petsToy:null,
      petsTown: null,
      petsPlace:null

    }
    this.firstName = React.createRef();
    this.lastName = React.createRef();
    this.emailName = React.createRef();
    this.userName = React.createRef();
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
        uname: this.userName.current.value,
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
      <div>
        <Header title="Welcome!" />
        <h1>Please Sign Up!</h1>

          <p><input type='text' placeholder='First Name' name='firstName' ref={this.firstName} /></p>
          <p><input type='text' placeholder='Last Name' lname='lastName' ref = {this.lastName}/></p>
          <p><input type='text' placeholder='Email' ename='emailName' ref = {this.emailName}/></p>
          <p><input type='text' placeholder='User Name' uname='userName' ref = {this.userName}/></p>
          <p><input type='text' placeholder='Password' passname='passName' ref = {this.passName}/></p>
          <p><input type='text' placeholder='Pets Name' pname='petsName' ref = {this.petsName}/></p>
          <p><input type='text' placeholder='Pets Favorite Toy' tname='petsToy' ref = {this.petsToy}/></p>
          <p><input type='text' placeholder='Pets Breed' bname='petsBreed' ref = {this.petsBreed} /></p>
          <p><input type='text' placeholder='Pets Town' twname='petsTown' ref = {this.petsTown} /></p>
          <p><input type='text' placeholder='Pets Favorite Place' ppname='petsPlace' ref = {this.petsPlace} /></p>
          <p><button onClick={()=>this.submitUser()}>Submit</button></p>
         
      </div>

    );
  }
}
//ReactDOM.render(<SignUpForm />, document.getElementById('root'));


export default Home;


// class MyForm extends React.Component {
//   render() {
//     return (
//       <div>
//       <Header title="Welcome!" />
//       <form>
//         <h1>Hello</h1>
//         <p>Sign-Up:</p>
//         <input
//           type="text"
//         />
//       </form>
//       </div>
//     );
//   }
// }
// ReactDOM.render(<MyForm />, document.getElementById('root'));


/* <h1>Signup:</h1>
        <ul>
          {this.state.user.map(f => (
            <li key={f.id}>{f.name}
            </li>
          ))}
        </ul> */

        
          //   axios.get("http://localhost:3001/users").then(res => {
          //     const user = res.data;
          //     this.setState({ user });
          //   });
          // }
        
          // componentDidMount() {
          //   this.getUser();
          // }
        
          // submitUser() {
          //   axios
          //     .post("http://localhost:3001/users", { name: this.state.newUser })
          //     .then(res => {
          //       this.setState({ newUser: "" });
          //       this.getUser();
          //     });
          // }