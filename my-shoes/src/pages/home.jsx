import React from 'react'
import Axios from 'axios'
import {
    Carousel,
    Card,
    Button
} from 'react-bootstrap'
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
        console.log(this.state.carousels)
        console.log(this.state.products)
        return (
            <div>
                <NavigationBar />
                <div style={styles.container}>
                    <Carousel style={styles.carousel}>
                        {this.state.carousels.map(item => {
                            return (
                                <Carousel.Item>
                                    <img
                                        className="d-block"
                                        src={item.image}
                                        alt="First slide"
                                        style={{ width: '80vw', height: '80vh' }}
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
                            {this.state.products.map(item => {
                                console.log(item.name.length)
                                return (
                                    <Card style={{ width: '18rem', marginBottom: '15px', marginTop: '15px', padding: '15px' }}>
                                        <Card.Img variant="top" src={item.images[0]} />
                                        <Card.Body style={styles.cardBody}>
                                            <Card.Title style={styles.cardTitle}>{item.name}</Card.Title>
                                            <Card.Text><strong>IDR {item.price.toLocaleString()}</strong></Card.Text>
                                            <div style={styles.contButton}>
                                                <Button variant="outline-primary"><i class="far fa-bookmark"></i></Button>
                                                <Button style={{backgroundColor: '#303f9f'}}>
                                                    <i class="fas fa-cart-plus"></i> Buy Now
                                                </Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

const styles = {
    container: {
        marginTop: '11vh',
        paddingTop: '3vh'
    },
    carousel: {
        height: '80vh',
        width: '80vw',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    caroCaption: {
        backgroundColor: 'rgba(0, 0, 0, .3)',
        marginBottom: '5%',
        width: '45%',
        right: '0',
        left: '0',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    sectProducts: {
        marginTop: '10px',
        marginLeft: '5vw',
        marginRight: '5vw',
    },
    contProducts: {
        // backgroundColor: 'salmon',
        display: 'flex',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap'
    },
    cardBody: {
        // display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'space-between',
        // backgroundColor: 'salmon'
    },
    cardTitle: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    },
    contButton: {
        display: 'flex',
        justifyContent: 'space-around'
    }
}

export default HomePage