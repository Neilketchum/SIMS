import React from 'react'
import { Carousel } from 'react-bootstrap'

import { makeStyles } from '@material-ui/core/styles';
import slider_1 from "../../assets/slider_1.jpg"
import slider_2 from "../../assets/slider_2.png"
import slider_3 from "../../assets/slider_3.jpg"
const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        justifyContent: "space-evenly",
        marginTop: "2rem",
        flexDirection: "row",

    }

}));
function BodyCarousel() {
    const classes = useStyles();
    return (
        <div>
            <Carousel >
                <Carousel.Item >
                    <div>
                        <img
                            className="d-block w-100"
                            src={slider_1}
                            alt="First slide"
                            style={{ width: "100%", height: "700px", objectFit: "fill", display: "block" }}
                        />
                    </div>

                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        className="d-block w-100"
                        src={slider_2}
                        alt="Third slide"
                        style={{ maxWidth: "100%", maxHeight: "700px", objectFit: "fill", display: "block" }}
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        className="d-block w-100"
                        src={slider_3}
                        alt="Third slide"
                        style={{ maxWidth: "100%", maxHeight: "700px", objectFit: "fill", display: "block" }}
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default BodyCarousel
