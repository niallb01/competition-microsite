import AgeGate from "./pages/AgeGate";
import Home from "./pages/Home";
import Form from "./pages/Form";
import Winner from "./pages/Winner";
import NoWin from "./pages/NoWin";
import ThankYou from "./pages/ThankYou";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import "./App.css";

const App = () => {
  // verfiy age state, gets passed as prop to ageGate component below
  const [verifyAge, setVerifyAge] = useState(false);

  // user age must be verifed to access routes
  return (
    <Routes>
      <Route path="/" element={<AgeGate setVerifyAge={setVerifyAge} />}></Route>
      <Route
        path="/home"
        element={verifyAge ? <Home /> : <Navigate to="/" replace />}
      ></Route>
      <Route path="/form" element={<Form />}></Route>
      <Route path="/winner" element={<Winner />}></Route>
      <Route path="/nowin" element={<NoWin />}></Route>
      <Route path="/thankyou" element={<ThankYou />}></Route>
    </Routes>
  );
};

export default App;
