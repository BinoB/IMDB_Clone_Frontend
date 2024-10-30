import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const API_URL = `${BACKEND_URL}/api/users/movie`;

// Create New Movie
const createMovie = async (formData) => {
  const response = await axios.post(API_URL, formData);
  return response.data;
  console.log(response.data);
};

// Get all movies
const getMovies = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Delete a Movie
const deleteMovie = async (id) => {
  const response = await axios.delete(API_URL + id);
  return response.data;
};
// Get a Movie
const getMovie = async (id) => {
  const response = await axios.get(API_URL + id);
  return response.data;
};
// Update Movie
const updateMovie = async (id, formData) => {
  const response = await axios.patch(`${API_URL}${id}`, formData);
  return response.data;
};

const movieService = {
  createMovie,
  getMovies,
  getMovie,
  deleteMovie,
  updateMovie,
};

export default movieService;
