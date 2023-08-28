import http from 'k6/http';
import { sleep } from 'k6';
import exec from "k6/execution";

export const users = JSON.parse(open("data.json"));

export const options = {
  scenarios:{
    accountCreate:{
        executor: "shared-iterations",
        vus:5,
        iterations: users.length
    },
},
}

export default function () {
  //   const baseurl  = "https://reqres.in/";
  //   const endPoint  = "api/users/2";
  //   const url = baseurl.concat(endPoint);
  // const res = http.get(baseurl.concat(endPoint)); 
  console.log(exec.vu.idInTest);

  sleep(1);
}
