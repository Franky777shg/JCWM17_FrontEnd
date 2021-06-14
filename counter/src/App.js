import React from 'react'
import {
  Button
} from 'react-bootstrap'
import { connect } from 'react-redux'
import { increment, decrement } from './redux/actions'

class App extends React.Component {
  render() {
    return (
      <div style={{ height: '100vh' }}>
        <h1 style={styles.title}>Counter</h1>
        <div style={styles.container}>
          <Button variant="danger" size='lg' onClick={this.props.decrement}>-</Button>
          <h1 style={styles.content}>{this.props.count}</h1>
          <Button variant="success" size='lg' onClick={this.props.increment}>+</Button>
        </div>
      </div>
    );
  }
}

const styles = {
  title: {
    textAlign: 'center'
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '40%',
    height: '70%',
    margin: 'auto',
  },
  content: {
    fontSize: '200px'
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.countReducer.count
  }
}

export default connect(mapStateToProps, { increment, decrement })(App);
