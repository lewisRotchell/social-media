import { useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadUser } from "./redux/user/userActions";
import Header from "./components/header/Header";
import LandingPage from "./pages/landing-page/LandingPage";
import Dashboard from "./pages/dashboard/Dashboard";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => [dispatch(loadUser())]);
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
};

export default App;