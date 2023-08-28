import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  scenerios:{
        accountCreate:{
            executor: "shared-iterations",
            vus:5,
            iterations: 10
        }
  }
};

export default function () {
    const baseurl  = "https://reqres.in/";
    const endPoint  = "api/users";
    const endPoint2 = "api/users/2"
    const url = baseurl.concat(endPoint);
    const url2 = baseurl.concat(endPoint2);
    const payLoad = JSON.stringify({
        name : 'Rakib',
        job : 'Leader'
    })

    const params = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
    
  //const res = http.post(url, payLoad, params); 
  const res1 = http.get(url2);
  console.log(res1);
  check(res1, {
    'is status 201': (r) => r.status === 200,
  });
  sleep(1);
}