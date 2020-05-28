import React from 'react';
import { withRouter } from 'react-router-dom'; // Switch, Route

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      fetchingUser: true
    };
  }

  componentDidMount() {
    this.getUser();
  }

  getUser() {
    fetch('/api/users')
      .then(results => results.json())
      .then(user => {
        if (user) {
          this.setState({ user, fetchingUser: false });
        } else {
          this.setState({ fetchingUser: false });
        }
      })
      .catch(error => console.error('There was an error:', error.message));
  }

  render() {
    if (this.state.fetchingUser === true) {
      return null;
    }
    return (
      <>
        <div>Hello!</div>
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
  }
}

export default withRouter(App);
