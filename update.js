function showFormUpdate(id) {
    axios.get('http://localhost:8080/students/' + id)
        .then(function (response) {
            let student = response.data;
            // console.log(student)
            document.getElementById("main").innerHTML = `
         <div>
              <input type="text" id="name" placeholder="Name" value="${student.name}">
               <input type="text" id="age" placeholder="Age" value="${student.age}">
            <input type="text" id="email" placeholder="Email" value="${student.email}">
                <button onclick="Update(${student.id})">Sửa</button>
       </div>
 `
        })
}

function Update(id) {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;

    let student = {
        name: name,
        age: age,
        email: email,
    }
    axios.put('http://localhost:8080/students/' + id, student).then(function (response) {
        showAll();
    })
}
