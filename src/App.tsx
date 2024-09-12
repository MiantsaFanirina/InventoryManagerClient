import { Route, Routes } from "react-router-dom";

// Pages
import IndexPage from "@/pages/index";
import AuthPage from "@/pages/auth";
import ProductsPage from "./pages/products";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<AuthPage />} path="/auth" />
      <Route element={<ProductsPage />} path="/products" />
    </Routes>
  );
}

export default App;
