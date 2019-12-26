import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID ca93c45935a01c3e52ff2a083573980179903b1256d5e79d52008a5c90d19b6e"
  }
});
