import React, { useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useSelector, useDispatch } from "react-redux";
import { loadUser } from "../../redux/user/userActions";

import { BeatLoader } from "react-spinners";
import { css } from "@emotion/core";

const loaderCSS = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
}));

const Dashboard = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo, loading, error } = userLogin;
  console.log(loading);

  // useEffect(() => {
  //   dispatch(loadUser());
  // }, [dispatch]);

  const classes = useStyles();

  return (
    <>
      {loading ? (
        <BeatLoader loading css={loaderCSS} />
      ) : error ? (
        <h1>ERROR</h1>
      ) : (
        <Container maxWidth="sm">
          <form noValidate autoComplete="off" className={classes.form}>
            <Grid container spacing={7} justify="center" alignItems="flex-end">
              <Grid item xs={1}>
                <Avatar
                  alt={userInfo.username}
                  src={userInfo.photo}
                  className={classes.avatar}
                />
              </Grid>
              <Grid item xs={10}>
                <TextField fullWidth id="standard-basic" label="Standard" />
              </Grid>
            </Grid>
          </form>
        </Container>
      )}
    </>
  );
};

export default Dashboard;
