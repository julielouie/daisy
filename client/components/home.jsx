import React from 'react';

const Home = props => {
  return (
    <div className="home container flex-column">
      <div className="d-flex flex-column justify-content-center align-items-center h-50">
        <img src="assets/images/daisy.png" alt="daisy flower" className="logo"/>
        <h1>daisy</h1>
        <p>Happy tails make happy tales</p>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center h-50">
        <button>Log In</button>
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default Home;
