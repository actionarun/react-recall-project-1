import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import useFetch from "../hooks/useFetch";

function ProductDetails() {
  const { id } = useParams();

  const { addToCart } = useContext(CartContext);

  const {
    data: product,
    loading,
    error,
  } = useFetch(
    `https://fakestoreapi.com/products/${id}`
  );

  if (loading) {
  return (
    <h2 className="status-message">
      Loading product...
    </h2>
  );
}

if (error) {
  return (
    <h2 className="status-message">
      {error}
    </h2>
  );
}

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="product-details">
      <img
        src={product.image}
        alt={product.title}
      />

      <div>
        <h1>{product.title}</h1>

        <p>{product.description}</p>

        <h2>₹ {product.price}</h2>

        <p>
          Category: {product.category}
        </p>

        <button
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;