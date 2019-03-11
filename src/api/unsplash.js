import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 69b91f5d65cee8b3d7b6c379c1a5cf891a95c1064c73d18bd71c0f59b189c59f"
  }
});
