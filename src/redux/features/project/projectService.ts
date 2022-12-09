import axios from 'axios';

const setProject = async (id: number) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  );
  return response.data;
};

const projectService = { setProject };
export default projectService;
