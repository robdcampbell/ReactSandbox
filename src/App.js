import "./App.css";
import Counter from "./components/Counter";
import FetchComponent from "./components/Fetch";
import ExploreUseEffect from "./components/ExploreUseEffect";

function App() {
  return (
    <div className="App">
      <h1>Welcome to the sandbox</h1>
      {/* <Counter initialCount={0} /> */}
      {/* <FetchComponent /> */}
      <ExploreUseEffect />
    </div>
  );
}

export default App;
