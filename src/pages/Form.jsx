import { useState } from "react";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import "../styles/Form.css";

const Form = () => {
  const [termsAndConditions, setTermsAndConditions] = useState(false);
  // create user object to store data
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    entryCode: "",
  });

  const navigate = useNavigate();

  const handleTerms = () => {
    setTermsAndConditions(!termsAndConditions);
  };

  const handlePhone = (value) => {
    setUserData({ ...userData, phone: value });
  };

  // we need an on submit for form and onchange for inputs to add user data to state
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if TandC's are unchecked
    if (!termsAndConditions) {
      toast.error(
        "You must agree to the terms and conditions before submitting.",
        {
          position: "top-center",
          autoClose: false,
          closeOnClick: true,
        }
      );
      return;
    }
    // if user doesn't enter 6 digit code
    if (!/^\d{6}$/.test(userData.entryCode)) {
      toast.error("Please enter a valid 6-digit entry code.", {
        position: "top-center",
        autoClose: false,
        closeOnClick: true,
      });
      return;
    }

    // check user enters phone number
    if (!userData.phone || userData.phone.length < 10) {
      toast.error("Please enter a valid phone number.", {
        position: "top-center",
        autoClose: false,
        closeOnClick: true,
      });
      return;
    }

    // if user enters correct data
    const isWinner = Math.random() < 0.2; // 20% chance to win
    if (isWinner) {
      navigate("/winner");
    } else {
      navigate("/nowin");
    }
  };

  console.log(userData);

  return (
    <>
      <ToastContainer limit={1} />
      <div className="form-container">
        <h1>Enter to win a free pint</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="form-text-input"
            value={userData.firstName}
            onChange={handleChange}
            required
          />

          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="form-text-input"
            value={userData.lastName}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-text-input"
            value={userData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="phone">Phone:</label>
          <PhoneInput
            value={userData.phone}
            onChange={handlePhone}
            name="phone"
            id="phone"
            required
          />

          <label htmlFor="entryCode">Entry Code:</label>
          <input
            type="text"
            id="entryCode"
            name="entryCode"
            className="form-text-input"
            value={userData.entryCode}
            onChange={handleChange}
            maxLength="6"
            title="Please enter 6 digit code"
            required
          />
          <button type="submit" id="submit" name="submit" className="enter-btn">
            Enter
          </button>
          <div className="terms-container">
            <label htmlFor="terms">I agree to terms and conditions</label>
            <input
              onClick={handleTerms}
              type="checkbox"
              id="terms"
              name="terms"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
