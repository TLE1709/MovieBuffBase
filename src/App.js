import Home from './Home.js';
import Error from "./Error.js";
import SingleMovie from './SingleMovie.js';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie/:id" element={<SingleMovie/>}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
