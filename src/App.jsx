import AgeGate from "./pages/AgeGate";
import Home from "./pages/Home";
import Form from "./pages/Form";
import Winner from "./pages/Winner";
import NoWin from "./pages/NoWin";
import ThankYou from "./pages/ThankYou";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import "./App.css";
// useNavigate - hook - can used in used in condtionals - replace - replace in history stack

const App = () => {
  // state which is sent into AgeGate component as prop
  const [verifyAge, setVerifyAge] = useState(false);

  // user age must be verifed to access routes
  return (
    <Routes>
      <Route path="/" element={<AgeGate setVerifyAge={setVerifyAge} />}></Route>
      <Route
        path="/home"
        element={verifyAge ? <Home /> : <Navigate to="/" replace />}
      ></Route>
      <Route
        path="/form"
        element={verifyAge ? <Form /> : <Navigate to="/" replace />}
      ></Route>
      <Route
        path="/winner"
        element={verifyAge ? <Winner /> : <Navigate to="/" replace />}
      ></Route>
      <Route
        path="/nowin"
        element={verifyAge ? <NoWin /> : <Navigate to="/" replace />}
      ></Route>
      <Route
        path="/thankyou"
        element={verifyAge ? <ThankYou /> : <Navigate to="/" replace />}
      ></Route>
    </Routes>
  );
};

export default App;
