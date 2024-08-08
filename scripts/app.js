document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log('Username:', username);
    console.log('Password:', password);

    // Perform validation or further processing here
    if (username === 'admin' && password === 'password123') {
        alert('Login successful!');
    } else {
        alert('Login failed. Please check your credentials.');
    }
});