import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    pet_id: 1,
    post: [],
    newPost: "",
    searchPost: ""
  };

  getPosts() {
    axios.get("http://localhost:5000/post").then(res => {
      const post = res.data;
      this.setState({ post });
    });
  }

  componentDidMount() {
    this.getPosts();
  }

  submitPost() {
    axios
      .post("http://localhost:5000/post", { post_body: this.state.newPost, pet_id: 1 })
      .then(res => {
        this.setState({ newPost: "" }); //Reset new post field to blank.
        this.getPosts();
      });
  }

  searchPost(searchTerm) {
    if (searchTerm === "") {
      this.setState({ searchPost: "" }); //Clearing search post eliminates odd behavior when clearing search field.
      this.getPosts();
    } else {
      this.setState({ searchPost: searchTerm }); //This is necessary or text input will hold only one character.
      axios.get("http://localhost:5000/post/search-body/" + searchTerm)
        .then(res => {
          const post = res.data;
          this.setState({ post });
        });
    }
  }

  deletePost(id) {
    axios.delete("http://localhost:5000/post/" + id + "")
      .then(res => {
        console.log(res.body);
        this.getPosts();
      });
  }

  editPost(id, post_body) {
    let result = prompt('Edit Post Body Name', post_body);
    if (result != null) post_body = result;
    axios
      .post("http://localhost:5000/post/edit",
        { "id": id, "pet_id": this.state.pet_id, "post_body": post_body })
      .then(res => {
        console.log(res);
        this.getPosts(); //Refresh
      });
  }

  render() {
    return (
      <div>

        <h3>Add Post</h3>
        <input
          value={this.state.newPost}
          onChange={evt => this.setState({ newPost: evt.target.value })}
        />
        <button onClick={() => this.submitPost()}>Submit</button>

        <h3>Search Existing Post Body</h3>
        <input
          value={this.state.searchPost}
          onChange={evt => this.searchPost(evt.target.value)}
        />
        <button onClick={() => this.searchPost("")}>Reset</button>
        <h1>Posts:</h1>
        <ol>
          {this.state.post.map(f => (
            <li key={f.id}>
              {(() => {
                if (f.post_body && !f.link_url) {
                  return <p>{f.post_body}</p>
                }
                if (f.post_body && f.link_url) {
                  return <a href={f.link_url}>{f.post_body}</a>
                }
                if (f.link_url) {
                  return <a href={f.link_url}>{f.link_url}</a>
                }
              })()}
              {(() => {
                if (f.img_url) {
                  return <a href={f.img_url}><img src={f.img_url}></img></a>
                }
              })()}
              <ul>
                <li>Post Element Diagnostics:</li>
                <ul>
                  <li>id: {f.id}</li>
                  <li>post_body: {f.post_body}</li>
                  <li>pet_id: {f.pet_id}</li>
                  <li>link_url: {f.link_url}</li>
                  <li>img_url: {f.img_url} </li>
                  <li>createdAt: {f.createdAt}</li>
                  <li>updatedAt: {f.updatedAt}</li>
                </ul>
              </ul>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default App;
