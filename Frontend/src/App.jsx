 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FirstLandingPage from "./pages/FirstLandingPage";
import RegisterPage from "./pages/RegisterPage";
import VerifyPage from "./pages/VerifyPage";
import LoginPage from "./pages/LoginPage";
import { GoogleOAuthProvider } from "@react-oauth/google";
import MainLand from "./pages/MainLand";

const App = () => {
  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <Router>
        <Routes>
        <Route path="/" element={<FirstLandingPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/verify/:token" element={<VerifyPage />} />
          <Route path="/mainland" element={<MainLand />} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
};

export default App;