import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

interface User {
  name: string;
  email: string;
  password: string;
  company: {
    nameCompany: string;
    nicknameSpace: string;
    industry: string;
    employees: string;
  };
  website?: string;
}

type Email = string | null;

interface Credentials {
  email: string;
  password: string;
}

const register = async (userData: User) => {
  const response = await axios.post(API_URL, userData);
  return response.data;
};

const checkEmailValidity = async (email: Email) => {
  const response = await axios.get(API_URL);
  const emails: Email[] = [];
  response.data.forEach((el: { email: string }) => emails.push(el.email));
  return emails.includes(email) ? true : false;
};

const login = async (credentials: Credentials) => {
  const response = await axios.get(API_URL);
  const users: Credentials[] = response.data.map((item: User) => {
    return {
      email: item.email,
      password: item.website,
    };
  });

  const found: Credentials | undefined = users.find((user) => {
    return (
      user.email.toString() === credentials.email.toString() &&
      user.password.toString() === credentials.password.toString()
    );
  });

  if (found) {
    return found;
  } else return null;
};

const authService = { register, checkEmailValidity, login };
export default authService;
