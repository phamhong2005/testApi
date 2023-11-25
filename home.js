function showAll() {
    axios.get('http://localhost:8080/students')
        .then(function (response) {
            let student = response.data;
            console.log(student)
            let html = `
        <table border="1">
    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
        <th>Email</th>
        <th colspan="2">Action</th>
    </tr>
`;
            for (let i = 0; i < student.length; i++) {
                html += `<tr>
                <td>${student[i].id}</td>
                <td>${student[i].name}</td>
                <td>${student[i].age}</td>
                <td>${student[i].email}</td>
                <td><button onclick="showFormUpdate(${student[i].id})">Update</button></td>
                <td><button onclick="remove(${student[i].id})">Delete</button></td>
</tr>`
            }
            html += `</table>`;
            document.getElementById("main").innerHTML = html;
        })
}

showAll();

function search() {
    let q = document.getElementById("q").value;
    if (q === "") {
        showAll();
    } else {
        axios.get('http://localhost:8080/students/search?q=' + q)
            .then(function (response) {
                let student = response.data;
                let html = `
        <table border="1">
    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
        <th>Email</th>
        <th colspan="2">Action</th>
    </tr>
`;
                for (let i = 0; i < student.length; i++) {
                    html += `<tr>
                <td>${student[i].id}</td>
                <td>${student[i].name}</td>
                <td>${student[i].age}</td>
                <td>${student[i].email}</td>
                <td><button onclick="showFormUpdate(${student[i].id})">Update</button></td>
                <td><button onclick="remove(${student[i].id})">Delete</button></td></tr>`
                }
                html += `</table>`;
                document.getElementById("main").innerHTML = html;
            })
    }
}

function remove(id) {
    let confirms = confirm("Mày Chắc Chưa");
    if (confirms) {
        axios.delete('http://localhost:8080/students/' + id)
            .then(function (response) {
                alert("Xóa Thành Công Vị Trí : " + id)
                showAll()
            })
    } else {
        alert("Xóa Không Thành Công Vị Trí Thứ : " + id)
    }
}

