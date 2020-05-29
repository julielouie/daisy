import React from 'react';

const Home = props => {
  return (
    <div className="home container flex-column">
      <div className="d-flex flex-column align-items-center">
        <img src="assets/images/daisy.png" alt="daisy flower"/>
        <h1>daisy</h1>
        <p>Happy tails make happy tales</p>
      </div>
      <div className="d-flex flex-column align-items-center">
        <button>Log In</button>
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default Home;
