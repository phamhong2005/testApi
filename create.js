function showFormAdd() {
    document.getElementById("main").innerHTML = `
               <div>
                <input type="text" id="name" placeholder="Name">
                <input type="text" id="age" placeholder="Age">
                <input type="text" id="email" placeholder="Email">
                <button onclick="Add()">SubMit</button>
        </div>
    `
}

function Add() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;

    let student = {
        name: name,
        age: age,
        email: email,
    }
    axios.post('http://localhost:8080/students', student).then(function (response) {
        showAll()
    })
}
