import React from 'react'
import NavigationBar from './component/Navbar'
import TodoPages from './pages/TodoPages'

class App extends React.Component{
    render(){
        return(
            <div>
                <NavigationBar />
                <TodoPages />
            </div>
        )
    }
}

export default App