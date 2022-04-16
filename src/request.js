// Sample code for API request
export default {
  request: () => {
    const id = 'test';
    const pwd = 'test';
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', (e) => {
      if(xhr.readyState === XMLHttpRequest.DONE) {
        console.log(xhr.status, xhr.response);
      }
    });
    const payload = JSON.stringify({
      id: id,
      pwd: pwd,
    });
    xhr.open('POST', 'http://localhost:8000/api/v1/signin');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(payload);
  },
};
