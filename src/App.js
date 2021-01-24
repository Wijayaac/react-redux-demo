import store from "./redux/store";
import "./App.css";
import CakeContainter from "./components/CakeContainter";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainter />
      </div>
    </Provider>
  );
}

export default App;
