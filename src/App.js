import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout/MainLayout";
import Catalog from "./components/Catalog/Catalog";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Catalog />} />
        <Route path="products" element={<ProductDetail />}>
          <Route path=":productId" element={<ProductDetail />} />
        </Route>
        <Route path="cart" element={<Cart />} />

        {/* Using path="*"" means "match anything", so this route
          acts like a catch-all for URLs that we don't have explicit
          routes for. */}
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
