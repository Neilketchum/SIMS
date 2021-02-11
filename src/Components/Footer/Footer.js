import React from 'react'
import { Container, Jumbotron } from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {

        backgroundColor: "lightblue",
        margin: "-35px",
        display: "flex",
        justifyContent: "space-evenly",
        fontSize: "x-large"
    },
    footer: {
        marginTop: "-30px",
        padding: "2rem",
        backgroundColor: "lightblue",
        height: "120%"
    },
    footer__link: {
        padding: "22px"
    }


}));
function Footer() {
    const classes = useStyles();
    return (
        <div className={classes.footer}>
            <div className={classes.container} >
                <div className={classes.footer__link}>
                    Executive Shipping Managment
                </div>
                <div className={classes.footer__link}>
                    Samudra Spirit

                </div>
                <div className={classes.footer__link}>
                    Executive News Bulletin

                </div>
                <div className={classes.footer__link}>
                    Association of Sims Allumni

                </div>
            </div>
            <div >
                <h5 style={{ textAlign: "center", marginTop: "150px" }}>
                    Copyright (c) 2016 Executive Ship Management Pte Ltd
                </h5>

            </div>
        </div>
    )
}

export default Footer
