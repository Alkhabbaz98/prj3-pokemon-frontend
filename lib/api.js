import axios from "axios"

const baseUrl = import.meta.env.VITE_BACK_END_SERVER_URL
const token = localStorage.getItem('token')

const createTeam = async (data) => {
  try {
    const url = `${baseUrl}/pokewiki/new`
    console.log(url)
    console.log(token)
    const response = await axios.post(url, data, {
      headers: { Authorization: `Bearer ${token}` }
    })
    return response
  } catch (error) {
    return error
  }
}

const deleteTeam = async (id, token) => {
  try {
    const url = `${baseUrl}/${id}`
    const response = await axios.delete(url, {
      headers: { Authorization: `Bearer ${token}` }
    })
    return response
  } catch (error) {
    return error
  }
}


export {
  createTeam,
  deleteTeam,
}
