import './App.css';
import {  CssBaseline } from '@mui/material';
import Header from './components/header';
import Instructions from './components/instructions';
import Requests from './components/requests';


function App() {
  

  return (
    <div>
      <CssBaseline />
      <Header />
      <Instructions />
      <Requests />
    </div>
  );
}

export default App;
