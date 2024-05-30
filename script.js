// VARIABLES

const formElement = document.getElementById('formElement');
const nameElement = document.getElementById('nameElement');
const autorElement = document.getElementById('autorElement');
const messageElement = document.getElementById('message');

let valueName = "";
let valueAutor = "";

// LISTENERS

formElement.addEventListener('submit', sendData);
nameElement.addEventListener('input', readName);
autorElement.addEventListener('input', readLastName);

function sendData(e) {
    e.preventDefault();

    const data = { nameTask: valueName, autor: valueAutor };

    if (validateData(data)) {
        console.log(data); 
        clearFields();
        showMessage("Formulario enviado exitosamente.", "success");
    }
}

function readName(e) {
    valueName = e.target.value;
}

function readLastName(e) {
    valueAutor = e.target.value;
}

function validateData(data) {
    if (data.nameTask.trim() === "" || data.autor.trim() === "") {
        showMessage("Todos los campos son obligatorios.", "error");
        return false;
    }
    return true;
}

function clearFields() {
    nameElement.value = "";
    autorElement.value = "";
    valueName = "";
    valueAutor = "";
}

function showMessage(message, type) {
    messageElement.textContent = message;
    messageElement.className = type;
}
