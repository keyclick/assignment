import React from "react";

export default function ChangeProduct() {
  return (
    <div className="row my-3">
      <div className="col"></div>
      <div className="col-10 col-sm-8 col-md-6 col-lg-4 border rounded-3 p-3">
        <h1>Change Product</h1>
        <form>
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
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              Name:
            </label>
            <input
              className="form-control"
              type="text"
              id="name"
              name="name"
              required
            ></input>
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="description">
              Short Description:
            </label>
            <input
              className="form-control"
              type="text"
              id="description"
              name="description"
              required
            ></input>
          </div>

          <div className="mb-3 form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="long_description"
              style={{ height: "200px" }}
            ></textarea>
            <label htmlFor="long_description">Long Description:</label>
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="attributes">
              Attributes:
            </label>
            <input
              className="form-control"
              type="text"
              id="attributes"
              name="attributes"
              required
            ></input>
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="price">
              Price:
            </label>
            <input
              className="form-control"
              type="number"
              min="0"
              step="0.01"
              type="text"
              id="price"
              name="price"
              required
            ></input>
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="sale_price">
              Sale Price:
            </label>
            <input
              className="form-control"
              type="number"
              min="0"
              step="0.01"
              type="text"
              id="sale_price"
              name="sale_price"
              readOnly
            ></input>
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="stock">
              Stock available:
            </label>
            <input
              className="form-control"
              type="number"
              min="0"
              id="stock"
              name="stock"
              required
            ></input>
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="images">
              Image links as comma separated list:
            </label>
            <input
              className="form-control"
              type="text"
              id="images"
              name="images"
              required
            ></input>
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="images">
              Tax in %:
            </label>
            <input
              className="form-control"
              type="text"
              id="images"
              name="images"
              required
            ></input>
          </div>

          <div className="mb-3">
            <label className="form-label">Categories:</label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="CategoryAId"
                id="category_a"
              ></input>
              <label className="form-check-label" htmlFor="category_a">
                Category Name A
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="CategoryBId"
                id="category_b"
              ></input>
              <label className="form-check-label" htmlFor="category_b">
                Category Name B
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="CategoryCId"
                id="category_c"
              ></input>
              <label className="form-check-label" htmlFor="category_c">
                Category Name C
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="CategoryDId"
                id="category_d"
              ></input>
              <label className="form-check-label" htmlFor="category_d">
                Category Name D
              </label>
            </div>
          </div>

          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
      <div className="col"></div>
    </div>
  );
}
