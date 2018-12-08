import axios from "axios";

export default {
  query: function(post) {
    return axios.post("/api/query",post);
  },
  signin: function(post) {
    return axios.post("/api/signin", post);
  },
  signup: function(post) {
    return axios.post("/api/signup", post);
  },
  logout: function(post) {
    return axios.get("/api/logout");
  }
};
