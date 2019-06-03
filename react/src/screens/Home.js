import React from 'react';
import Header from '../components/Header';
import ReactDOM from 'react-dom';
import axios from "axios";

const Home = () => <SignUpForm />;

class SignUpForm extends React.Component {
  state = {
    user: [],
    newUser: ""
  };

  getUser() {
    axios.get("http://localhost:3001/users").then(res => {
      const user = res.data;
      this.setState({ user });
    });
  }

  componentDidMount() {
    this.getUser();
  }

  submitUser() {
    axios
      .post("http://localhost:3001/users", { name: this.state.newUser })
      .then(res => {
        this.setState({ newUser: "" });
        this.getUser();
      });
  }

  render() {
    return (

      <body>
      <div>
      <Header title="Welcome to"></Header>


     
  <form>
        <container id= " welcome">Pet Play</container>
<img id="tugawar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHsdvsfKB43bNPiPEpnHEGEO0RV18mt51VU1ZNk-A21TStPjVF0g" alt="tuawar"></img>



        <p id="signup">Sign-Up:</p>
        <input
          value={this.state.newUser}
          onChange={evt => this.setState({ newUser: evt.target.value })}
        />
      </form>


      <div id= "pic"> 


      <div id="banner">
  <div id="cloud-scroll">




      <p id="pone">A wonderful place of fun and play for your pets</p>

      <div id="imgone" alt="imgone">
      <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6pmwTBzF6u54Uua0b1ZHc2lOjLpTRM7JUrYizrsTX7csvm4Mwew" class="responsive" alt="cute"></img>
      </div>

      <div id="imgtwo">
      <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQRKLa8Pn1PgHlww1gZq-5p-5tL1455-KFiHVRE7Ka0ZIp-kOe1w" class="responsive" alt="beach"></img>
      </div>


      <p id ="ptwo">A Great way to explore your community find friends and neighbors with similiar intrests and likes</p>



      <div id="imgthree">
      <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVFzY2w3EFkUDJkmZQXO6tuNnSr-nmsV4W5nSUZGxTm7GsT66H" class="responsive"alt="friends" ></img>
      </div>

      <div id="imgfour">
      <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK2aeoPDxz8egsbLh9kYADsGe8dq79B_zFvO1P38nNUiY6a1KAUg" class="responsive"alt="heeey" ></img>
      </div>
      
      
      
      
      
      </div>
  </div>
</div>



    
      </div>

      </body>
    );
  }
}
ReactDOM.render(<SignUpForm />, document.getElementById('root'));


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


//comment// 