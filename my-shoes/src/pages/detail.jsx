import React from 'react'
import Axios from 'axios'
import NavigationBar from '../component/navigationBar'
import {
    Carousel,
    Button,
    FormControl
} from 'react-bootstrap'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class DetailPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            product: {},
            qty: 0,
            toLogin: false
        }
    }

    componentDidMount() {
        Axios.get(`http://localhost:2000/products/${this.props.location.search.substring(1)}`)
            .then(res => {
                this.setState({ product: res.data })
            })
    }

    onMinus = () => {
        this.setState({ qty: this.state.qty - 1 })
    }

    onPlus = () => {
        this.setState({ qty: this.state.qty + 1 })
    }

    onCheckout = () => {
        console.log(this.props.username)

        if (!this.props.username) {
            return this.setState({ toLogin: true })
        }
    }

    render() {
        const { product, qty, toLogin } = this.state

        if (toLogin) {
            return <Redirect to="/login" />
        }

        return (
            <>
                <NavigationBar />
                <div style={styles.contTitle}>
                    <h1>Detail Page</h1>
                    <Button variant="outline-light" onClick={this.onCheckout}>Checkout</Button>
                </div>
                <div style={{ display: 'flex' }}>
                    <div style={styles.contImg}>
                        <Carousel style={{ height: '70vh' }}>
                            {(product.images ? product.images : []).map((item, index) => {
                                return (
                                    <Carousel.Item key={index}>
                                        <img
                                            className="d-block"
                                            style={styles.img}
                                            src={item}
                                            alt="First slide"
                                        />
                                    </Carousel.Item>
                                )
                            })}
                        </Carousel>
                    </div>
                    <div style={styles.contDesc}>
                        <h1>{product.name ? product.name : ""}</h1>
                        <p>Category: {product.category ? product.category : ""}</p>
                        <p>Brand: {product.brand ? product.brand : ""}</p>
                        <p>Color: {product.colour ? product.colour : ""}</p>
                        <p>Description: {product.description ? product.description : ""}</p>
                        <p>Price: {product.price ? product.price : ""}</p>
                        <p>Stock: {product.stock ? product.stock : ""}</p>
                        <p>Quantity:</p>
                        <div style={{ display: 'flex', width: '30%', justifyContent: 'space-around' }}>
                            <Button onClick={this.onMinus}>-</Button>
                            <FormControl
                                style={{ width: '50%' }}
                                value={qty}
                                onChange={(e) => this.setState({ qty: +e.target.value })}
                            />
                            <Button onClick={this.onPlus}>+</Button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const styles = {
    contTitle: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1%',
        backgroundColor: '#03506F',
        color: '#f8f9fa'
    },
    contImg: {
        backgroundColor: '#03506F',
        flexBasis: '40%'
    },
    contDesc: {
        backgroundColor: 'lightblue',
        flexBasis: '60%',
        padding: '1%'
    },
    img: {
        height: '70%',
        width: '70%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
}

const mapStateToProps = (state) => {
    return {
        username: state.userReducer.username
    }
}
export default connect(mapStateToProps)(DetailPage)