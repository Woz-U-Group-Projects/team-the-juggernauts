import React from 'react';
import Header from '../components/Header';
import ReactDOM from 'react-dom';
// import axios from "axios"

const Home = () => <MyForm />;

class MyForm extends React.Component {
  render() {
    return (
      <div>
      <Header title="Welcome!" />
      <form>
        <h1>Hello</h1>
        <p>Sign-Up:</p>
        <input
          type="text"
        />
      </form>
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