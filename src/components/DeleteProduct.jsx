import React from "react";

export default function DeleteProduct() {
  return (
    <div className="row my-3">
      <div className="col"></div>
      <div className="col-10 col-sm-8 col-md-6 col-lg-4 border rounded-3 p-3">
        <h1>Delete Product</h1>
        <form>
          <div className="mb-3">
            <label className="form-label" htmlFor="product">
              Product:
            </label>
            <select className="form-select" id="product" name="product">
              <option value="ProductId">Product Name A</option>
              <option value="ProductId">Product Name A</option>
              <option value="ProductId">Product Name C</option>
              <option value="ProductId">Product Name D</option>
            </select>
          </div>
          <button className="btn btn-primary">Delete</button>
        </form>
      </div>
      <div className="col"></div>
    </div>
  );
}
