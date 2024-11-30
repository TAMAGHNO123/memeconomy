import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Correct import
import { motion } from "framer-motion";
import { useGoogleLogin } from "@react-oauth/google";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Icons } from "@/components/ui/icons";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate(); // Initialize navigate hook

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    // Simulated login API call
    setTimeout(() => {
      if (formData.email === "soumyodeepdey2003@gmail.com" && formData.password === "1234") {
        setMessage({ type: "success", text: "Login successful!" });
        navigate("/mainland"); // Redirect to /mainland
      } else {
        setMessage({ type: "error", text: "Invalid email or password." });
      }
      setIsLoading(false);
    }, 1500);
  };

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log("Google Login Success:", tokenResponse);
      setMessage({ type: "success", text: "Google login successful!" });
      navigate("/mainland"); // Redirect to /mainland
    },
    onError: () => {
      setMessage({ type: "error", text: "Google login failed. Please try again." });
    },
  });

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(https://media.makeameme.org/created/yet-another-login.jpg`,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6"
      >
        <Card className="w-full max-w-md overflow-hidden">
          <CardHeader className="space-y-1">
            <CardTitle className="text-3xl font-bold text-center text-gray-800">
              Welcome Back
            </CardTitle>
            <CardDescription className="text-center text-gray-600">
              Please log in to continue
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  onChange={handleInputChange}
                  required
                  className="transition-all duration-200 focus:ring-2 focus:ring-blue-500 border-gray-300 rounded-md"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  onChange={handleInputChange}
                  required
                  className="transition-all duration-200 focus:ring-2 focus:ring-blue-500 border-gray-300 rounded-md"
                />
              </div>
              <Button
                type="submit"
                className="w-full transition-all duration-200 bg-blue-500 text-white hover:bg-blue-600 shadow-md"
                disabled={isLoading}
              >
                {isLoading ? (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                ) : null}
                {isLoading ? "Logging in..." : "Log In"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="text-center p-6 bg-gray-50 rounded-lg shadow-md">
            <div className="relative w-full mb-4">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-xs uppercase text-gray-600 font-semibold">
                <span className="bg-white px-2">Or</span>
              </div>
            </div>

            <Button
              variant="outline"
              onClick={handleGoogleLogin}
              className="mt-4 w-full transition-all duration-200 border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md shadow-sm"
            >
              <Icons.google className="mr-2 h-4 w-4" />
              Login with Google
            </Button>

            <div className="relative flex justify-center text-xs mt-4">
              <span className="bg-white px-2 text-gray-500">Don&apos;t have an Account?</span>
            </div>

            <div className="mt-2">
              <Button
                variant="outline"
                onClick={() => window.location.href = "/register"}
                className="w-full transition-all duration-200 border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md shadow-sm"
              >
                Sign Up
              </Button>
            </div>
          </CardFooter>
        </Card>
        {message && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4"
          >
            <Alert variant={message.type === "success" ? "default" : "destructive"}>
              <AlertTitle>{message.type === "success" ? "Success" : "Error"}</AlertTitle>
              <AlertDescription>{message.text}</AlertDescription>
            </Alert>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default LoginPage;
