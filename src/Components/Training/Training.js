import React from 'react'
import { Card, Button, } from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles';
import train_1 from "../../assets/train_1.jpg"
import train_2 from "../../assets/train_2.jpg"
import train_3 from "../../assets/train_3.jpg"
import { motion } from "framer-motion"
const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        justifyContent: "space-evenly",
        marginTop: "2rem",
        flexDirection: "row",

    }

}));
function Training() {
    const classes = useStyles();
    return (
        <motion.div
            className={classes.container}

        >
            <motion.div animate={{ marginTop: 200, rotateY: 360 }} >
                <Card style={{ width: '18rem' }} >
                    <Card.Img variant="top" src={train_1} />
                    <Card.Body >
                        <Card.Title>Pre-Sea Training</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">SIMS Lonavala</Card.Subtitle>


                        <Card.Link href="#">BTech</Card.Link>
                        <Card.Link href="#">Prospectus</Card.Link>
                        <Card.Link href="#" style={{ display: "flex", alignContent: "start", margin: 0 }}><div>Deck Officer Training (DNS)</div></Card.Link>

                        <Card.Link href="#" style={{ display: "block", margin: 0 }}>2nd year of B.Tech Marine Engineer</Card.Link>

                        <Card.Link href="#" style={{ display: "block", margin: 0 }}>Electro Technical Officer  (ETO)</Card.Link>



                        <Button variant="primary" size="lg" style={{ position: "relative", left: "7%", right: "10%", width: "80%", bottom: "-12px", }}>Learn More</Button>
                    </Card.Body>
                </Card>
            </motion.div>




            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={train_3} />
                <Card.Body>
                    <Card.Title>Off Shore Training</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">SIMS Mumbai</Card.Subtitle>
                    <Card.Link href="#">BTech</Card.Link>
                    <Card.Link href="#">Prospectus</Card.Link>
                    <Card.Link href="#" style={{ display: "flex", alignContent: "start", margin: 0 }}><div>Deck Officer Training (DNS)</div></Card.Link>

                    <Card.Link href="#" style={{ display: "block", margin: 0 }}>2nd year of B.Tech Marine Engineer</Card.Link>

                    <Card.Link href="#" style={{ display: "block", margin: 0 }}>Electro Technical Officer  (ETO)</Card.Link>

                    <Button variant="primary" size="lg" style={{ position: "relative", left: "7%", right: "10%", width: "80%", bottom: "-12px", }}>Learn More</Button>

                </Card.Body>

            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={train_2} />
                <Card.Body>
                    <Card.Title>Post-Sea Training</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">SIMS Mumbai</Card.Subtitle>
                    <Card.Link href="#">DP Basic</Card.Link>
                    <Card.Link href="#">DP Advanced</Card.Link>
                    <Card.Link href="#" style={{ display: "flex", alignContent: "start", margin: 0 }}>DP Maintenance</Card.Link>
                    <Button variant="primary" size="lg" style={{ position: "relative", marginTop: "30%", left: "7%", bottom: "-10px", width: "80%", right: "10%" }}>Learn More</Button>
                </Card.Body>
            </Card>

        </motion.div>
    )
}

export default Training
