// import logo from "./logo.svg";
import "./App.scss";
import Nominations from "./components/Nominations";
import SearchAndList from "./components/SearchAndList";

const App = () => {
  return (
    <div className="App">
      <SearchAndList />
      <Nominations />
    </div>
  );
};

export default App;
