import React from 'react'
import {
    Button
} from 'react-bootstrap'

class ToDoItem extends React.Component {
    render() {
        return (
            <div style={styles.container}>
                <p style={styles.p}>Minum</p>
                <div>
                    <Button variant="danger" className="mr-2">Delete</Button>
                    <Button variant="success">Complete</Button>
                </div>
            </div>
        )
    }
}

const styles = {
    container: {
        backgroundColor: 'salmon',
        width: '25vw',
        height: '10vh',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.5rem',
        borderRadius: '10px',
        marginBottom: '10px'
    },
    p: {
        margin: '0px'
    }
}

export default ToDoItem