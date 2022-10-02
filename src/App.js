import { Button } from "./stories/Button";
import "./App.css";
import { Counter } from "./components/Counter/Counter";
import { Rating } from "./components/Rating/Rating";

function App() {
  return (
    <div className="App">
      <Button label="Looooooooong button" onClick={() => {}} size="large" />
      <Counter />
      <Rating />
    </div>
  );
}

export default App;
