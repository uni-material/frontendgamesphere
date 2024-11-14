async function uploadGame() {
    const title = document.getElementById('title').value;
    const developer = document.getElementById('developer').value;
    const fileInput = document.getElementById('file');
    const file = fileInput.files[0];

    // Verifica que todos los campos están completos
    if (!title || !developer || !file) {
        alert("Please fill out all fields.");
        return;
    }

    // Crear un objeto FormData y agregar los campos
    const formData = new FormData();
    formData.append('title', title);
    formData.append('developer', developer);
    formData.append('file', file);

    try {
        const response = await fetch('http://localhost:8080/game/', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            const result = await response.json();
            document.getElementById('responseMessage').innerText = 'Game uploaded successfully!';
            console.log('Upload success:', result);
        } else {
            document.getElementById('responseMessage').innerText = 'Failed to upload game.';
            console.error('Upload failed:', response.statusText);
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('responseMessage').innerText = 'Error uploading game.';
    }
}
