import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const API_URL = `${BACKEND_URL}/api/users/producer`;

// Create New Producer
const createProducer = async (formData) => {
  const response = await axios.post(API_URL, formData);
  return response.data;
  console.log(response.data);
};

// Get all producers
const getProducers = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Delete a Producer
const deleteProducer = async (id) => {
  const response = await axios.delete(API_URL + id);
  return response.data;
};
// Get a Producer
const getProducer = async (id) => {
  const response = await axios.get(API_URL + id);
  return response.data;
};
// Update Producer
const updateProducer = async (id, formData) => {
  const response = await axios.patch(`${API_URL}${id}`, formData);
  return response.data;
};

const producerService = {
  createProducer,
  getProducers,
  getProducer,
  deleteProducer,
  updateProducer,
};

export default producerService;
