import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import logo from "../../assets/simslogo.jpeg"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    nav__logo: {
        height: "60px",
        width: "60px"
    },
    container: {
        padding: "7px 20px",
        zIndex: "12",
        boxShadow: " 0 14px 12px rgba(0,0,0,0.25), 0 10px 12px rgba(0,0,0,0.22)",

    },
    nav__links: {
        marginLeft: "auto",
        padding: "10px 40px"
    },


}));

function TopBar() {
    const classes = useStyles();

    return (
        <div>
            <Navbar bg="primary" variant="dark" className={classes.container} boxShadow={3}>
                <Navbar.Brand href="#home" stye={{ display: 'flex' }} >
                    <img className={classes.nav__logo} src={logo} alt="Logo"></img>
                </Navbar.Brand>

                <Nav className={classes.nav__links}>
                    <Nav.Link className={classes.nav__link} href="#About" >About Us</Nav.Link>
                    <Nav.Link className={classes.nav__link} href="#Training">Training</Nav.Link>
                    <Nav.Link className={classes.nav__link} href="#Course">Course Application</Nav.Link>
                    <Nav.Link className={classes.nav__link} href="#Gallery">Gallery</Nav.Link>
                    <Nav.Link className={classes.nav__link} href="#Research">Research</Nav.Link>
                    <Nav.Link className={classes.nav__link} href="#Events">Events</Nav.Link>
                    <Nav.Link className={classes.nav__link} href="#Allumni">Allumni</Nav.Link>
                    <Nav.Link className={classes.nav__link} href="#Career">Career</Nav.Link>

                </Nav>


            </Navbar>

        </div>
    )
}

export default TopBar

