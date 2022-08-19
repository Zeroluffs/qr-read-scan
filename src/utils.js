import axios from "axios";

export const api = axios.create({
    baseURL: `https://techtest-backend.herokuapp.com/api`,
  });