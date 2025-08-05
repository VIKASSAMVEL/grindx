document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const messagesDiv = document.getElementById('form-messages');

    messagesDiv.innerHTML = ''; // Clear previous messages

    if (name === '') {
        messagesDiv.innerHTML += '<p style="color: red;">Name is required.</p>';
    }

    if (email === '') {
        messagesDiv.innerHTML += '<p style="color: red;">Email is required.</p>';
    } else if (!/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(email)) {
        messagesDiv.innerHTML += '<p style="color: red;">Invalid email format.</p>';
    }

    if (phone !== '' && !/^\d{10}$/.test(phone)) {
        messagesDiv.innerHTML += '<p style="color: red;">Phone number must be 10 digits.</p>';
    }

    if (messagesDiv.innerHTML === '') {
        messagesDiv.innerHTML = '<p style="color: green;">Form submitted successfully!</p>';
        // In a real application, you would send this data to a server
        console.log('Form Data:', { name, email, phone });
        document.getElementById('myForm').reset();
    }
});