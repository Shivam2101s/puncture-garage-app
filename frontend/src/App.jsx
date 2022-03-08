import './App.css';
import {Routes,Route} from 'react-router-dom'
import {Navbar} from './components/Navbar'
import {ShopDetails} from './components/ShopDetails'
import {Shop} from './components/Shop'
import {Cart} from './components/Cart'
import {Checkout} from './components/Checkout'
import {Success} from './components/Success'

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
        <Route path="/" element={<Shop />}></Route>
        <Route path="/shop/:id" element={<ShopDetails />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/success" element={<Success />}></Route>
      </Routes>
    </div>
  );
}

export default App;
