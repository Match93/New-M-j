// Pobieranie zdarzenia podczas ładowania strony "load" - oprogramować to
window.addEventListener("load", async (event) => {
    //wysyłanie do backendu zapytania o listę użytkowników
    //do responsa zwraca nam listę użytkowników
    const response = await fetch("https://localhost:7295/api/user/users", {
        method: "GET",
        headers: { 'Content-Type': 'application/json' },
    });

    let tab = '';
    response.json().then(data => {
        console.log(data)
        data.forEach(x => {
            tab += `<tr onClick="onTableButtonClick('NONE')">
                        <td onClick="onTableButtonClick('NONE')">
                            ${x.id}
                        </td>
                        <td onClick="onTableButtonClick('NONE')">
                            ${x.firstName}
                        </td>
                        <td onClick="onTableButtonClick('NONE')">
                            ${x.lastName}
                        </td>
                        <td>
                            <button id="info-btn" type="button" onClick="onTableButtonClick('INFO', this.id)" class="btn btn-primary">
                                <i class="fa-solid fa-user"></i>
                            </button>
                        </td>
                        <td>
                            <button id="edit-btn" type="button" onClick="onTableButtonClick('EDIT', this.id)" class="btn btn-success">
                                <i class="fa-solid fa-user-pen"></i>
                            </button>
                        </td>
                        <td>
                            <button id="delete-btn" type="button" onClick="onTableButtonClick('DELETE', this.id)" class="btn btn-danger">
                                <i class="fa-solid fa-trash"></i>
                            </button>
                        </td>
                    </tr>`;
        });
        document.getElementById('tbody').innerHTML = tab;
    });
});


function onBackClick() {
    location.href = 'menu_admin.html';
}

// INFO - przycisk info
// EDIT - przycisk edycji
// DELETE - przycisk usuwania
function onTableButtonClick(x, y) {
    var tablee = document.getElementById('userTable');
    for (var i = 1; i < tablee.rows.length; i++) {
        tablee.rows[i].onclick = function () {
            console.log(this.cells[0].innerHTML); //id
            if (x == 'INFO' && y == 'info-btn') {
                console.log("show user info")
                x = 'NONE'
            } else if (x == 'EDIT' && y == 'edit-btn') {
                console.log("show user edit")
                x = 'NONE'
            } else if (x == 'DELETE' && y == 'delete-btn') {
                console.log("show user delete")
                x = 'NONE'
            }
        }
    }

}

async function onAddUser() {
    let login = document.getElementById('login-input').value;
    let email = document.getElementById('email-input').value;
    let firstName = document.getElementById('first-name-input').value;
    let lastName = document.getElementById('last-name-input').value;
    let password = document.getElementById('password-input').value;
    if (login == '') {
        document.getElementById('danger-message').innerText = 'Pole login jest wymagane!';
    } else if (password == '') {
        document.getElementById('danger-message').innerText = 'Pole hasło jest wymagane!';
    } else if (login != '' && password != '') {
        document.getElementById('danger-message').innerText = '';
        //dodaj
        let body = {
            login: login,
            email: email,
            firstName: firstName,
            lastName: lastName,
            password: password
        };
        console.log(JSON.stringify(body))
        const response = await fetch("https://localhost:7295/api/user/register", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        }).then(x => {
            if (x.status == 200) {
                document.getElementById('toast-add-user').style.display = 'block';
                console.log("Użytkownik został dodany")
            } else {
                console.log("Użytkownik nie został dodany")
            }
        })

        $('#exampleModal').modal('hide');
        //wyczyść
        document.getElementById('login-input').value = '';
        document.getElementById('email-input').value = '';
        document.getElementById('first-name-input').value = '';
        document.getElementById('last-name-input').value = '';
        document.getElementById('password-input').value = '';
        document.getElementById('danger-message').innerText = '';
    }
}


function onCloseToast() {
    document.getElementById('toast-add-user').style.display = 'none';
}
