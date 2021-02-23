import "./App.css";
import Counter from "./components/Counter";
import FetchComponent from "./components/Fetch";
import PracticeUseContext from "./components/HookPractice/UseContext/PracticeUseContext";

import PracticeUseRef from "./components/HookPractice/UseRef/practice_useRef.js";

function App() {
  return (
    <div className="App">
      <h1>Welcome to the sandbox</h1>
      {/* <Counter initialCount={0} /> */}
      {/* <FetchComponent /> */}
      {/* <ExploreUseEffect /> */}
      {/* <PracticeUseRef /> */}
      <PracticeUseContext />
    </div>
  );
}

export default App;
