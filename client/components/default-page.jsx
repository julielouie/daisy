import React from 'react';

const DefaultPage = props => {
  return (
    <div>
      <div className="">
        <img src="assets/images/daisy.png" alt="daisy flower"/>
        <h1>daisy</h1>
        <p>Happy tails make happy tales</p>
      </div>
      <div>
        <button>Log In</button>
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default DefaultPage;
