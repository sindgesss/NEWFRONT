import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Hello from './components/navbar'
import Counterr from './components/login'
import Counter from './components/navbaar'
import Error from './components/error'
import Countr from './components/signup'
function App() {
  return (

      <BrowserRouter>
      <Routes>
        <Route path='/navbaar' element={<Counter/>}></Route>
        <Route path='/login' element={<Counterr/>}></Route>
        <Route path='/' element={<Hello/>}></Route>
        <Route path='/signup' element={<Countr/>}></Route>

        

      </Routes>
      </BrowserRouter>
      
      
        

  );
}

export default App;
