import AboutStation from "./component/AboutStation";
import { StationProvider } from "./component/StationProvider";
import Footer from "./component/Footer";
import Home from "./component/Home";
// import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <StationProvider>
        <Switch>
          <Route path="/details" component={AboutStation} />
          <Route path="/" component={Home} />
        </Switch>
      </StationProvider>
      <Footer />
    </Router>
  );
}

export default App;
