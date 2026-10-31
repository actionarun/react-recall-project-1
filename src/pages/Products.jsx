import ProductCard from "../components/ProductCard";
import useFetch from "../hooks/useFetch";

function Products() {
  const {
    data: products,
    loading,
    error,
  } = useFetch(
    "https://fakestoreapi.com/products"
  );

 if (loading) {
  return (
    <h2 className="status-message">
      Loading products...
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

  return (
    <div className="products-page">
      <h1>Products</h1>

      <div className="products-grid">
        {products?.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;