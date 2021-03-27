import React, { useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { useSelector } from "react-redux";

const Dashboard = ({ history }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  console.log(userInfo);
  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    }
  }, [history, userInfo]);

  return (
    <form noValidate autoComplete="off">
      <TextField id="standard-basic" label="Standard" />
    </form>
  );
};

export default Dashboard;
