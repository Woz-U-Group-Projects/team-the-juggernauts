import React from 'react';
import Header from '../components/Header';
import ReactDOM from 'react-dom';

const Home = () => <MyForm />;

class MyForm extends React.Component {
    render() {
      return (
        <div>
        <Header title="Welcome!" />
        <form>
          <h1>Hello</h1>
          <p>Enter your name:</p>
          <input
            type="text"
          />
        </form>
        </div>
      );
    }
  }
  ReactDOM.render(<MyForm />, document.getElementById('root'));

export default Home;
