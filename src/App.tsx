import { useEffect, useState } from 'react';
import './App.css';
import { Body } from './components/body/Body';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Recent } from './components/recent/Recent';

const App = () => {
  const [showNavButtons, setShowNavButtons] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1500 && showNavButtons) {
        setShowNavButtons(false);
        window.location.reload();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [showNavButtons]);

  return (
    <div className="App">
      <Header
        home='Home'
        aboutUs='About Us'
        services='Services'
        contactUs='Contact Us'
        showNavButtons={showNavButtons}
        setShowNavButtons={setShowNavButtons}
      />
      {showNavButtons && <div className='overlay' onClick={() => setShowNavButtons(false)}></div>}
      <Body />
      <Recent />
      <Footer />
    </div>
  );
}

export default App;
