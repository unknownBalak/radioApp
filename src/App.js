import Home from "./component/home/Home";
import AboutStation from "./component/aboutStation/AboutStation";
import { StationProvider } from "./component/store/StationProvider";
import Footer from "./component/footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import FilteredContextProvider from "./component/store/FilterContext.js";
export const ThemeContext = React.createContext();

function App() {
  return (
    <Router>
      <StationProvider>
        <FilteredContextProvider>
          <Switch>
            <Route path="/details" component={AboutStation} />
            <Route path="/" component={Home} />
          </Switch>
        </FilteredContextProvider>
      </StationProvider>
      <Footer />
    </Router>
  );
}
export default App;
