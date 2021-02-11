import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import yus1 from "../../assets/yus1.jpeg";
import yus3 from "../../assets/yus3.jpeg";
import yus2 from "../../assets/yus2.jpeg";
const useStyles = makeStyles(theme => ({
  root: {
    width: 450,
    height: 400
  },
  head: {
    textAlign: "center",
    margin: "2rem",
    fontWeight: "800",
    fontSize: "3rem"
  },
  yuscontainer: {
    display: "flex",
    justifyContent: "space-evenly"
  },
  reason: {
    // border: "2px solid red",
    // padding: "1.2rem",
    fontSize: "2rem",
    fontWeight: "600"
    // width: "40%",
    // height: "450px"
  }
}));
function WhyUs() {
  const classes = useStyles();
  return (
    <div>
      <h2 className={classes.head}>Why Us ?</h2>
      <div className={classes.yuscontainer}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="220"
              image={yus1}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Mesmerizing Campus
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                100% in-house Guaranteed Placements on ESM Managed Vessels
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="220"
              image={yus2}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Mesmerizing Campus
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                100% in-house Guaranteed Placements on ESM Managed Vessels
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="World Class Faculty"
              height="220"
              image={yus3}
              title="World Class Faculty"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                World Class Faculty
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Best in Class Faculty,that brings the best out of the students
                and nurtures them to be the best seafarers of tomorrow!
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}

export default WhyUs;
{
  /* <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="220"
              image={yus1}
              title="Contemplative Reptile"
            />
            <CardContent style={{ textAlign: "center" }}>
              <Typography gutterBottom variant="h5" component="h2">
                Mesmerizing Campus
              </Typography>
              100% in-house Guaranteed Placements on ESM Managed Vessels
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
              ></Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" variant="contained" color="primary>
              Learn More
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="220"
              image={yus2}
              title="Contemplative Reptile"
            />
            <CardContent style={{ textAlign: "center" }}>
              <Typography gutterBottom variant="h5" component="h2">
                World Class Faculty
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                100% In-house Guaranteed Placements on ESM Managed Vessels
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" variant="contained" color="primary>
              Learn More
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="220"
              image={yus3}
              title="Contemplative Reptile"
            />
            <CardContent style={{ textAlign: "center" }}>
              <Typography gutterBottom variant="h5" component="h2">
                100% In-house Placements
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                100% in-house Guaranteed Placements on ESM Managed Vessels
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" variant="contained" color="primary>
              Learn More
            </Button>
          </CardActions> */
}
