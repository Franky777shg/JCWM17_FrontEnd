import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

// import pages
import HomePage from './pages/home';
import LoginPage from './pages/login';
import RegisPage from './pages/register';
import DetailPage from './pages/detail';

// import action
import { keepLogin } from './redux/actions'

class App extends React.Component {
  componentDidMount() {
    let id = localStorage.getItem('idUser')
    this.props.keepLogin(id)
  }
  
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisPage} />
          <Route path="/detail" component={DetailPage} />
        </Switch>
      </div>
    );
  }
}

export default connect(null, { keepLogin })(App);
