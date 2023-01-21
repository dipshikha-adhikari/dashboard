import axios from "axios";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmRmMTU2YzU2ZTZkNjQyMzM1OTYwOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDI4MzE1NX0.N7hyBIkhlrbmMKeWmQrlWvX2-ot_2PJ0Cd7Ebtlzvt4"
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).currentUser).token
export const publicRequest = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const userRequest = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  header: `${TOKEN}`,
});
