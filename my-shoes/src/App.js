import React from 'react';

// import components
import NavigationBar from './component/navigationBar';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default App;
