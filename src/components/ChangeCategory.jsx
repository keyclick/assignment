import React from "react";

export default function ChangeCategory() {
  return (
    <div className="row my-3">
      <div className="col"></div>
      <div className="col-10 col-sm-8 col-md-6 col-lg-4 border rounded-3 p-3">
        <h1>Change Category</h1>
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
            <label className="form-label" htmlFor="name">
              Image links as comma separated list:
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
            <label className="form-label" htmlFor="name">
              Description:
            </label>
            <input
              className="form-control"
              type="text"
              id="name"
              name="name"
              required
            ></input>
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
      <div className="col"></div>
    </div>
  );
}
