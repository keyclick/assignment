import React from "react";

export default function AddCategory() {
  const handleAddCategory = async (event) => {
    event.preventDefault();
    const { name, images, description } = event.target.elements;
    try {
      const response = await fetch("http://localhost:5000/api/category/add", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.value,
          images: images.value,
          description: description.value,
        }),
      });

      if (response.ok) {
        // fetchCategoryData();
      } else {
        console.error("Error submitting form:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="row my-3">
      <div className="col"></div>
      <div className="col-10 col-sm-8 col-md-6 col-lg-4 border rounded-3 p-3">
        <h1>Add Category</h1>
        <form onSubmit={handleAddCategory}>
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
            <label className="form-label" htmlFor="description">
              Description:
            </label>
            <input
              className="form-control"
              type="text"
              id="description"
              name="description"
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
