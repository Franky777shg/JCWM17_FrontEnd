import React from 'react'
import {
    Navbar
} from 'react-bootstrap'
import { connect } from 'react-redux'

class NavigationBar extends React.Component {
    render() {
        return (
            <Navbar style={styles.container} bg="dark">
                <h3>TO DO LIST APP</h3>
                <h3>You have {this.props.listActivity.length} To Do Item(s)</h3>
            </Navbar>
        )
    }
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        color: 'white'
    }
}

const mapStateToProps = (state) => {
    return {
        listActivity: state.todo.activities
    }
}

export default connect(mapStateToProps)(NavigationBar)