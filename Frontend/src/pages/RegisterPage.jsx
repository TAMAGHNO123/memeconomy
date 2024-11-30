import { useState } from "react";
import { motion } from "framer-motion";
import { useGoogleLogin } from "@react-oauth/google";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Icons } from "@/components/ui/icons"; // Assuming the path is correct
 
// Mock registerUser  function
const registerUser = async (formData) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return { message: 'Registration successful!' };
};

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    try {
      const response = await registerUser(formData);
      setMessage({ type: 'success', text: response.message });
    } catch (error) {
      setMessage({ type: 'error', text: 'Registration failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log("Google Login Success:", tokenResponse);
      setMessage({ type: 'success', text: 'Google sign-up successful!' });
    },
    onError: () => {
      setMessage({ type: 'error', text: 'Google sign-up failed. Please try again.' });
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center"
     style={{ backgroundImage: `url(https://c4.wallpaperflare.com/wallpaper/613/126/432/memes-painting-hd-wallpaper-preview.jpg)` }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6"
      >
        <Card className="w-full max-w-md overflow-hidden">
          <CardHeader className="space-y-1">
            <CardTitle className="text-3xl font-bold text-center text-gray-800">Create an account</CardTitle>
            <CardDescription className="text-center text-gray-600">
              Enter your details below to create your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  onChange={handleInputChange}
                  required
                  className="transition-all duration-200 focus:ring-2 focus:ring-blue-500 border-gray-300 rounded-md"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
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
                  placeholder="••••••••"
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
                {isLoading ? "Signing Up..." : "Sign Up"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="relative w-full">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">Or continue with</span>
              </div>
            </div>
            <Button
              variant="outline"
              onClick={() => handleGoogleLogin()}
              className="w-full transition-all duration-200 border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              <Icons.google className="mr-2 h-4 w-4" />
              Sign up with Google
            </Button>
          </CardFooter>
        </Card>
        {message && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4"
          >
            <Alert variant={message.type === 'success' ? 'default' : 'destructive'}>
              <AlertTitle>{message.type === 'success' ? 'Success' : 'Error'}</AlertTitle>
              <AlertDescription>{message.text}</AlertDescription>
            </Alert>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default RegisterPage;