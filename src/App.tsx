import { Component, createMemo, createSignal } from "solid-js";
import "./app.css";
import { BasicComponentsProps } from "./types";

const emojisList = ["🚀", "💚", "🌸"];
const BasicComponent = (props: BasicComponentsProps) => {
  const base64Encoded = createMemo(() => {
    try {
      return btoa(props.value);
    } catch {
      return props.value;
    }
  });

  const emoji = () => emojisList[props.value.length % emojisList.length];

  return (
    <div>
      <div class="output">
        <h4>{`Your base64 message ${emoji()}`}</h4>
      </div>
      <p>{base64Encoded}</p>
    </div>
  );
};

const App: Component = () => {
  const [happinessIs, setHappinessIs] = createSignal<string>("");
  return (
    <div class="app">
      <BasicComponent value={happinessIs()} />
      <input
        class="happy-text"
        type="text"
        onInput={(e) => setHappinessIs(e.currentTarget.value)}
      ></input>
    </div>
  );
};

export default App;
