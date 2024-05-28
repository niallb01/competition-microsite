import { Link } from "react-router-dom";

const Winner = () => {
  return (
    <div className="winner-container">
      <h1>Congratulations!</h1>
      <p>
        You've won a free pint! we'll be in touch with details of how to claim
        prize!
      </p>
      <Link to="/thankyou">
        <button>Leave</button>
      </Link>
    </div>
  );
};

export default Winner;
