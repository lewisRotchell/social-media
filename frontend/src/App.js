import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/header/Header";
import LandingPage from "./pages/landing-page/LandingPage";
import Dashboard from "./pages/dashboard/Dashboard";

const App = () => {
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
