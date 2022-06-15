import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Kyiv" />
        <br />
        <footer>
            KNU FIT IPZ-23.2
        </footer>
      </div>
    </div>
  );
}
