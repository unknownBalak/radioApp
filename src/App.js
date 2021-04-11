import Nav from "./component/Nav";
import Search from "./component/Search";
import Body from "./component/Body";
import AboutStation from "./component/AboutStation";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/details">
          <AboutStation />
        </Route>
        <Route path="/">
          <div className="app ">
            <Nav />
            {/* In navigation will display highlight <Nav /> */}
            <div className="fullGrowContainer mainContainer">
              <Search />
              <Body />
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
