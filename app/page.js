'use client';
import { useState, useEffect } from 'react';

function Page() {
  const [selectedChangeCategory, setSelectedChangeCategory] = useState({});
  const [selectedChangeCategoryOption, setSelectedChangeCategoryOption] = useState("");

  const [categories, setCategories] = useState([]);
  const [fetchCategoryTrigger, setFetchCategoryTrigger] = useState(false);

  const [categoriesCheckedToAdd, setCategoriesCheckedToAdd] = useState([]);

  const [selectedDeleteCategoryOption, setSelectedDeleteCategoryOption] = useState("");

  const [productAddPrice, setProductAddPrice] = useState(0);
  const [productAddTax, setProductAddTax] = useState(0);
  const [productAddSalesPrice, setProductAddSalesPrice] = useState(0);

  const [products, setProducts] = useState([]);
  const [fetchProductTrigger, setFetchProductTrigger] = useState(false);

  const [selectedViewProduct, setSelectedViewProduct] = useState("");
  const [selectedViewProductOption, setSelectedViewProductOption] = useState("");

  const [selectedChangeProduct, setSelectedChangeProduct] = useState("");
  const [selectedChangeProductOption, setSelectedChangeProductOption] = useState("");
  const [categoriesCheckedToChange, setCategoriesCheckedToChange] = useState([]);

  const [selectedDeleteProductOption, setSelectedDeleteProductOption] = useState("");

  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    const calculateSalesPrice = () => {
      setProductAddSalesPrice((parseFloat(productAddPrice) * (1.0 + parseFloat(productAddTax))).toFixed(2));
    };
    calculateSalesPrice();
    
  }, [productAddPrice, productAddTax]);

  const handleProductAddPriceChange = async (event) => {
    setProductAddPrice(event.target.value);
  };

  const handleProductAddTaxChange = async (event) => {
    setProductAddTax(event.target.value);
  };

  const fetchCategoryData = () => {
    setFetchCategoryTrigger((prevState) => !prevState);
  };

  const fetchProductData = () => {
    setFetchProductTrigger((prevState) => !prevState);
  };

  const handleChangeCategoryInput = async (event) => {
    const { name, value } = event.target;
    setSelectedChangeCategory(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSelectChangeCategoryOption = async (event) => {
    setSelectedChangeCategory(categories.find(category => category.id === event.target.value));
    setSelectedChangeCategoryOption(event.target.value);
  };
 
  const handleChangeCategory = async (event) => {
    event.preventDefault();
    const { id, name, images, description } = event.target.elements;
    try {
      const response = await fetch('/api/category/set', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: selectedChangeCategoryOption,
          name: name.value,
          images: images.value,
          description: description.value,
        }),
      });
    
      if (response.ok) {
        fetchCategoryData()
      } else {
        console.error('Error submitting form:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  }

  const handleDeleteCategory = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/category/delete', {
        // Don't use DELETE here.
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: selectedDeleteCategoryOption,
        }),
      });
    
      if (response.ok) {
        fetchCategoryData()
      } else {
        console.error('Error deleting category:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  }

  const handleDeleteProduct = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/product/delete', {
        // Don't use DELETE here.
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: selectedDeleteProductOption,
        }),
      });
    
      if (response.ok) {
        fetchProductData()
      } else {
        console.error('Error deleting product:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  }

  const handleSelectedDeleteCategoryOption = async (event) => {
    setSelectedDeleteCategoryOption(event.target.value);
  }

  const handleSelectedDeleteProductOption = async (event) => {
    setSelectedDeleteProductOption(event.target.value);
  }

  const handleAddCheckboxChange = async (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setCategoriesCheckedToAdd((prevCheckedValues) => [...prevCheckedValues, value]);
    } else {
      setCategoriesCheckedToAdd((prevCheckedValues) =>
        prevCheckedValues.filter((item) => item !== value)
      );
    }
  };

  const handleAddCategory = async (event) => {
    event.preventDefault();
    const { name, images, description } = event.target.elements;
    try {
      const response = await fetch('/api/category/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.value,
          images: images.value,
          description: description.value,
        }),
      });
    
      if (response.ok) {
        fetchCategoryData()
      } else {
        console.error('Error submitting form:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleAddProduct = async (event) => {
    event.preventDefault();
    const { name, description, long_description, attributes, price, sale_price, stock, images, tax } = event.target.elements;
    try {
      const response = await fetch('/api/product/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.value,
          description: description.value,
          long_description: long_description.value,
          attributes: attributes.value,
          price: parseFloat(price.value),
          sale_price: parseFloat(sale_price.value),
          stock: parseInt(stock.value),
          images: images.value,
          tax: parseFloat(tax.value),
          categories: categoriesCheckedToAdd,
        })
      });
      if (response.ok) {
        fetchProductData()
      } else {
        console.error('Error submitting form:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  const handleSelectChangeProductOption = async (event) => {
    setSelectedChangeProduct(products.find(product => product.id === event.target.value));
    setSelectedChangeProductOption(event.target.value);
  }

  const handleChangeCheckboxChange = async (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setCategoriesCheckedToChange((prevCheckedValues) => [...prevCheckedValues, value]);
    } else {
      setCategoriesCheckedToChange((prevCheckedValues) =>
        prevCheckedValues.filter((item) => item !== value)
      );
    }
  };

  // fetch the data on trigger and page load
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch('/api/category/get', { method: "GET" });
      const data = await response.json();
      setCategories(data);
    };
    fetchCategories();
  }, [fetchCategoryTrigger]);

  // fetch the data on trigger and page load
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/api/product/get', { method: "GET" });
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, [fetchProductTrigger]);

  const handleSelectViewProductOption = (event) => {
    setSelectedViewProduct(products.find(product => product.id === event.target.value));
    if (selectedViewProduct.images) {
      setActiveImage(selectedViewProduct.images.replace(/\s*,\s*/g, ',').split(',')[0]);
    }
    setSelectedViewProductOption(event.target.value);
  };

  const handleChangeProductInput = async (event) => {
    const { name, value } = event.target;
    setSelectedChangeProduct(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const goToPreviousSlide = () => {
    let images = selectedViewProduct.images.replace(/\s*,\s*/g, ',').split(',')
    const currentIndex = images.indexOf(activeImage);
    const previousIndex = (currentIndex - 1 + images.length) % images.length;
    setActiveImage(images[previousIndex]);
  };

  const goToNextSlide = () => {
    let images = selectedViewProduct.images.replace(/\s*,\s*/g, ',').split(',')
    const currentIndex = images.indexOf(activeImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setActiveImage(images[nextIndex]);
  };

  const handleChangeProduct = async (event) => {
    event.preventDefault();
    const { name, description, long_description, attributes, price, sale_price, stock, images, tax } = event.target.elements;
    try {
      const response = await fetch('/api/product/set', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: selectedChangeProductOption,
          name: name.value,
          description: description.value,
          long_description: long_description.value,
          attributes: attributes.value,
          price: parseFloat(price.value),
          sale_price: parseFloat(sale_price.value),
          stock: parseInt(stock.value),
          images: images.value,
          tax: parseFloat(tax.value),
          categories: categoriesCheckedToChange,
        })
      });
      if (response.ok) {
        fetchProductData()
      } else {
        console.error('Error submitting form:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  return (
    <div className="grid">
      <div className="row my-3">
        <div className="col"></div>
        <div className="col">
          <h1>Show Product</h1>
          <div className="mb-3">
            <label className="form-label" htmlFor="product">Product:</label>
            <select className="form-select" id="product" name="product" value={selectedViewProductOption} onChange={handleSelectViewProductOption}>
              <option value="">Select an option</option>
              {products.map((product, index) => (
                <option key={index} value={product.id}>{product.name}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="col"></div>
      </div>
      {
        selectedViewProduct && 
        <div className="row my-3">
          <div className="col"></div>
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 border rounded-3 p-4 position-relative">
            {/* Name: */}
            <h2>{selectedViewProduct.name}</h2>
            
            {/* Category name and description go here: */}
            <span className="badge bg-primary me-2" data-bs-toggle="tooltip" data-bs-title="Category Description A Goes Here">Men</span>
            <span className="badge bg-primary me-2" data-bs-toggle="tooltip" data-bs-title="Category Description B Goes Here">Women</span>
            <span className="badge bg-primary me-2" data-bs-toggle="tooltip" data-bs-title="Category Description C Goes Here">Unisex</span>
            <span className="badge bg-primary me-2" data-bs-toggle="tooltip" data-bs-title="Category Description D Goes Here">Casual</span>
            <span className="badge bg-primary me-2" data-bs-toggle="tooltip" data-bs-title="Category Description E Goes Here">Comfort</span>
            <span className="badge bg-primary me-2" data-bs-toggle="tooltip" data-bs-title="Category Description F Goes Here">Casual</span>

            <div className="my-3">
              {/* Short description: */}
              <i>{selectedViewProduct.description}</i>
            </div>
            {/* The images (use js to make it move: https://getbootstrap.com/docs/5.3/components/carousel/#how-it-works) */}
            {
              selectedViewProduct.images && 
              <div className="carousel">
                <div className="carousel-inner">
                  <div className="carousel-slide active">
                    <img className="d-block w-100" src={activeImage} alt="Active Slide" />
                  </div>
                </div>
                <button className="carousel-control-prev" onClick={goToPreviousSlide}>
                  Previous
                </button>
                <button className="carousel-control-next" onClick={goToNextSlide}>
                  Next
                </button>
              </div>
            }

            {/* Long description: */}
            <p className="my-3">{selectedViewProduct.long_description}</p>

            <div className="container my-3">
              <div className="row justify-content-between">
                <div className="col">
                    {/* Make this show "In stock" if stock > 30 and "Almost sold out: x remaining!" if its < 30 and "sold out" if it's 0*/}
                    <b>{selectedViewProduct.stock > 30 ? "In stock :D" : selectedViewProduct.stock == 0 ? "Sold out. -_-" : "Almost sold out! Only " + selectedViewProduct.stock + " remaining!"}</b>
                </div>
                <div className="col">
                  {/* Price and sale price: */}
                  <b>Price: ₹{selectedViewProduct.price}</b><br></br><i> (after {selectedViewProduct.tax * 100}% taxes ₹{selectedViewProduct.sale_price})</i>
                </div>
              </div>
            </div>

            <button className="btn btn-primary">Buy now!</button>

          </div>
          <div className="col"></div>
        </div>
      }
      <div className="row my-3">
        <div className="col"></div>
        <div className="col-10 col-sm-8 col-md-6 col-lg-4 border rounded-3 p-3">
          <h1>Add Product</h1>
          <form onSubmit={handleChangeProduct}>
            <div className="mb-3">
              <label className="form-label" htmlFor="name">Name:</label>
              <input className="form-control" type="text" id="name" name="name" required></input>
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="description">Short Description:</label>
              <input className="form-control" type="text" id="description" name="description" required></input>
            </div>

            <div className="mb-3 form-floating">
              <textarea className="form-control" placeholder="Leave a comment here" id="long_description" style={{ height: '200px' }}></textarea>
              <label htmlFor="long_description">Long Description:</label>
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="attributes">Attributes:</label>
              <input className="form-control" type="text" id="attributes" name="attributes" required></input>
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="price">Price:</label>
              <input className="form-control" type="number" min="0" step="0.01" type="text" id="price" name="price" onChange={handleProductAddPriceChange} value={productAddPrice} required></input>
            </div>

            <div className="mb-3">
              {/* To be auto calculated from price and tax. */}
              <label className="form-label" htmlFor="sale_price">Sale Price:</label>
              <input className="form-control" type="number" min="0" step="0.01" type="text" id="sale_price" name="sale_price" value={productAddSalesPrice} readOnly></input>
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="stock">Stock available:</label>
              <input className="form-control" type="number" min="0" id="stock" name="stock" required></input>
            </div>

            <div className="mb-3">
              {/* Should be a comma separeted list: */}
              <label className="form-label" htmlFor="images">Images:</label>
              <input className="form-control" type="text" id="images" name="images" placeholder="Comma separated list here."></input>
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="tax">Tax:</label>
              <input className="form-control" type="text" id="tax" name="tax" placeholder="0.01 means 1%" onChange={handleProductAddTaxChange} value={productAddTax} required></input>
            </div>

            <div className="mb-3">
              <label className="form-label">Categories:</label>
              {categories.map((category, index) => (
                <div key={index} className="form-check">
                  <input className="form-check-input" type="checkbox" value={category.id} id={`category_add_${category.id}`} onChange={handleAddCheckboxChange}></input>
                  <label className="form-check-label" htmlFor={`category_add_${category.id}`}>
                    {category.name}
                  </label>
                </div>
              ))}
            </div>

            <button className="btn btn-primary">Submit</button>
          </form>
        </div>
        <div className="col"></div>
      </div>
      <div className="row my-3">
        <div className="col"></div>
        <div className="col-10 col-sm-8 col-md-6 col-lg-4 border rounded-3 p-3">
          <h1>Change Product</h1>
          <form onSubmit={handleChangeProduct}>
            <div className="mb-3">
              <label className="form-label" htmlFor="product">Product:</label>
              <select className="form-select" id="product" name="product" value={selectedChangeProductOption} onChange={handleSelectChangeProductOption}>
                <option value="">Select an option</option>
                {products.map((product, index) => (
                  <option key={index} value={product.id}>{product.name}</option>
                ))}
              </select>
            </div>
            { selectedChangeProductOption && (
              <>
              <div className="mb-3">
                <label className="form-label" htmlFor="name">Name:</label>
                <input className="form-control" type="text" id="name" name="name" value={selectedChangeProduct.name} onChange={handleChangeProductInput} required></input>
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="description">Short Description:</label>
                <input className="form-control" type="text" id="description" name="description" value={selectedChangeProduct.description} onChange={handleChangeProductInput} required></input>
              </div>

              <div className="mb-3 form-floating">
                <textarea className="form-control" placeholder="Leave a comment here" id="long_description" name="long_description" value={selectedChangeProduct.long_description} onChange={handleChangeProductInput} style={{ height: '200px' }}></textarea>
                <label htmlFor="long_description">Long Description:</label>
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="attributes">Attributes:</label>
                <input className="form-control" type="text" id="attributes" name="attributes" value={selectedChangeProduct.attributes} onChange={handleChangeProductInput} required></input>
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="price">Price:</label>
                <input className="form-control" type="number" min="0" step="0.01" type="text" id="price" name="price" value={selectedChangeProduct.price} onChange={handleChangeProductInput} required></input>
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="sale_price">Sale Price:</label>
                <input className="form-control" type="number" min="0" step="0.01" type="text" id="sale_price" name="sale_price" value={selectedChangeProduct.sale_price} onChange={handleChangeProductInput} readOnly></input>
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="stock">Stock available:</label>
                <input className="form-control" type="number" min="0" id="stock" name="stock" value={selectedChangeProduct.stock} onChange={handleChangeProductInput} required></input>
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="images">Images:</label>
                <input className="form-control" type="text" id="images" name="images" value={selectedChangeProduct.images} onChange={handleChangeProductInput}></input>
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="tax">Tax in %:</label>
                <input className="form-control" type="text" id="tax" name="tax" value={selectedChangeProduct.tax} onChange={handleChangeProductInput} required></input>
              </div>

              <div className="mb-3">
                <label className="form-label">Categories:</label>
                {categories.map((category, index) => (
                  <div key={index} className="form-check">
                    <input className="form-check-input" type="checkbox" value={category.id} id={`category_change_${category.id}`} onChange={handleChangeCheckboxChange}></input>
                    <label className="form-check-label" htmlFor={`category_change_${category.id}`}>
                      {category.name}
                    </label>
                  </div>
                ))}
              </div>

              <button className="btn btn-primary">Submit</button>
              </>
              )}
          </form>
        </div>
        <div className="col"></div>
      </div>
      <div className="row my-3">
        <div className="col"></div>
        <div className="col-10 col-sm-8 col-md-6 col-lg-4 border rounded-3 p-3">
          <h1>Delete Product</h1>
          <form onSubmit={handleDeleteProduct}>
            <div className="mb-3">
              <label className="form-label" htmlFor="product">Product:</label>
              <select className="form-select" id="product" name="product" value={selectedDeleteProductOption} onChange={handleSelectedDeleteProductOption}>
                <option value="">Select an option</option>
                {products.map((product, index) => (
                  <option key={index} value={product.id}>{product.name}</option>
                ))}
              </select>
            </div>
            <button className="btn btn-primary">Delete</button>
          </form>
        </div>
        <div className="col"></div>
      </div>
      <div className="row my-3">
        <div className="col"></div>
        <div className="col-10 col-sm-8 col-md-6 col-lg-4 border rounded-3 p-3">
          <h1>Add Category</h1>
          <form onSubmit={handleAddCategory}>
            <div className="mb-3">
              <label className="form-label" htmlFor="name">Name:</label>
              <input className="form-control" type="text" id="name" name="name" required></input>
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="images">Images:</label>
              <input className="form-control" type="text" id="images" name="images" placeholder="Comma separated list here." required></input>
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="description">Description:</label>
              <input className="form-control" type="text" id="description" name="description" required></input>
            </div>
            <button className="btn btn-primary" ype="submit">Submit</button>
          </form>
        </div>
        <div className="col"></div>
      </div>
      <div className="row my-3">
        <div className="col"></div>
        <div className="col-10 col-sm-8 col-md-6 col-lg-4 border rounded-3 p-3">
          <h1>Change Category</h1>
          <form onSubmit={handleChangeCategory}>
            <div className="mb-3">
              <label className="form-label" htmlFor="category">Category:</label>
              <select className="form-select" id="category" name="category" value={selectedChangeCategoryOption} onChange={handleSelectChangeCategoryOption}>
                <option value="">Select an option</option>
                {categories.map((category, index) => (
                  <option key={index} value={category.id}>{category.name}</option>
                ))}
              </select>
            </div>
            {selectedChangeCategoryOption && (
              <>
              <div className="mb-3">
                <label className="form-label" htmlFor="name">Name:</label>
                <input className="form-control" type="text" id="name" name="name" value={selectedChangeCategory.name} onChange={handleChangeCategoryInput} required></input>
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="images">Image:</label>
                <input className="form-control" type="text" id="images" name="images" value={selectedChangeCategory.images} placeholder="Comma separated list here." onChange={handleChangeCategoryInput} required></input>
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="description">Description:</label>
                <input className="form-control" type="text" id="description" name="description" value={selectedChangeCategory.description} onChange={handleChangeCategoryInput} required></input>
              </div>
              <button className="btn btn-primary">Submit</button>
              </>
            )}
          </form>
        </div>
        <div className="col"></div>
      </div>
      <div className="row my-3">
        <div className="col"></div>
        <div className="col-10 col-sm-8 col-md-6 col-lg-4 border rounded-3 p-3">
          <h1>Delete Category</h1>
          <form onSubmit={handleDeleteCategory}>
            <div className="mb-3">
              <label className="form-label" htmlFor="category">Category:</label>
              <select className="form-select" id="category" name="category" value={selectedDeleteCategoryOption} onChange={handleSelectedDeleteCategoryOption}>
                <option value="">Select an option</option>
                {categories.map((category, index) => (
                  <option key={index} value={category.id}>{category.name}</option>
                ))}
              </select>
            </div>
            <button className="btn btn-primary">Delete</button>
          </form>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default Page;
