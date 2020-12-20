// import logo from "./logo.svg";
import "./App.scss";
import { connect } from "react-redux";
import { addNominee } from "./redux/actions/nominationActions";
import Nominations from "./components/Nominations";
import SearchAndList from "./components/SearchAndList";

const App = ({ addNominee }) => {
  return (
    <div className="App">
      {/* <button onClick={() => addNominee({ id: 546, name: "test" })}>
                Add dispatch
            </button> */}
      <SearchAndList />
      {/* <Nominations /> */}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addNominee: (nominee) => dispatch(addNominee(nominee)),
});

export default connect(null, mapDispatchToProps)(App);
