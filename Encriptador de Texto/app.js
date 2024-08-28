document.getElementById('encryptButton').addEventListener('click', function() {
    const input = document.getElementById('inputText').value;
    let encrypted = '';

    for (let i = 0; i < input.length; i++) {
        encrypted += String.fromCharCode(input.charCodeAt(i) + 3);
    }

    document.getElementById('outputText').innerText = encrypted;
});
