import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div>
        <h1>Welcome to ShopApp</h1>

        <p>
          Discover products and shop your favourites.
        </p>

        <Link to="/products">
          Shop Now
        </Link>
      </div>
    </div>
  );
}

export default Home;