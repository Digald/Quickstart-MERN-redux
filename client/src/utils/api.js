import axios from "axios";

export default {
  getData: function() {
    return axios.get("/finddata");
  }
  // sendData: mydata => {
  //   return axios.post("/postRoute", mydata);
  // }
};
