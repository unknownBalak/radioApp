import Nav from "./component/Nav";
import Search from "./component/Search";
import Body from "./component/Body";
import AboutStation from "./component/AboutStation";
import { StationProvider } from "./component/StationProvider";
import Footer from "./component/Footer";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <StationProvider>
        <Switch>
          <Route path="/details" component={AboutStation} />
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
      </StationProvider>
      <Footer />
    </Router>
  );
}

export default App;
