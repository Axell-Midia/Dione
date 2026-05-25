import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section id="center">
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <Input placeholder="Enter your text here" />
        <Button>Click me</Button>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>
    </>
  );
}

export default App;
