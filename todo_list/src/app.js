import React from 'react'

// import component
import ToDoItem from './component/TodoItem'

class App extends React.Component {
    render() {
        return (
            <div style={styles.container}>
                <h1>TO DO LIST</h1>
                <ToDoItem />
                <ToDoItem />
                <ToDoItem />
                <ToDoItem />
            </div>
        )
    }
}

const styles = {
    container: {
        padding: '15px'
    }
}

export default App