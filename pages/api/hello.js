const data = {
  resType: 1,
  resBody: 'someText',
  resUser: 'onlineTestCommit',
};

fetch('https://booking-be.vercel.app/api/add-reservation', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
console.log('test');