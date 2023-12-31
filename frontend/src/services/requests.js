import axios from 'axios'
const baseUrl = 'http://localhost:3001/requests'

const getAllRequests = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

export default getAllRequests