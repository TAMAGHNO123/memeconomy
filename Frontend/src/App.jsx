import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FirstLandingPage from "./pages/FirstLandingPage";
import RegisterPage from "./pages/RegisterPage";
import VerifyPage from "./pages/VerifyPage";
import { GoogleOAuthProvider } from "@react-oauth/google";

const App = () => {
  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <Router>
        <Routes>
        <Route path="/" element={<FirstLandingPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/verify/:token" element={<VerifyPage />} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
};

export default App;
