import React from 'react';
// import Header from '../components/Header';
// // import ReactDOM from 'react-dom';
// // import { stringify } from 'querystring';
import axios from "axios";


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.emailName = React.createRef();
        // this.userName = React.createRef();
        this.passName = React.createRef();
    }

    componentDidMount() {
        //this.getUser();
      }

    submitLogin() {
        axios
            .post("http://localhost:3001/users", {

                ename: this.emailName.current.value,
                passname: this.passName.current.value,


            })
            .then(res => {
                this.setState();
                this.getLogin();
            });
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <p><input type="text" placeholder='Email / User Name' ename='emailName' ref={this.emailName} ></input></p>
                <p><input type='text' placeholder='Password' passname='passName' ref={this.passName} /></p>
                <p><button onClick={() => this.submitLogin()}>Login</button></p>
            </div>
        );
    }
}


export default Login;