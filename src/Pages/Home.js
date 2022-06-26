import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [newProducts, setNewProducts] = useState(products);

  const filterItems = (catItems) => {
    const updatedItems = newProducts.filter((curElem) => {
      return curElem.category === catItems;
    });
    setProducts(updatedItems);
  };

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
        setNewProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container-fluid">
      {/* Buttons */}
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="pills-all"
            data-bs-toggle="pill"
            onClick={() => setProducts(newProducts)}
          >
            All
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-men"
            data-bs-toggle="pill"
            onClick={() => filterItems("men's clothing")}
          >
            men's clothing
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-women"
            data-bs-toggle="pill"
            onClick={() => filterItems("women's clothing")}
          >
            women's clothing
          </button>
        </li>

        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-jewelery"
            data-bs-toggle="pill"
            onClick={() => filterItems("jewelery")}
          >
            jewelery
          </button>
        </li>

        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-electronics"
            data-bs-toggle="pill"
            onClick={() => filterItems("electronics")}
          >
            electronics
          </button>
        </li>
      </ul>

      {/* Buttons */}

      {/* Show All category */}
      <div className="tab-content" id="pills-tabContent">
        {products.map((product) => {
          return (
            <div className="tab-pane fade show active" key={product.id}>
              <h3>{product.category}</h3>
              <p>{product.title}</p>
            </div>
          );
        })}
      </div>
      {/* Show All category */}
    </div>
  );
};

export default Home;
