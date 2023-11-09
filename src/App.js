// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
// import Textbox from "./components/Textbox";
import About from "./components/About";

function App() {
  return (
    <>
      < Navbar title = "TextUtils" aboutText = "about Us" />
      <div className="container my-3">
          {/* <Textbox heading="Enter text here to analyse" /> */}
          <About />
      </div>
    </>
  );
}

export default App;
