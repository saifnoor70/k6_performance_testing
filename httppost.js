import http from 'k6/http';
import { check, sleep } from 'k6';

// export const options = {
//   stages: [
//     { duration: '30s', target: 20 },
//     { duration: '1m30s', target: 10 },
//     { duration: '20s', target: 0 },
//   ],
// };

export default function () {
    const baseurl  = "https://reqres.in/";
    const endPoint  = "api/users";
    const url = baseurl.concat(endPoint);
    const payLoad = JSON.stringify({
        name : 'Rakib',
        job : 'Leader'
    })

    const params = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
    
  const res = http.post(url, payLoad, params); 
  console.log(res);
  check(res, {
    'is status 201': (r) => r.status === 201,
  });
  sleep(1);
}