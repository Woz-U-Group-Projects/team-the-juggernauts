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

    validateForm() {
        return this.emailName > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    // componentDidMount() {
    //     //this.getUser();
    //   }

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
            <div className="Login">
                <form onSubmit={this.handleChange}>
                    <h1 className="logintext"></h1>
                    <p><input className="inputid2" type="text" placeholder='Email / User Name' ename='emailName' ref={this.emailName} onChange={this.handleChange}></input></p>
                    <p><input className="inputid2" type='text' placeholder='Password' passname='passName' ref={this.passName} onChange={this.handleChange} /></p>
                    <p><button className="inputid2" onClick={() => this.submitLogin()}>Login</button></p>
                </form>
            </div>

        );
    }
}


export default Login;