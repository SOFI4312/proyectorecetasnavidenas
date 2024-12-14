// api.ts
import axios from "axios";

// Accede correctamente a la variable de entorno
const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';  // URL base de tu backend

const apiClient = axios.create({
  baseURL: apiUrl, // Configura la baseURL en Axios
});

export default apiClient;
