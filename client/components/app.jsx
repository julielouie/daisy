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
    fetch('/api/health-check')
      .then(res => res.json())
      .then(data => this.setState({ message: data.message || data.error }))
      .catch(err => this.setState({ message: err.message }))
      .finally(() => this.setState({ isLoading: false }));
  }

  fetchUser() {
    fetch('/api/users')
      .then(results => results.json())
      .then(user => {
        if (user) {
          this.setState({ user, fetchingUser: false });
          this.getPoints(user.userId);
        } else {
          this.setState({ fetchingUser: false });
        }
      })
      .catch(error => console.error('There was an error:', error.message));
  }

  render() {
    // return this.state.isLoading
    //   ? <h1>Testing connections...</h1>
    //   : <h1>{ this.state.message.toUpperCase() }</h1>;
    if (this.state.fetchingUser === true) {
      return null;
    }
    return (
      <>
        {/* <Header signOut={this.signOut} user={this.state.user} />
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
