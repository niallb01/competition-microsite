import { RiBeerLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-header">
        <RiBeerLine className="beer-icon" size={60} />
        <h1>Win a free pint</h1>
      </div>
      <p className="home-text">
        Click below to add details and a valid 6 digit entry code
      </p>
      <Link to="/form">
        <button className="enter-btn">Enter</button>
      </Link>
    </div>
  );
};

export default Home;
