import 'bootstrap/dist/css/bootstrap.css';
import { Tooltip } from 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

function App() {
  // This sometimes works and sometimes it doesnt:
  // Luckily Mr. Ajith does the react stuff this time. :D
  // Source:  (https://getbootstrap.com/docs/5.3/components/tooltips/#enable-tooltips)
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl))

  return (
    <div className="grid">
      <div className="row my-3">
        <div className="col"></div>
        <div className="col">
          <form>
            <div className="mb-3">
              <label className="form-label" htmlFor="product">Product:</label>
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
      <div className="row my-3">
        <div className="col"></div>
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 border rounded-3 p-4 position-relative">
          {/* Name: */}
          <h2>ComfortFit Cotton Blend Socks</h2>
          
          {/* Category name and description go here: */}
          <span className="badge bg-primary me-2" data-bs-toggle="tooltip" data-bs-title="Category Description A Goes Here">Men</span>
          <span className="badge bg-primary me-2" data-bs-toggle="tooltip" data-bs-title="Category Description B Goes Here">Women</span>
          <span className="badge bg-primary me-2" data-bs-toggle="tooltip" data-bs-title="Category Description C Goes Here">Unisex</span>
          <span className="badge bg-primary me-2" data-bs-toggle="tooltip" data-bs-title="Category Description D Goes Here">Casual</span>
          <span className="badge bg-primary me-2" data-bs-toggle="tooltip" data-bs-title="Category Description E Goes Here">Comfort</span>
          <span className="badge bg-primary me-2" data-bs-toggle="tooltip" data-bs-title="Category Description F Goes Here">Casual</span>

          <div className="my-3">
            {/* Short description: */}
            <i>These ComfortFit Cotton Blend Socks are perfect for everyday wear. Made from a soft and breathable cotton blend fabric, these socks offer utmost comfort and a snug fit. Whether you're heading to the office, going for a jog, or simply relaxing at home, these socks will keep your feet feeling cozy and fresh all day long.</i>
          </div>
          {/* The images (use js to make it move: https://getbootstrap.com/docs/5.3/components/carousel/#how-it-works) */}
          <div id="carouselExample" className="carousel slide my-3">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://images.pexels.com/photos/251454/pexels-photo-251454.jpeg?auto=compress" className="d-block w-100" alt="..."></img>
              </div>
              <div className="carousel-item">
                <img src="https://images.pexels.com/photos/1001457/pexels-photo-1001457.jpeg?auto=compress" className="d-block w-100" alt="..."></img>
              </div>
              <div className="carousel-item">
                <img src="https://images.pexels.com/photos/1287513/pexels-photo-1287513.jpeg?auto=compress" className="d-block w-100" alt="..."></img>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          {/* Long description: */}
          <p className="my-3">
            Introducing our ComfortFit Cotton Blend Socks, the ultimate combination of comfort and style. Crafted with care, these socks are designed to provide a luxurious experience for your feet. Made from a premium cotton blend fabric, they offer exceptional softness and breathability.
            The cotton blend construction ensures excellent moisture management, keeping your feet dry and odor-free throughout the day. The fabric also features enhanced durability, making these socks long-lasting companions for your feet. Say goodbye to uncomfortable, itchy feet and embrace the soothing comfort provided by these socks.
            The design of these socks is carefully crafted to provide a perfect fit. The elasticated cuffs ensure a secure grip without being too tight, allowing for easy wearing and removal. The reinforced heel and toe areas offer additional support and prevent premature wear, adding to the durability of the socks.
            Versatile and suitable for various occasions, these ComfortFit Cotton Blend Socks are suitable for both formal and casual wear. Whether you're attending a business meeting, going for a run, or simply lounging at home, these socks will keep your feet feeling fresh and relaxed.
            Available in a range of classNameic colors, these socks complement any outfit effortlessly. Pair them with your favorite shoes, sneakers, or even wear them at home for a cozy and stylish look.
            Experience the unmatched comfort and quality of our ComfortFit Cotton Blend Socks. Treat your feet to a premium sock experience that will make you feel like you're walking on clouds. Upgrade your sock collection today and enjoy the ultimate comfort and style with every step you take.
          </p>

          <div className="container my-3">
            <div className="row justify-content-between">
              <div className="col">
                  {/* Make this show "In stock" if stock > 30 and "Almost sold out: x remaining!" if its < 30 and "sold out" if it's 0*/}
                  <b>In stock</b>
              </div>
              <div className="col">
                {/* Price and sale price: */}
                <b>Price: ₹200</b><br></br><i> (after taxes ₹210)</i>
              </div>
            </div>
          </div>

          <button className="btn btn-primary">Buy now!</button>

        </div>
        <div className="col"></div>
      </div>
      <div className="row my-3">
        <div className="col"></div>
        <div className="col-10 col-sm-8 col-md-6 col-lg-4 border rounded-3 p-3">
          <h1>Add Product</h1>
          <form>
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
              <input className="form-control" type="number" min="0" step="0.01" type="text" id="price" name="price" required></input>
            </div>

            <div className="mb-3">
              {/* To be auto calculated from price and tax. */}
              <label className="form-label" htmlFor="sale_price">Sale Price:</label>
              <input className="form-control" type="number" min="0" step="0.01" type="text" id="sale_price" name="sale_price" readOnly></input>
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="stock">Stock available:</label>
              <input className="form-control" type="number" min="0" id="stock" name="stock" required></input>
            </div>

            <div className="mb-3">
              {/* Should be a comma separeted list: */}
              <label className="form-label" htmlFor="images">Image links as comma separated list:</label>
              <input className="form-control" type="text" id="images" name="images" required></input>
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="images">Tax in %:</label>
              <input className="form-control" type="text" id="images" name="images" required></input>
            </div>

            <div className="mb-3">
              <label className="form-label">Categories:</label>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="CategoryAId" id="category_a"></input>
                <label className="form-check-label" htmlFor="category_a">
                  Category Name A
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="CategoryBId" id="category_b"></input>
                <label className="form-check-label" htmlFor="category_b">
                  Category Name B
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="CategoryCId" id="category_c"></input>
                <label className="form-check-label" htmlFor="category_c">
                  Category Name C
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="CategoryDId" id="category_d"></input>
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
      <div className="row my-3">
        <div className="col"></div>
        <div className="col-10 col-sm-8 col-md-6 col-lg-4 border rounded-3 p-3">
          <h1>Change Product</h1>
          <form>
            <div className="mb-3">
              <label className="form-label" htmlFor="product">Product:</label>
              <select className="form-select" id="product" name="product">
                <option value="ProductIdA">Product Name A</option>
                <option value="ProductIdB">Product Name B</option>
                <option value="ProductIdC">Product Name C</option>
                <option value="ProductIdD">Product Name D</option>
              </select>
            </div>
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
              <input className="form-control" type="number" min="0" step="0.01" type="text" id="price" name="price" required></input>
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="sale_price">Sale Price:</label>
              <input className="form-control" type="number" min="0" step="0.01" type="text" id="sale_price" name="sale_price" readOnly></input>
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="stock">Stock available:</label>
              <input className="form-control" type="number" min="0" id="stock" name="stock" required></input>
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="images">Image links as comma separated list:</label>
              <input className="form-control" type="text" id="images" name="images" required></input>
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="images">Tax in %:</label>
              <input className="form-control" type="text" id="images" name="images" required></input>
            </div>

            <div className="mb-3">
              <label className="form-label">Categories:</label>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="CategoryAId" id="category_a"></input>
                <label className="form-check-label" htmlFor="category_a">
                  Category Name A
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="CategoryBId" id="category_b"></input>
                <label className="form-check-label" htmlFor="category_b">
                  Category Name B
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="CategoryCId" id="category_c"></input>
                <label className="form-check-label" htmlFor="category_c">
                  Category Name C
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="CategoryDId" id="category_d"></input>
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
      <div className="row my-3">
        <div className="col"></div>
        <div className="col-10 col-sm-8 col-md-6 col-lg-4 border rounded-3 p-3">
          <h1>Delete Product</h1>
          <form>
            <div className="mb-3">
              <label className="form-label" htmlFor="product">Product:</label>
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

      <div className="row my-3">
        <div className="col"></div>
        <div className="col-10 col-sm-8 col-md-6 col-lg-4 border rounded-3 p-3">
          <h1>Add Category</h1>
          <form>
            <div className="mb-3">
              <label className="form-label" htmlFor="name">Name:</label>
              <input className="form-control" type="text" id="name" name="name" required></input>
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="name">Image links as comma separated list:</label>
              <input className="form-control" type="text" id="name" name="name" required></input>
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="name">Description:</label>
              <input className="form-control" type="text" id="name" name="name" required></input>
            </div>
            <button className="btn btn-primary">Submit</button>
          </form>
        </div>
        <div className="col"></div>
      </div>
      <div className="row my-3">
        <div className="col"></div>
        <div className="col-10 col-sm-8 col-md-6 col-lg-4 border rounded-3 p-3">
          <h1>Change Category</h1>
          <form>
            <div className="mb-3">
              <label className="form-label" htmlFor="category">Category:</label>
              <select className="form-select" id="category" name="category">
                <option value="CategoryId">Category Name A</option>
                <option value="CategoryId">Category Name A</option>
                <option value="CategoryId">Category Name C</option>
                <option value="CategoryId">Category Name D</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="name">Name:</label>
              <input className="form-control" type="text" id="name" name="name" required></input>
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="name">Image links as comma separated list:</label>
              <input className="form-control" type="text" id="name" name="name" required></input>
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="name">Description:</label>
              <input className="form-control" type="text" id="name" name="name" required></input>
            </div>
            <button className="btn btn-primary">Submit</button>
          </form>
        </div>
        <div className="col"></div>
      </div>
      <div className="row my-3">
        <div className="col"></div>
        <div className="col-10 col-sm-8 col-md-6 col-lg-4 border rounded-3 p-3">
          <h1>Delete Category</h1>
          <form>
            <div className="mb-3">
              <label className="form-label" htmlFor="category">Category:</label>
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
    </div>
  );
}

export default App;
