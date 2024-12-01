 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FirstLandingPage from "./pages/FirstLandingPage";
import RegisterPage from "./pages/RegisterPage";
import VerifyPage from "./pages/VerifyPage";
import LoginPage from "./pages/LoginPage";
import { GoogleOAuthProvider } from "@react-oauth/google";
import MainLand from "./pages/MainLand";
import FullMemeMarket from "./pages/FullMemeMarket";
import FullLeaderBoard from "./pages/FullLeaderBoard";

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
          <Route path="/full+mememarket" element={<FullMemeMarket />} />
          <Route path="/full+leaderboard" element={<FullLeaderBoard />} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
};

export default App;