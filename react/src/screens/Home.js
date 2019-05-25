import React from 'react';
import Header from '../components/Header';
import ReactDOM from 'react-dom';

const Home = () => <Header title="Home" />;

class MyForm extends React.Component {
    render() {
      return (
        <form>
          <h1>Hello</h1>
          <p>Enter your name:</p>
          <input
            type="text"
          />
        </form>
      );
    }
  }
  ReactDOM.render(<MyForm />, document.getElementById('root'));

export default Home;
