import React from 'react';
import Header from '../components/Header';
import { render } from 'react-dom';

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
 render(<MyForm />, document.getElementById('root'));

export default Home;
