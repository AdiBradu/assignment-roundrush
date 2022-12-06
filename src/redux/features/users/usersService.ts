import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

const fetchUsers = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const usersService = { fetchUsers };
export default usersService;
