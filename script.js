const baseURL = 'https://your-glitch-app.glitch.me'; // Change to your actual backend URL

function registerUser() {
  const username = document.getElementById('reg-username').value;
  const password = document.getElementById('reg-password').value;
  const status = document.getElementById('reg-status').value;

  fetch(`${baseURL}/api/user`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password, status })
  })
    .then(res => res.json())
    .then(data => {
      document.getElementById('reg-result').innerText = data.message || 'User registered';
    })
    .catch(err => console.error(err));
}

function loginUser() {
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  fetch(`${baseURL}/api/auth`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  })
    .then(res => res.json())
    .then(data => {
      document.getElementById('login-token').innerText = data.token || data.message;
    })
    .catch(err => console.error(err));
}

function getStatus() {
  const token = document.getElementById('jwt-token').value;

  fetch(`${baseURL}/api/status`, {
    method: 'GET',
    headers: {
      'X-Auth': token
    }
  })
    .then(res => res.json())
    .then(data => {
      document.getElementById('status-result').innerText = data.status || data.message;
    })
    .catch(err => console.error(err));
}
