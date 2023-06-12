import React,{useState,useEffect} from "react";

export default function AddProduct() {
  const [categories, setCategories] = useState([]);
  const [fetchCategoryTrigger, setFetchCategoryTrigger] = useState(false);
  const fetchCategoryData = () => {
    setFetchCategoryTrigger((prevState) => !prevState);
  };
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch("/api/category/get", { method: "GET" });
      const data = await response.json();
      setCategories(data);
    };
    fetchCategories();
  }, [fetchCategoryTrigger]);
  
  
  
  const handleAddProduct = async (event) => {
    event.preventDefault();
    const {
      name,
      description,
      long_description,
      attributes,
      price,
      sale_price,
      stock,
      images,
      tax,
      category,
    } = event.target.elements;

    const checkboxes = document.querySelectorAll(".form-check-input");
    let selectedCategory = null;

    

    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        selectedCategory = checkbox.value;
      }
    });

    try {
      const response = await fetch("http://localhost:5000/api/product/add", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.value,
          description: description.value,
          long_description: long_description.value,
          attributes: attributes.value,
          price: price.value,
          sale_price: sale_price.value,
          stock: stock.value,
          images: images.value,
          tax: tax.value,
          category: selectedCategory,
        }),
      });

      if (response.ok) {
        // fetchProductData();
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
        <h1>Add Product</h1>
        <form onSubmit={handleAddProduct}>
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              Name:
              <input
                className="form-control"
                type="text"
                id="name"
                name="name"
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
            <label className="form-label" htmlFor="tax">
              Tax in %:
            </label>
            <input
              className="form-control"
              type="text"
              id="tax"
              name="tax"
              required
            ></input>
          </div>

          {/* Categories */}
          {/* <div className="mb-3"> 
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
          </div> */}
          {categories.map((category, index) => (
            <span
              key={index}
              className="badge bg-primary me-2"
              data-bs-toggle="tooltip"
              data-bs-title={category.description}
            >
              {category.name}
            </span>
          ))}

          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
      <div className="col"></div>
    </div>
  );
}
