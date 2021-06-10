import React from 'react'
import Axios from 'axios'
import {
    FormControl,
    Button
} from 'react-bootstrap'

// import component
import ToDoItem from './component/TodoItem'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activities: []
        }
    }

    fetchData = () => {
        Axios.get('http://localhost:2000/activities')
            .then(res => {
                this.setState({ activities: res.data })
            })
    }

    componentDidMount() {
        this.fetchData()
    }

    // componentDidUpdate() {
    //     alert('component did update')
    // }

    onAdd = () => {
        // mempersiapkan data todo baru
        let newTodo = this.refs.todo.value

        // siapkan objek
        let obj = {
            name: newTodo,
            isCompleted: false
        }

        // menambah data baru di db json
        Axios.post('http://localhost:2000/activities', obj)
            .then(res => {
                console.log(res.data)
                // Axios.get('http://localhost:2000/activities')
                //     .then(res => {
                //         this.setState({ activities: res.data })
                //     })
                this.fetchData()
            })

        // untuk mengosongkan kembali form control
        this.refs.todo.value = ''
    }

    onDelete = (id) => {
        Axios.delete(`http://localhost:2000/activities/${id}`)
            .then(res => {
                console.log(res.data)
                this.fetchData()
            })
    }

    showData = () => {
        return (
            this.state.activities.map(item => {
                return (
                    <ToDoItem
                        data={item}
                        key={item.id}
                        delete={() => this.onDelete(item.id)}
                    />
                )
            })
        )
    }

    render() {
        // alert('Component Render')
        return (
            <div style={styles.container} >
                <h1>TO DO LIST</h1>
                {this.showData()}
                <div style={styles.input}>
                    <FormControl
                        placeholder="Input new Todo"
                        ref="todo"
                    />
                    <Button variant="primary" onClick={this.onAdd} className="ml-2">Add</Button>
                </div>
            </div>
        )
    }
}

const styles = {
    container: {
        padding: '15px'
    },
    input: {
        width: '25vw',
        display: 'flex'
    }
}

export default App