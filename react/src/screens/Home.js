import React from 'react';
import Header from '../components/Header';
import ReactDOM from 'react-dom';
// import axios from "axios"

const Home = () => <MyForm />;

class MyForm extends React.Component {
  render() {
    return (
      <div>
      <Header title="Welcome to" />


      <div id="banner">
  <div id="cloud-scroll">
  <form>
        <container id= " welcome">Pet Play</container>

<p id="pone">A wonderful place of fun and play for your pets</p>

<p id ="ptwo">A Great way to explore your community find friends and neighbors with similiar intrests and likes</p>


        <p id="signup">Sign-Up:</p>
        <input
          type="text"
        />
      </form>


      <div id= "pic"> 
      <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6pmwTBzF6u54Uua0b1ZHc2lOjLpTRM7JUrYizrsTX7csvm4Mwew"></img>
      
      <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQRKLa8Pn1PgHlww1gZq-5p-5tL1455-KFiHVRE7Ka0ZIp-kOe1w"></img>
      
      <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVFzY2w3EFkUDJkmZQXO6tuNnSr-nmsV4W5nSUZGxTm7GsT66H"></img>
      
      <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK2aeoPDxz8egsbLh9kYADsGe8dq79B_zFvO1P38nNUiY6a1KAUg"></img>
      
      
      
      
      
      
      </div>
  </div>
</div>



    
      </div>
    );
  }
}
ReactDOM.render(<MyForm />, document.getElementById('root'));

// class SignUpForm extends React.Component {
//   state = {
//     user: [],
//     newUser: ""
//   };

//   getUser() {
//     axios.get("http://localhost:3001/home").then(res => {
//       const user = res.data;
//       this.setState({ user });
//     });
//   }

//   componentDidMount() {
//     this.getUser();
//   }

//   submitUser() {
//     axios
//       .post("http://localhost:3001/home", { name: this.state.newUser })
//       .then(res => {
//         this.setState({ newUser: "" });
//         this.getUser();
//       });
//   }

//   render() {
//     return (
//       <div>
//         <Header title="Welcome!" />
//         <h1>Signup:</h1>
//         <ul>
//           {this.state.user.map(f => (
//             <li key={f.id}>{f.name}</li>
//           ))}
//         </ul>

//         <input
//           value={this.state.newUser}
//           onChange={evt => this.setState({ newUser: evt.target.value })}
//         />
//         <button onClick={() => this.submitFruit()}>Submit</button>
//       </div>
//     );
//   }
// }
// ReactDOM.render(<SignUpForm />, document.getElementById('root'));
 

export default Home;





//comment// 