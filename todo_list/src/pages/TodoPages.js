import React from 'react'
import {
    FormControl,
    Button
} from 'react-bootstrap'
import { connect } from 'react-redux'

// import component
import ToDoItem from '../component/TodoItem'

// import actions
import { getData, addData, delData, completeData } from '../redux/actions'

class TodoPages extends React.Component {
    fetchData = () => {
        // memanggil action untuk mendapatkan data
        this.props.getData()
    }

    componentDidMount() {
        this.fetchData()
    }

    onAdd = () => {
        // mempersiapkan data todo baru
        let newTodo = this.refs.todo.value

        // siapkan objek
        let obj = {
            name: newTodo,
            isCompleted: false
        }

        // memanggil action untuk menambah data
        this.props.addData(obj)

        // untuk mengosongkan kembali form control
        this.refs.todo.value = ''
    }

    onDelete = (id) => {
        // memanggil action untuk mendelete data
        this.props.delData(id)
    }

    onComplete = (id) => {
        // memanggil action untuk meng complete data
        this.props.completeData(id)
    }

    showData = () => {
        return (
            this.props.listActivity.map(item => {
                return (
                    <ToDoItem
                        data={item}
                        key={item.id}
                        delete={() => this.onDelete(item.id)}
                        complete={() => this.onComplete(item.id)}
                    />
                )
            })
        )
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

const mapStateToProps = (state) => {
    return {
        listActivity: state.todo.activities
    }
}

const mapDispatchToProps = {
    getData,
    addData,
    delData,
    completeData
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoPages)