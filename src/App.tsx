import './App.css';
import { Body } from './components/body/Body';
import { Header } from './components/header/Header';
import { Recent } from './components/recent/Recent';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Body />
      <Recent />
    </div>
  );
}

export default App;
