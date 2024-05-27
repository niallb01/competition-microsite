import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="thank-you-container">
      <h1>Thank you for taking part</h1>
      <p>Please keep an eye out for future promotions!</p>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default ThankYou;
