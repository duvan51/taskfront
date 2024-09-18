import axios from 'axios';

// Crear instancia de Axios (opcional)
const apiInstance = axios.create({
  baseURL: 'http://localhost:4000', // Asegúrate de que coincida con tu backend
});

// Interceptor de solicitud
apiInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
       // console.log('Header Authorization:', config.headers['Authorization']);
      } else {
        console.log('Token no encontrado en localStorage');
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

// Interceptor de respuesta (opcional para manejar errores globales)
apiInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 403) {
      console.error('Acceso denegado: Token no válido o no proporcionado');
      // Puedes redirigir al usuario o mostrar un mensaje de error global aquí
    }
    return Promise.reject(error);
  }
);

export default apiInstance;