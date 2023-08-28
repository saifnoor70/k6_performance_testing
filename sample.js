import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 20 },
    { duration: '1m30s', target: 10 },
    { duration: '20s', target: 0 },
  ],
};

export default function () {
    const baseurl  = "https://reqres.in/";
    const endPoint  = "api/users/2";
    const url = baseurl.concat(endPoint);
  const res = http.get(baseurl.concat(endPoint)); 
  console.log(res);

  sleep(1);
}
