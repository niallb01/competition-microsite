import { RiBeerLine } from "react-icons/ri";
import { useState } from "react";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AgeGate = (props) => {
  const [userAge, setUserAge] = useState("");
  const { setVerifyAge } = props;
  const navigate = useNavigate();

  const handleChange = (e) => {
    console.log("input change");
    setUserAge(e.target.value);
  };

  // get user age by subtracting birth year(receives userAge) from current year
  const handleSubmit = (e) => {
    console.log("submit");
    e.preventDefault();
    const currentYear = new Date().getFullYear();
    const birthYear = new Date(userAge).getFullYear();
    const age = currentYear - birthYear;

    if (age >= 18) {
      setVerifyAge(true);
      navigate("/home");
    } else {
      toast.error("Sorry, you must be over 18 take part!", {
        position: "top-center",
        autoClose: false,
        closeOnClick: true,
      });
    }
  };

  return (
    <>
      <ToastContainer limit={1} />
      <div className="age-gate-container">
        <h1 className="age-gate-header">
          <RiBeerLine className="beer-icon" />
          Welcome!
        </h1>
        <p>Please enter your DOB, you must be over 18 to enter!</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="dob">
            <input
              className="date-input"
              value={userAge} // input is linked directly to state
              onChange={handleChange}
              type="date"
              required
            />
          </label>
          <br />
          <button type="submit" className="age-gate-btn">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AgeGate;
