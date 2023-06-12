import React from "react";
import { useState, useEffect } from "react";

export default function DeleteCategory() {
  const [selectedDeleteCategoryOption, setSelectedDeleteCategoryOption] =
    useState("");
  const [fetchCategoryTrigger, setFetchCategoryTrigger] = useState(false);
  const handleSelectedDeleteCategoryOption = async (event) => {
    setSelectedDeleteCategoryOption(event.target.value);
  };

  const fetchCategoryData = () => {
    setFetchCategoryTrigger((prevState) => !prevState);
  };
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch("/api/category/get", { method: "GET" });
      const data = await response.json();
      setCategories(data);
    };
    fetchCategories();
  }, [fetchCategoryTrigger]);

  const handleDeleteCategory = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/category/delete", {
        // Don't use DELETE here.
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: selectedDeleteCategoryOption,
        }),
      });

      if (response.ok) {
        fetchCategoryData();
      } else {
        console.error("Error deleting category:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  return (
    <div className="row my-3">
      <div className="col"></div>
      <div className="col-10 col-sm-8 col-md-6 col-lg-4 border rounded-3 p-3">
        <h1>Delete Category</h1>
        <form onSubmit={handleDeleteCategory}>
          <div className="mb-3">
            <label className="form-label" htmlFor="category">
              Category:
            </label>
            <select
              className="form-select"
              id="category"
              name="category"
              value={selectedDeleteCategoryOption}
              onChange={handleSelectedDeleteCategoryOption}
            >
              <option value="">Select an option</option>
              {categories.map((category, index) => (
                <option key={index} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <button className="btn btn-primary">Delete</button>
        </form>
      </div>
      <div className="col"></div>
    </div>
  );
}
