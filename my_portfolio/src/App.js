import logo from './logo.svg';
import './App.css';
import About from './components/about/about'
import Header from './components/header/header';
import Footer from './components/footer/footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
