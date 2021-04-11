import Nav from "./component/Nav";
import Search from "./component/Search";
import Body from "./component/Body";
import "./App.css";
// import  { ReactRouter }
function App() {
  return (
    <div className="app ">
      <Nav />
      {/* In navigation will display highlight <Nav /> */}
      <div className="fullGrowContainer mainContainer">
        <Search />
        <Body />
      </div>
    </div>
  );
}

export default App;
