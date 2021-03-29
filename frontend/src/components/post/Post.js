import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: "20px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },

  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  numLikes: {
    fontSize: "16px",
  },
  likeButton: {
    padding: "0 16px 0 8px",
  },
  cardHeader: {
    paddingBottom: "0",
  },
  CardContent: {
    paddingBottom: "0",
  },
}));
const Post = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.cardHeader}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        title="Name"
        subheader="September 14, 2016"
      />
      {/* <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      /> */}
      <CardContent className={classes.CardContent}>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={classes.likeButton}
          aria-label="add to favorites"
        >
          <FavoriteIcon /> <span className={classes.numLikes}>1</span>
        </IconButton>
        <IconButton aria-label="share">{/* <ShareIcon /> */}</IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
