import React from 'react';
// import { Switch, Route } from 'react-router-dom';

const App = () => {
  const [user, setUser] = React.useState(null);
  const [userFetched, setUserFetched] = React.useState(false);

  const getUser = () => {
    fetch('/api/users')
      .then(results => results.json())
      .then(user => {
        setUserFetched(true);
        setUser(user);
      })
      .catch(error => console.error(error));
  };

  React.useEffect(() => getUser(), []);

  if (userFetched) {
    return (
      <>
        <div>{user}</div>
        {/*
        <Switch>
          <Route exact path="/" render={props => <DefaultPage {...props}
            setZip={this.setZip} />} />
          <Route exact path="/activity-filter" render={props => <ActivityFilter {...props}
            zip={this.state.zip}
            setFilter={this.setFilter} />} />
        </Switch> */}
      </>
    );
  } else return null;
};

export default App;
