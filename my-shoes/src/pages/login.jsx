import React from 'react'
import {
    FormControl,
    InputGroup,
    Button
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visibility: false
        }
    }

    render() {
        const { visibility } = this.state
        return (
            <div style={styles.cont}>
                <div style={styles.contForm}>
                    <h1>Hello,</h1>
                    <h3 className="mb-4">Welcome Back!</h3>
                    <label>Username</label>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">
                                <i class="fas fa-user-circle"></i>
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Input Here"
                        />
                    </InputGroup>
                    <label>Password</label>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1" onClick={() => this.setState({ visibility: !visibility })}>
                                {visibility ? <i class="fas fa-eye"></i> : <i class="fas fa-eye-slash"></i>}
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Input Here"
                            type={visibility ? "text" : "password"}
                        />
                    </InputGroup>
                    <div style={styles.contButton}>
                        <Button variant="primary" style={styles.button}>Login</Button>
                    </div>
                    <p style={styles.goToRegis}>Do You Have an Account? <Link style={{ color: '#303f9f', fontWeight: 'bold' }} to="/register">Register</Link></p>
                </div>
            </div>
        )
    }
}

const styles = {
    cont: {
        background: "url(https://images.unsplash.com/photo-1506544777-64cfbe1142df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80) no-repeat center",
        backgroundSize: 'cover',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center'
    },
    contForm: {
        width: '30vw',
        height: '65vh',
        marginTop: '15vh',
        borderRadius: '10px',
        backgroundColor: 'rgba(255, 255, 255, .5)',
        padding: '2%'
    },
    contButton: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '10px'
    },
    button: {
        backgroundColor: '#303f9f',
        border: 'none',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    goToRegis: {
        fontWeight: 'bold',
        textAlign: 'center'
    }
}

export default LoginPage