import './App.css';
import { Body } from './components/body/Body';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Recent } from './components/recent/Recent';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Body />
      <Recent />
      <Footer />
    </div>
  );
}

export default App;
