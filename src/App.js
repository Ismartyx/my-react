import "./App.css";
import HeaderComp from "./layout/Header";
import Hero from "./layout/Hero";
import Main from "./components/Main";
import Footer from "./layout/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderComp />
        <Hero />
        <Main />
      </header>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
