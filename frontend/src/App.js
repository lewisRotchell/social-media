import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/header/Header";
import LandingPage from "./pages/landing-page/LandingPage";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/signin" component={LandingPage} />
      </Switch>
    </div>
  );
};

export default App;
