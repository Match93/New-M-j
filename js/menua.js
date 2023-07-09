window.addEventListener("load", async (event) => {
    const response = await fetch("https://localhost:7295/api/user/info", {
        method: "GET",
        headers: { 'Content-Type': 'application/json' },
    });
    response.json().then(data => {
        console.log(data);
        let hello = document.getElementById("hello");
        hello.innerText = "Cześć" + " " + data["firstName"] + " " + data["lastName"];
    });
});

function clickOnUsers() {
    location.href = 'users.html';
}
function clickOnVehicles(){
    location.href = 'vehicles.html';
}
function clickOnReservation(){
    location.href = 'reservation.html'
}function clickOnRefueling(){
    location.href = 'refueling.html'
}
function clickOnStatistic(){
    location.href = 'statistic.html'
}