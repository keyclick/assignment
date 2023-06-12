import React from "react";

export default function ProductSelector() {
  return (
    <div className="row my-3">
      <div className="col"></div>
      <div className="col">
        <form >
          <div className="mb-3">
            <label className="form-label" htmlFor="product">
              Product:
            </label>
            <select className="form-select" id="product" name="product">
              <option value="ProductIdA">Product Name A</option>
              <option value="ProductIdB">Product Name B</option>
              <option value="ProductIdC">Product Name C</option>
              <option value="ProductIdD">Product Name D</option>
            </select>
          </div>
          <button className="btn btn-primary">Show</button>
        </form>
      </div>
      <div className="col"></div>
    </div>
  );
}
