import React, { useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useSelector, useDispatch } from "react-redux";
import { loadUser } from "../../redux/user/userActions";

import { BeatLoader } from "react-spinners";
import { css } from "@emotion/core";
import Post from "../../components/post/Post";
import PostList from "../../components/postList/PostList";

const loaderCSS = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: "20px",
    marginBottom: "30px",
  },
  form: {
    width: "100%",
    paddingTop: "20px",
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  follow: {
    marginBottom: "0",
    padding: "0 5px",
    color: "primary",
  },
}));

const Dashboard = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo, loading, error } = userLogin;

  const classes = useStyles();

  return (
    <>
      {loading ? (
        <BeatLoader loading css={loaderCSS} />
      ) : error ? (
        <h1>ERROR</h1>
      ) : (
        <Container maxWidth="sm">
          <Card className={classes.root}>
            <form noValidate autoComplete="off" className={classes.form}>
              <Grid
                container
                spacing={9}
                justify="center"
                alignItems="flex-end"
              >
                <Grid item xs={1}>
                  <Avatar
                    justify="center"
                    className={classes.avatar}
                    alt={userInfo.username}
                    src={userInfo.photo}
                    className={classes.avatar}
                  />
                </Grid>
                <Grid item xs={10}>
                  <TextField
                    fullWidth
                    id="standard-basic"
                    label={`Say something, ${userInfo.username}`}
                  />
                </Grid>
              </Grid>
              <CardActions style={{ marginLeft: "8px" }}>
                <Button size="small" color="primary">
                  Followers: {userInfo.followers.length}
                </Button>
                <Button size="small" color="primary">
                  Following: {userInfo.following.length}
                </Button>
              </CardActions>
            </form>
          </Card>
          <PostList />
        </Container>
      )}
    </>
  );
};

export default Dashboard;
