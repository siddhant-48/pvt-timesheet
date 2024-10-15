// src/services/api.ts
import axios from "axios";

const fetchUsers = async () => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/todos");
  return data;
};

const isLogin = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
  console.log("🚀 ~ isLogin ~ data:", data)
  return data
  // const result = new Promise((resolve, reject) =>
  //   setTimeout(() => resolve(true), 2000)
  // );
  // return result;
};

export { fetchUsers, isLogin };
