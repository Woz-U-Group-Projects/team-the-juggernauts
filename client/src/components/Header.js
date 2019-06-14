import React from 'react';




const Header = ({ title }) => (
    <div>
        <a href="/">Home</a>
        <a href="/me">Me</a>
        <a href="/public">Public</a>
        <a href="/photos">Photos</a>
        <a href="/friends">Friends</a>
        <h1>{title}</h1>
    </div>
);





  

export default Header;