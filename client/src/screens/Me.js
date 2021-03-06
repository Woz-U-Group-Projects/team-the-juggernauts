import React from 'react';
import Header from '../components/Header';
import axios from "axios";
import { withRouter } from 'react-router-dom';
import './me.css';

class Post extends React.Component {
    state = {
        post: [],
        newPost: "",
        searchPost: "",
        submitPost: ""
    };

    getPost() {
        axios.get("http://localhost:3001/posts").then(res => {
            const post = res.data;
            this.setState({ post });
        });
    }

    componentDidMount() {
        this.getPost();
    }

    submitPost() {
        axios
            .post("http://localhost:3001/posts", { post_body: this.state.newPost })
            .then(res => {
                this.setState({ newPost: "" });
                this.getPost();
                // this.props.history.push("/posts");
            });
    }

    searchPost(searchTerm) {
        if (searchTerm === "") {
            this.setState({ searchPost: "" });
            this.getPost();
        } else {
            this.setState({ searchPost: searchTerm });
            axios.get("http://localhost:3001/posts/search/" + searchTerm)
                .then(res => {
                    const post = res.data;
                    this.setState({ post });
                });
        }
    }

    deletePost(id) {
        axios.delete("http://localhost:3001/posts/" + id + "")
            .then(res => {
                console.log(res.body);
                this.getPost();
            });
    }

    editPost(id, name) {
        let result = prompt('Edit Post Name', name);
        if (result != null) name = result;
        axios
            .post("http://localhost:3001/posts/edit",
                { "id": id, "name": name })
            .then(res => {
                console.log(res);
                this.getPost(); //Refresh
            });
    }
    render() {
        return (
            <div>
                <div className= 'me'>
                <Header title="Connect with friends!" />
                <h3>Search</h3>
                <input className='searchInput'
                    value={this.state.searchPost}
                    onChange={evt => this.searchPost(evt.target.value)}
                />
                <button className='resetButton' onClick={() => this.searchPost("")}>Reset</button>

                <h1>Post:</h1>
                <ul>
                    {this.state.post.map(f => (
                        <li key={f.id}>
                            <button onClick={() => this.deletePost(f.id)}>X</button>
                            <button onClick={() => this.editPost(f.id, f.name)}>Edit</button>
                            <nbsp /> {f.name}
                            <ul>
                                <li>{f.description}</li>
                            </ul>
                        </li>
                    ))}
                </ul>

                <h3>Add Post</h3>
                <input className='inputSubmit'
                    value={this.state.newPost}
                    onChange={evt => this.setState({ newPost: evt.target.value })}
                />
                <button className='submitbutton' onClick={() => this.submitPost()}>Submit</button>

        
                </div>
            </div>
        );

    }
}

export default withRouter(Post);