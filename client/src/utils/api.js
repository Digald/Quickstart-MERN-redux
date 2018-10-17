import axios from "axios";

export default {
  getBooks: () => {
    return axios.get("/finddata");
  }
  // sendData: mydata => {
  //   return axios.post("/postRoute", mydata);
  // }
};
