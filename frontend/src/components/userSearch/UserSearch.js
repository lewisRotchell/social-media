import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles, fade } from "@material-ui/core/styles";
import { getUsers } from "../../redux/users/usersActions";
import { useSelector, useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    display: "block",
    width: "auto",
    paddingRight: "5px",
    marginRight: theme.spacing(0),
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
    width: "auto",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    // [theme.breakpoints.up("md")]: {
    //   width: "20ch",
    // },
  },
  navButton: {
    marginLeft: "auto",

    [theme.breakpoints.up("lg")]: {
      marginRight: "60px",
    },
  },
}));

const UserSearch = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const { userList, loading } = users;

  const handleOnChange = (e) => {
    dispatch(getUsers(e.target.value));
  };

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        onChange={handleOnChange}
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
      />
    </div>
  );
};

export default UserSearch;
