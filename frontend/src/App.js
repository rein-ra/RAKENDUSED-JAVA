import './App.css';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './componets/Navbar';
import AddItem from './pages/AddItem';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/cart' exact>
        <Cart />
      </Route>
      <Route path='/add-item' exact>
        <AddItem />
      </Route>
    </div>
  );
}

export default App;
