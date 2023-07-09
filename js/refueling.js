window.addEventListener("load", async (event) => {
    //wysyłanie do backendu zapytania o listę użytkowników
    //do responsa zwraca nam listę użytkowników
    const response = await fetch("https://localhost:7295/api/vahicle/get-curr-user-car", {
        method: "GET",
        headers: { 'Content-Type': 'application/json' },
    });

    let tab = '';
    console.log(response.status)
    if (response.status == '404') {
        tab = '<div>Brak przypisanego pojazdu</div>'
    } else if (response.status == '200') {
        console.log(response.body)
        response.json().then(x => {
            console.log("fQWfwfewef")
            tab = `<div>${x["id"]}${x.model}${x.registerNumber}${x.vin}${x.gearbox}${x.productionYear}</div>`
        });
    }

        console.log(tab)
       // console.log(data)
        document.getElementById('header-re').innerHTML = tab;




})
function onBackClick() {
    location.href = 'menu_admin.html';
}