import axios from 'axios';
// const baseUrl = window.location.href + ':3001/new';
const baseUrl = 'http://localhost:3001/new'
const getNewURL = () => {
  console.log(baseUrl)
  const request = axios.post(baseUrl)
  return request.then(response => response.data)
}

const newURLServices = { 
  getNewURL
}

export default newURLServices