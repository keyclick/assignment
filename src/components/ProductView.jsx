import React from "react";

export default function ProductView() {
  return (
    <div className="row my-3">
      <div className="col"></div>
      <div className="col-12 col-sm-10 col-md-8 col-lg-6 border rounded-3 p-4 position-relative">
        {/* Name: */}
        <h2>ComfortFit Cotton Blend Socks</h2>

        {/* Category name and description go here: */}
        <span
          className="badge bg-primary me-2"
          data-bs-toggle="tooltip"
          data-bs-title="Category Description A Goes Here"
        >
          Men
        </span>
        <span
          className="badge bg-primary me-2"
          data-bs-toggle="tooltip"
          data-bs-title="Category Description B Goes Here"
        >
          Women
        </span>
        <span
          className="badge bg-primary me-2"
          data-bs-toggle="tooltip"
          data-bs-title="Category Description C Goes Here"
        >
          Unisex
        </span>
        <span
          className="badge bg-primary me-2"
          data-bs-toggle="tooltip"
          data-bs-title="Category Description D Goes Here"
        >
          Casual
        </span>
        <span
          className="badge bg-primary me-2"
          data-bs-toggle="tooltip"
          data-bs-title="Category Description E Goes Here"
        >
          Comfort
        </span>
        <span
          className="badge bg-primary me-2"
          data-bs-toggle="tooltip"
          data-bs-title="Category Description F Goes Here"
        >
          Casual
        </span>

        <div className="my-3">
          {/* Short description: */}
          <i>
            These ComfortFit Cotton Blend Socks are perfect for everyday wear.
            Made from a soft and breathable cotton blend fabric, these socks
            offer utmost comfort and a snug fit. Whether you're heading to the
            office, going for a jog, or simply relaxing at home, these socks
            will keep your feet feeling cozy and fresh all day long.
          </i>
        </div>
        {/* The images (use js to make it move: https://getbootstrap.com/docs/5.3/components/carousel/#how-it-works) */}
        <div id="carouselExample" className="carousel slide my-3">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://images.pexels.com/photos/251454/pexels-photo-251454.jpeg?auto=compress"
                className="d-block w-100"
                alt="..."
              ></img>
            </div>
            <div className="carousel-item">
              <img
                src="https://images.pexels.com/photos/1001457/pexels-photo-1001457.jpeg?auto=compress"
                className="d-block w-100"
                alt="..."
              ></img>
            </div>
            <div className="carousel-item">
              <img
                src="https://images.pexels.com/photos/1287513/pexels-photo-1287513.jpeg?auto=compress"
                className="d-block w-100"
                alt="..."
              ></img>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* Long description: */}
        <p className="my-3">
          Introducing our ComfortFit Cotton Blend Socks, the ultimate
          combination of comfort and style. Crafted with care, these socks are
          designed to provide a luxurious experience for your feet. Made from a
          premium cotton blend fabric, they offer exceptional softness and
          breathability. The cotton blend construction ensures excellent
          moisture management, keeping your feet dry and odor-free throughout
          the day. The fabric also features enhanced durability, making these
          socks long-lasting companions for your feet. Say goodbye to
          uncomfortable, itchy feet and embrace the soothing comfort provided by
          these socks. The design of these socks is carefully crafted to provide
          a perfect fit. The elasticated cuffs ensure a secure grip without
          being too tight, allowing for easy wearing and removal. The reinforced
          heel and toe areas offer additional support and prevent premature
          wear, adding to the durability of the socks. Versatile and suitable
          for various occasions, these ComfortFit Cotton Blend Socks are
          suitable for both formal and casual wear. Whether you're attending a
          business meeting, going for a run, or simply lounging at home, these
          socks will keep your feet feeling fresh and relaxed. Available in a
          range of classNameic colors, these socks complement any outfit
          effortlessly. Pair them with your favorite shoes, sneakers, or even
          wear them at home for a cozy and stylish look. Experience the
          unmatched comfort and quality of our ComfortFit Cotton Blend Socks.
          Treat your feet to a premium sock experience that will make you feel
          like you're walking on clouds. Upgrade your sock collection today and
          enjoy the ultimate comfort and style with every step you take.
        </p>

        <div className="container my-3">
          <div className="row justify-content-between">
            <div className="col">
              {/* Make this show "In stock" if stock > 30 and "Almost sold out: x remaining!" if its < 30 and "sold out" if it's 0*/}
              <b>In stock</b>
            </div>
            <div className="col">
              {/* Price and sale price: */}
              <b>Price: ₹200</b>
              <br></br>
              <i> (after taxes ₹210)</i>
            </div>
          </div>
        </div>

        <button className="btn btn-primary">Buy now!</button>
      </div>
      <div className="col"></div>
    </div>
  );
}
