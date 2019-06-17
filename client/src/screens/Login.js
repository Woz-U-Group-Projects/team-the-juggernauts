import React from 'react';
// import Header from '../components/Header';
// // import ReactDOM from 'react-dom';
// // import { stringify } from 'querystring';
import axios from "axios";
import {withRouter} from 'react-router-dom';


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

    submitLogin(event) {
        event.preventDefault();

        axios
            .post("http://localhost:3001/login", {

                ename: this.emailName.current.value,
                passname: this.passName.current.value,


            })
            .then(res => {
                console.log(res);
                // this.setState();
                // this.getLogin();
                if(res.data!=="Invalid login"){
                this.props.history.push("/me");
                }
            });
    }

    render() {
        return (
            <div className="Login">
                <form onSubmit={this.handleChange}>
                    <h1>Login</h1>
                    <p><input type="email" placeholder='Email / User Name' ename='emailName' ref={this.emailName} onChange={this.handleChange}></input></p>
                    <p><input type='password' placeholder='Password' passname='passName' ref={this.passName} onChange={this.handleChange} /></p>
                    <p><button onClick={(event) => this.submitLogin(event)}>Login</button></p>
                </form>
            </div>

        );
    }
}


export default withRouter( Login);