import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './pages/Products';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Layout from './components/Layout';
import Product from './pages/Product';
import Carts from './pages/Carts';
function App() {
  return (
    <Router>
      <Provider store={store}>
        <Routes>
          {/* layout */}
          <Route element={<Layout />}>
            <Route path="/" element={<Products />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/cart" element={<Carts />} />
          </Route>
        </Routes>
      </Provider>
    </Router>
  );
}

export default App;
