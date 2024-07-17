// import logo from "./logo.svg";
// import "./App.css";
import { Provider } from "react-redux";
import Body from "./Components/Body";
import appStore from "./utils/appStore";

function App() {
  return (
    // <div className=" text-3xl font-bold">
    <Provider store={appStore}>
      <Body />
    </Provider>
    // </div>
  );
}

export default App;
