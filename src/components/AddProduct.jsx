import React from "react";
import { useState } from "react";


export default function ControlledComponent() {
  const[inputValue, setInputValue]=useState('')

  const handleChange=(Event)=>{
    setInputValue(Event.target.value);
  }
  return (
    <div className="row my-3">
      <div className="col"></div>
      <div className="col-10 col-sm-8 col-md-6 col-lg-4 border rounded-3 p-3">
        <h1>Add Product</h1>
        <form className="formAddProduct" method="POST" action="/api/products" >
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              Name:{inputValue}
              <input
                className="form-control"
                type="text"
                id="name"
                name="name"
                value={inputValue}
                onChange={handleChange}
                required
              ></input>
            </label>
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
              typea="text"
              id="price"
              name="price"
              required
            ></input>
          </div>

          <div className="mb-3">
            {/* To be auto calculated from price and tax. */}
            <label className="form-label" htmlFor="sale_price">
              Sale Price:
            </label>
            <input
              className="form-control"
              type="number"
              min="0"
              step="0.01"
              typeb="text"
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
            {/* Should be a comma separeted list: */}
            <label className="form-label" htmlFor="images">
              Image links as comma separated list:
            </label>
            <input
              className="form-control"
              type="text"
              id="images"
              name="images"
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
            <label className="form-label" htmlFor="categories">
              Categories:
            </label>
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
