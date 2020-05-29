import React from 'react';

const Home = props => {
  return (
    <div className="home container flex-column">
      <div className="d-flex flex-column justify-content-center align-items-center h-50">
        <img src="assets/images/daisy.png" alt="daisy flower" className="logo"/>
        <h3>daisy</h3>
        <small>Happy tails make happy tales</small>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <button className="navi m-4">Log In</button>
        <button className="navi m-4">Sign Up</button>
      </div>
    </div>
  );
};

export default Home;
