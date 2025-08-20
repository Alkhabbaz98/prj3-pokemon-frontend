import axios from "axios";

const baseUrl = import.meta.env.VITE_BACK_END_SERVER_URL;
const token = localStorage.getItem("token");

const showTeam = async () => {
  try {
    const url = `${baseUrl}/pokewiki/poketeam`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const createTeam = async (data) => {
  try {
    const url = `${baseUrl}/pokewiki/poketeam/new`;
    console.log(url);
    console.log(token);
    const response = await axios.post(url, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (error) {
    return error;
  }
};
const updateTeam = async (id, data) => {
  try {
    const url = `${baseUrl}/pokewiki/poketeam/${id}/update`;
    const response = await axios.put(url, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
const deleteTeam = async (id, token) => {
  try {
    const url = `${baseUrl}/pokewiki/poketeam/${id}`;
    const response = await axios.delete(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (error) {
    return error;
  }
};

export { createTeam, deleteTeam, updateTeam, showTeam };
