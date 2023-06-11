import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Tooltip } from "bootstrap/dist/js/bootstrap.bundle.min.js";
import ProductSelector from "./components/ProductSelector";
import ProductView from "./components/ProductView";
import AddProduct from "./components/AddProduct";
import ChangeProduct from "./components/ChangeProduct";
import DeleteProduct from "./components/DeleteProduct";
import AddCategory from "./components/AddCategory";
import ChangeCategory from "./components/ChangeCategory";
import DeleteCategory from "./components/DeleteCategory";

function App() {
  // This sometimes works and sometimes it doesnt:
  // Luckily Mr. Ajith does the react stuff this time. :D
  // Source:  (https://getbootstrap.com/docs/5.3/components/tooltips/#enable-tooltips)
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new Tooltip(tooltipTriggerEl)
  );

  return (
    <div className="grid">
      <ProductSelector />
      <ProductView />
      <AddProduct />
      <ChangeProduct />
      <DeleteProduct />
      <AddCategory />
      <ChangeCategory />
      <DeleteCategory />
    </div>
  );
}

export default App;
