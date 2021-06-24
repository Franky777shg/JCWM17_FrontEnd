import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

// import pages
import HomePage from './pages/home';
import LoginPage from './pages/login';
import RegisPage from './pages/register';
import DetailPage from './pages/detail';
import CartPage from './pages/cart';
import HistoryPage from './pages/history';
import HistoryAdmin from './pages/historyAdmin';
import NotFound from './pages/notFound';

// import action
import { keepLogin } from './redux/actions'

class App extends React.Component {
  componentDidMount() {
    let id = localStorage.getItem('idUser')
    this.props.keepLogin(id)
  }

  render() {
    console.log(this.props.role)
    if (this.props.role === 'admin') {
      return (
        <div style={{ backgroundColor: '#A3DDCB' }}>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisPage} />
            <Route path="/detail" component={DetailPage} />
            <Route path="/historyadmin" component={HistoryAdmin} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      )
    } else if (this.props.role === 'user') {
      return (
        <div style={{ backgroundColor: '#A3DDCB' }}>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisPage} />
            <Route path="/detail" component={DetailPage} />
            <Route path="/cart" component={CartPage} />
            <Route path="/history" component={HistoryPage} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      );
    } else {
      <div style={{ backgroundColor: '#A3DDCB' }}>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisPage} />
            <Route path="/detail" component={DetailPage} />
            <Route path="/cart" component={CartPage} />
            <Route path="/history" component={HistoryPage} />
            <Route path="/historyadmin" component={HistoryAdmin} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
    }
  }
}

const mapStateToProps = (state) => {
  return {
    role: state.userReducer.role
  }
}

export default connect(mapStateToProps, { keepLogin })(App);
