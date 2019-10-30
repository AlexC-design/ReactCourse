import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID 50cfcdf86255dd28b51da457693f32ddb0fd62efdb290a900d3a0b1b639a71eb"
  }
});
