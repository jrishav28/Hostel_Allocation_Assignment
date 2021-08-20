import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import Hostel from "./components/Hostel";
import HostelNo from "./components/HostelNo";
import Floor from "./components/Floor";
import NavBar from "./components/NavBar";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={SignIn} />
          <PrivateRoute exact path="/signed" component={Home} />
          <PrivateRoute exact path="/hostel" component={Hostel} />
          <PrivateRoute exact path="/hostelno/:category" component={HostelNo} />
          <PrivateRoute
            exact
            path="/floor/:category/:hostelno"
            component={Floor}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
