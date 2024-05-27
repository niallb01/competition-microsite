import { CiBeerMugFull } from "react-icons/ci";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Win a free pint</h1>
      <p>Please follow link below to add details and a valid entry code</p>
      <Link to="/form">
        <button>Enter</button>
      </Link>
    </div>
  );
};

export default Home;
