import React from 'react'
import Axios from 'axios'
import {
    Carousel,
    Card,
    Button
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import NavigationBar from '../component/navigationBar'

class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            carousels: [],
            products: []
        }
    }

    componentDidMount() {
        Axios.get('http://localhost:2000/slider')
            .then(res => {
                this.setState({ carousels: res.data })
                Axios.get('http://localhost:2000/products')
                    .then(res => {
                        this.setState({ products: res.data })
                    })
            })
    }

    render() {
        // console.log(this.state.carousels)
        // console.log(this.state.products)
        return (
            <div style={{ backgroundColor: '#A3DDCB', }}>
                <NavigationBar />
                <div>
                    <Carousel style={styles.carousel}>
                        {this.state.carousels.map((item, index) => {
                            return (
                                <Carousel.Item key={index}>
                                    <img
                                        className="d-block"
                                        src={item.image}
                                        alt="First slide"
                                        style={{ width: '90vw', height: '90vh' }}
                                    />
                                    <Carousel.Caption style={styles.caroCaption}>
                                        <h2>{item.title}</h2>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            )
                        })}
                    </Carousel>
                    <div style={styles.sectProducts}>
                        <h1>Our Products</h1>
                        <div style={styles.contProducts}>
                            {this.state.products.map((item, index) => {
                                return (
                                    <Card style={{ width: '18rem', marginBottom: '15px', marginTop: '15px' }} key={index}>
                                        <div style={styles.cardImg}>
                                            <Card.Img variant="top" src={item.images[0]} />
                                        </div>
                                        <Card.Body style={styles.cardBody}>
                                            <Card.Title style={styles.cardTitle}>{item.name}</Card.Title>
                                            <Card.Text><strong>IDR {item.price.toLocaleString()}</strong></Card.Text>
                                            <div style={styles.contButton}>
                                                <Button variant="outline-light">
                                                    <i className="far fa-bookmark"></i>
                                                </Button>
                                                <Button variant="outline-light" as={Link} to={`/detail?${item.id}`}>
                                                    <i className="fas fa-cart-plus"></i> Buy Now
                                                </Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <footer style={styles.footer}>
                    <div style={styles.footerList}>
                        <div style={styles.footerItem}>
                            <h6 style={styles.footerItemh6}>Product</h6>
                            <a href="#">Download</a>
                            <a href="#">Pricing</a>
                            <a href="#">Locations</a>
                        </div>
                        <div style={styles.footerItem}>
                            <h6 style={styles.footerItemh6}>Engage</h6>
                            <a href="#">FAQ</a>
                            <a href="#">Tutorials</a>
                            <a href="#">About Us</a>
                        </div>
                        <div style={styles.footerItem}>
                            <h6 style={styles.footerItemh6}>Earn Money</h6>
                            <a href="">Become Partners</a>
                        </div>
                    </div>
                    <div>
                        <h6 style={{ textAlign: 'center', margin: '0' }}>Copyright@Franky777shg</h6>
                    </div>
                </footer>
            </div>
        )
    }
}

const styles = {
    carousel: {
        height: '90vh',
        width: '90vw',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    caroCaption: {
        backgroundColor: 'rgba(0, 0, 0, .5)',
        marginBottom: '5%',
        width: '45%',
        right: '0',
        left: '0',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    sectProducts: {
        marginTop: '30px',
        marginLeft: '5vw',
        marginRight: '5vw',
        borderTop: '1px solid black',
        paddingTop: '20px',
    },
    contProducts: {
        display: 'flex',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        borderRadius: "10px"
    },
    cardImg: {
        padding: '15px'
    },
    cardBody: {
        backgroundColor: '#03506F',
        borderRadius: '15px 15px 0 0',
        color: '#f8f9fa'
    },
    cardTitle: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    },
    contButton: {
        display: 'flex',
        justifyContent: 'space-around'
    },
    footer: {
        backgroundColor: "#FFE3DE",
    },
    footerList: {
        display: "flex",
        justifyContent: "space-around",
        padding: "100px 0",
        marginTop: "15px"
    },
    footerItem: {
        display: "flex",
        flexDirection: "column",
    },
    footerItemh6: {
        fontWeight: "600",
        fontSize: "18px",
        margin: "0",
        marginBottom: "10px",
    },
}

export default HomePage