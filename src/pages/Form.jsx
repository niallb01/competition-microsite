import { useState } from "react";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const Form = () => {
  const [termsAndConditions, setTermsAndConditions] = useState(false);
  // need to create user object
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
    // if user doesn't enter 10 digit phone number
    // if (!/^\d{11}$/.test(userData.phone)) {
    //   toast.error("Please enter a valid phone number.", {
    //     position: "top-center",
    //     autoClose: false,
    //     closeOnClick: true,
    //   });
    //   return;
    // }

    // if (!userData.phone || userData.phone.length < 10) {
    //   toast.error("Please enter a valid phone number.", {
    //     position: "top-center",
    //     autoClose: false,
    //     closeOnClick: true,
    //   });
    //   return;
    // }

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
            value={userData.firstName}
            onChange={handleChange}
            placeholder="Enter first name"
            required
          />

          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={userData.lastName}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          />

          {/* <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={userData.phone}
            onChange={handleChange}
            required
          /> */}

          <label htmlFor="phone">Phone:</label>
          <PhoneInput
            // placeholder="Enter phone number"
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
            value={userData.entryCode}
            onChange={handleChange}
            maxLength="6"
            title="Please enter 6 digit code"
            required
          />
          <button type="submit" id="submit" name="submit" className="enter-btn">
            Enter
          </button>
          <label htmlFor="terms">I agree to terms and conditions</label>
          <input
            onClick={handleTerms}
            type="checkbox"
            id="terms"
            name="terms"
          />
        </form>
      </div>
    </>
  );
};

export default Form;
