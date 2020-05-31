import React from 'react';

const Home = props => {
  return (
    <div className="home flex-column">
      <div className="trademark col-md-10 col-lg-8 col-xl-6 m-auto d-flex flex-column justify-content-center align-items-center">
        <img src="assets/images/daisy.png" alt="daisy flower" className="logo" />
        <h3 className="mt-3">daisy</h3>
        <small className="m-2">Happy tails make happy tales</small>
      </div>
      <div className="col-md-10 col-lg-8 col-xl-6 m-auto d-flex flex-column justify-content-center align-items-center">
        <button className="navi m-4">
          <p className="grad-text m-auto">Log In</p>
        </button>
        <button className="navi m-4">
          <p className="grad-text m-auto">Sign Up</p>
        </button>
      </div>
    </div>
  );

};

export default Home;
