import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderMain from "./components/header.jsx";
import UncontrolledExample from "./components/carosel.jsx";
import MainCard from "./components/card.jsx";
function App() {
  return (
    <div className="App">
      <HeaderMain />
      <UncontrolledExample />
      <div className="mainDiv">
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
      </div>
    </div>
  );
}

export default App;
