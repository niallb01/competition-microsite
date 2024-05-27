import { CiBeerMugFull } from "react-icons/ci";
import { Link } from "react-router-dom";
import beer_png from "../images/beer.png";

const Home = () => {
  return (
    <div className="home-container">
      <img
        className="beer-img"
        src={beer_png}
        alt="beer"
        width="400"
        height="300"
      />
      <h1>Win a free pint</h1>
      <p>
        Please follow link below to add details and a valid 6 digit entry code
      </p>
      <Link to="/form">
        <button>Enter</button>
      </Link>
    </div>
  );
};

export default Home;
