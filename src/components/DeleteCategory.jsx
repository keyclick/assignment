import React from "react";

export default function DeleteCategory() {
  return (
    <div className="row my-3">
      <div className="col"></div>
      <div className="col-10 col-sm-8 col-md-6 col-lg-4 border rounded-3 p-3">
        <h1>Delete Category</h1>
        <form>
          <div className="mb-3">
            <label className="form-label" htmlFor="category">
              Category:
            </label>
            <select className="form-select" id="category" name="category">
              <option value="CategoryId">Category Name A</option>
              <option value="CategoryId">Category Name A</option>
              <option value="CategoryId">Category Name C</option>
              <option value="CategoryId">Category Name D</option>
            </select>
          </div>
          <button className="btn btn-primary">Delete</button>
        </form>
      </div>
      <div className="col"></div>
    </div>
  );
}
