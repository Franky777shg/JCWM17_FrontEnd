import React from 'react'
import {
    FormControl,
    InputGroup,
    Button
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

class RegisPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visibility1: false,
            visibility2: false
        }
    }

    render() {
        const { visibility1, visibility2 } = this.state
        return (
            <div style={styles.contUtama}>
                <div style={styles.contLeft}></div>
                <div style={styles.contRight}>
                    <div style={styles.contForm}>
                        <h1>Need Shoes?</h1>
                        <h3 className="mb-4">Register Now!</h3>
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
                        <label>Email</label>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1" >
                                    <i class="fas fa-envelope"></i>
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Input Here"
                            />
                        </InputGroup>
                        <label>Password</label>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1" onClick={() => this.setState({ visibility1: !visibility1 })}>
                                    {visibility1 ? <i class="fas fa-eye"></i> : <i class="fas fa-eye-slash"></i>}
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Input Here"
                                type={visibility1 ? "text" : "password"}
                            />
                        </InputGroup>
                        <label>Confirm Password</label>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1" onClick={() => this.setState({ visibility2: !visibility2 })}>
                                    {visibility2 ? <i class="fas fa-eye"></i> : <i class="fas fa-eye-slash"></i>}
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Input Here"
                                type={visibility2 ? "text" : "password"}
                            />
                        </InputGroup>
                        <div style={styles.contButton}>
                            <Button variant="primary" style={styles.button}>
                            <i class="fas fa-user-plus" style={{marginRight: '10px'}}></i>
                            Register
                        </Button>
                        </div>
                        <p style={styles.goToRegis}>Already Have an Account? <Link style={{ color: '#303f9f', fontWeight: 'bold' }} to="/login">Login Here</Link></p>
                        <p style={styles.goToRegis}>Go to <Link style={{ color: '#303f9f', fontWeight: 'bold' }} to="/">Home</Link></p>
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    contUtama: {
        display: 'flex',
        height: '100vh'
    },
    contLeft: {
        flexBasis: '50%',
        height: '100vh',
        backgroundColor: 'salmon',
        background: "url(https://images.unsplash.com/photo-1579338559194-a162d19bf842?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80) no-repeat center",
        backgroundSize: 'cover'
    },
    contRight: {
        flexBasis: '50%',
        // backgroundColor: 'lightblue',
        paddingTop: '5vh',
        overflow: 'scroll'
    },
    contForm: {
        width: '40vw',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '10px',
        // border: '1px solid #303f9f',
        padding: '1% 2%'
    },
    contButton: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '10px'
    },
    button: {
        backgroundColor: '#303f9f',
        border: 'none'
    },
    goToRegis: {
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '0'
    }
}

export default RegisPage