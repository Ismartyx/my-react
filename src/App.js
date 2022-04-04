// import logo from './logo.svg';
import './App.css';
import HeaderComp from './layout/Header';
import Hero from './layout/Hero';
import Main from './components/Main';
import Footer from './layout/Footer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <HeaderComp />
        <Hero />
        <Main />
      </header>
      <footer>
        <Footer />
      </footer>
    </div>
  );

}

export default App;
