import axios from "../../config/axiosConfig";

export default async (req, res) => {
  axios.get("/v2/home-loans").then((response) => {
    res.send(response.data);
  });
};
