import React from 'react';
import { Link} from 'react-router-dom';




// const Header = ({ title }) => (
//     <div>
//         <a href="/">Home</a>
//         <a href="/me">Me</a>
//         <a href="/public">Public</a>
//         <a href="/photos">Photos</a>
//         <a href="/friends">Friends</a>
//         <h1>{title}</h1>
//     </div>
// );

const Header = ({title}) => 
<div>
    <Link to="/">Home</Link>
    <Link to="/me">Me</Link>
    <Link to="/photos">Photos</Link>
    <Link to="/public">Public</Link>
    <Link to="/friends">Friends</Link>
    <h1>{title}</h1>
</div>



  

export default Header;