import React from 'react';
import Header from '../components/Header';
import Spinner from './Spinner';
import Buttons from './Buttons'
// import Images from './Images'
// import Images from './Images';

// const Photos = () => <Header title="Photos" />;

class Image extends React.Component {

render() {
    return(
        <div>
            <Header title="Photos" />;
            <Spinner/>
            <Buttons/>
            {/* <Images/> */}
        </div> 
    );
}
} 



export default Image;