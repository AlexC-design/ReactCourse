import axios from "axios";

const KEY = "AIzaSyAc4S9O9b3zUNO4QjjJopltAmGVWtpT9vI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: "5",
    key: KEY
  }
});
