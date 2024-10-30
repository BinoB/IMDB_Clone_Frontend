import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const API_URL = `${BACKEND_URL}/api/users/actor`;

// Create New Actor
const createActor = async (formData) => {
  const response = await axios.post(API_URL, formData);
  return response.data;
  console.log(response.data);
};

// Get all actors
const getActors = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Delete a Actor
const deleteActor = async (id) => {
  const response = await axios.delete(API_URL + id);
  return response.data;
};
// Get a Actor
const getActor = async (id) => {
  const response = await axios.get(API_URL + id);
  return response.data;
};
// Update Actor
const updateActor = async (id, formData) => {
  const response = await axios.patch(`${API_URL}${id}`, formData);
  return response.data;
};

const actorService = {
  createActor,
  getActors,
  getActor,
  deleteActor,
  updateActor,
};

export default actorService;
