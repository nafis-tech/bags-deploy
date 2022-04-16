import React from 'react'
import Axios from 'axios'
import {
    Carousel,
    Card,
    Button
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import NavigationBar from '../component/navigationBar'

const devEnv = process.env.NODE_ENV !== "production";
const {REACT_APP_DEV_URL, REACT_APP_PROD_URL} = process.env;
const api = `${devEnv ? REACT_APP_DEV_URL : REACT_APP_PROD_URL}`

// `http://localhost:2000

class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            carousels: [],
            products: []
        }
    }

    componentDidMount() {
        Axios.get(`${api}slider`)
            .then(res => {
                this.setState({ carousels: res.data })
                Axios.get(`${api}products`)
                    .then(res => {
                        this.setState({ products: res.data })
                    })
            })
    }

    render() {
        // console.log(this.state.carousels)
        // console.log(this.state.products)
        return (
            <div style={{ backgroundColor: '#FFCDDD', paddingTop: '10vh'}}>
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
                    <div id="ourproduct" style={styles.sectProducts}>
                        <h1 className="product" >Our Bags</h1>
                        <div style={styles.contProducts}>
                            {this.state.products.map((item, index) => {
                                return (
                                    <Card style={{ width: '18rem', marginBottom: '15px', marginTop: '15px' }} key={index}>
                                        <div style={styles.cardImg}>
                                            <Card.Img variant="top" src={item.images[0]} />
                                        </div>
                                        <Card.Body style={styles.cardBody}>
                                            <Card.Title style={styles.cardTitle}>{item.name}</Card.Title>
                                            <Card.Text><strong>IDR {item.price.toLocaleString()},00</strong></Card.Text>
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
                <div id="contactus" style={styles.sectContact}>
                    <h1  >Contact Us</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos inventore, fugit magni non molestiae ea id earum veritatis iusto magnam expedita enim consequuntur voluptates ratione et explicabo? Vel, nulla consectetur?</p>
                    <div style={styles.contItem}>
                        <a style={{padding: '10px'}} href="http://wa.me/6285731040552"><i class="fab fa-whatsapp"></i> WhatsApp</a>
                        <a style={{padding: '10px'}} href="https://www.linkedin.com/in/nurul-hidayati-khusnia-fatatik-212646190/" ><i class="fab fa-linkedin"></i> Linkedin</a>
                        <a style={{padding: '10px'}} href="http://instagram.com/conannia17?utm_source=qr"><i class="fab fa-instagram"></i> Instagram</a>
                        <a style={{padding: '10px'}} href="https://twitter.com/khusniafh"><i class="fab fa-twitter"></i> Twitter</a>
                        <a style={{padding: '10px'}} href="mailto:conannia17@gmail.com"><i class="fas fa-envelope-open-text"></i>  conannia17@gmail.com</a>

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
                        <h6 style={{ textAlign: 'center', margin: '0' }}>Copyright@Conannia17</h6>
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
    sectContact: {
        marginTop: '30px',
        marginLeft: '5vw',
        marginRight: '5vw',
        borderTop: '1px solid black',
        paddingTop: '20px',
        textAlign: 'center',
    },
    contItem: {
        margin: '15px 20px',
        padding: '20px',
        justifyContent: 'space-evenly',
    },
    contProducts: {
        display: 'flex',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        borderRadius: "10px"
    },
    cardImg: {
        padding: '15px',
        height: '210px'
    },
    cardBody: {
        backgroundColor: '#B762C1',
        borderRadius: '15px 15px 3px 3px',
        color: '#f8f9fa',
    
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