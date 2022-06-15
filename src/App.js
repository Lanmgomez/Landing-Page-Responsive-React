import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import MainImage01 from './components/main/MainImage01';
import MainImage02 from './components/main/MainImage02';
import MainImage03 from './components/main/MainImage03';
import MainState from './components/main/MainState';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
        <Header />
          <Main />
            <MainState />
            <MainImage01 />
            <MainImage02 />
            <MainImage03 />
        <Footer />
    </div>
  );
}

export default App;
