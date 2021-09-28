
import './App.css';
import Home from './Pages/Home';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import Products from './Pages/products';
import Cart from './Pages/cart';
import Product from './Pages/product';
import Carticon from './components/Carticon';
import { Provider } from 'react-redux';
import Store from './store/store';
function App() {
  return (

  <Router>
  <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <div className="navbar-brand" >CatStore</div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/products">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Cart">Cart</Link>
        </li>
      </ul>

    </div>
  </div>

  <Carticon />
</nav>
   
 
   
   
   </div>
 

          
          <Route path="/products" exact component={Products}/>
          
          <Route path="/products/:id" exact component={Product}/>
          <Route path="/Cart" exact component={Cart}/>
          <Route path="/" exact component={Home} />
        
  </Router>
 
 );
}
function AppProvider(){

        return (
          <Provider store={Store}>
            <App />
          </Provider>
        )
}
export default AppProvider;
