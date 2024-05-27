import { Link } from "react-router-dom";

const NoWin = () => {
  return (
    <div className="no-win-container">
      <h1>Sorry!</h1>
      <p>Unfortunately you didn't win this time</p>
      <Link to="/thankyou">
        <button>Leave</button>
      </Link>
    </div>
  );
};

export default NoWin;
