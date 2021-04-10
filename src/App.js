import GlobalStyles from './components/GlobalStyles'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

//Components
import Nav from './components/Nav'

function App() {
  return (
    <>
    <BrowserRouter>
    <GlobalStyles />
    <Nav />
    <div>
      <h1>GIPHY FINDER</h1>
     
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
