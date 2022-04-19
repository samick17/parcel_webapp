// Sample code for API request
export default {
  request: () => {
    const id = 'test';
    const pwd = 'test';
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.addEventListener('readystatechange', (e) => {
        if(xhr.readyState === XMLHttpRequest.DONE) {
          const status = xhr.status.toString();
          if(status.startsWith('4') || status.startsWith('5')) {
            reject(JSON.parse(xhr.response));
          } else {
            resolve(JSON.parse(xhr.response));
          }
        }
      });
      const payload = JSON.stringify({
        id: id,
        pwd: pwd,
      });
      xhr.open('POST', '/api/v1/signin');
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(payload);
    });
  },
};
