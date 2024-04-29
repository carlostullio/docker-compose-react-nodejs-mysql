import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'https://bug-free-space-fiesta-jj9qrpjpg69hqwwp-6868.app.github.dev/api',
  headers: {
    "Content-type": "application/json"
  }
});