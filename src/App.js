import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ListProduct from "./pages/ListProduct";
import ProductDetailPage from "./pages/ProductDetailPage";
import CategoryPage from "./pages/CategoryPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="product" element={<ProductPage />}>
            <Route index element={<ListProduct />} />
            <Route path=":id" element={<ProductDetailPage />} />
          </Route>
        <Route path="/cart" element={<CategoryPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
