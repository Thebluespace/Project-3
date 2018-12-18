import axios from "axios";

export default {
  query: function(post,location) {
    return axios.post("/api/query",{"query":post,"location":location});
  },
  checkAuth: function(post,location) {
    return axios.get("/api/checkauth", post);
  },
  uquery: function(post,location) {
    return axios.post("/api/uquery",{"query":post,"location":location});
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
