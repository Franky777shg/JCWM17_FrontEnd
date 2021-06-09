import React from 'react'
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
            activities: [
                { id: 1, name: 'Makan' },
                { id: 2, name: 'Tidur' },
                { id: 3, name: 'Coding' }
            ]
        }
    }

    showData = () => {
        return (
            this.state.activities.map(item => {
                return <ToDoItem data={item} key={item.id} />
            })
        )
    }

    onAdd = () => {
        // mempersiapkan data todo baru dan id nya
        let newTodo = this.refs.todo.value
        let id = this.state.activities[this.state.activities.length - 1].id + 1

        // menyiapkan array untuk state yang baru
        let tempArr = [...this.state.activities]

        // menambahkan data baru ke dalam array tempArr
        tempArr.push({id, name: newTodo})
        // console.log(tempArr)

        // mengganti state activities menjadi tempArr dimana tempArr adalah array yang sudah dimasukan data baru
        this.setState({activities: tempArr})

        // untuk mengosongkan kembali form control
        this.refs.todo.value = ''
    }

    render() {
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
            </div >
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