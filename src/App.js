import logo from "./logo.png";
import Dictionary from "./Dictionary.js";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <br />
        <br />
        <footer className="text-center App-footer">
          <small>
            This project was coded by{" "}
            <a
              href="https://github.com/janeosa"
              target="_blank"
              rel="noreferrer"
            >
              Jane Ighodaro
            </a>{" "}
            , is open sourced on{" "}
            <a
              href="https://github.com/janeosa/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://dictionary-app-by-jane-osa.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>{" "}
          </small>
        </footer>
      </div>
    </div>
  );
}
