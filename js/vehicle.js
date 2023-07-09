window.addEventListener("load", async (event) => {
    //wysyłanie do backendu zapytania o listę użytkowników
    //do responsa zwraca nam listę użytkowników
    const response = await fetch("https://localhost:7295/api/vahicle/all", {
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
                            ${x.model}
                        </td>
                        <td onClick="onTableButtonClick('NONE')">
                            ${x.registerNumber}
                        </td>
                        <td onClick="onTableButtonClick('NONE')">
                            ${x.vin}
                        </td>
                        <td onClick="onTableButtonClick('NONE')">
                            ${x.vehicleType}
                        </td>
                        <td onClick="onTableButtonClick('NONE')">
                            ${x.gearbox}
                        </td>
                        <td onClick="onTableButtonClick('NONE')">
                            ${x.productionYear}
                        </td>
                        <td onClick="onTableButtonClick('NONE')">
                            ${x.fuelType}
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
    var tablee = document.getElementById('vehicleTable');
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
