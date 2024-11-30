import axios from "axios";

const API_URL = "http://localhost:5001/api/auth";

export const registerUser = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, formData);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};