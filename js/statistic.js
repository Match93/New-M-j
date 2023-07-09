
let months = [];
let prices = [];




window.addEventListener("load", async (event) => {
    let one = '';
let two;
    const response = await fetch("https://localhost:7295/api/statistic/months", {
        method: "GET",
        headers: { 'Content-Type': 'application/json' },
    });
    await response.json().then(data => {
        console.log(data);
        Object.assign(months, data);
        one = data[0];
        two = data[1];
        data.forEach(element => {
            one = element
        });
       // console.log(months)
        //  let hello = document.getElementById("hello");
        //  hello.innerText = "Cześć" + " " + data["firstName"] + " " + data["lastName"];
    });


    // ZMIenić
    const responseTwo = await fetch("https://localhost:7295/api/statistic/1", {
        method: "GET",
        headers: { 'Content-Type': 'application/json' },
    });
    await responseTwo.json().then(data => {
        console.log(data);
        Object.assign(prices, data);
    });


    const ctx = document.getElementById('myChart').getContext('2d');
    console.log(prices)
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [months[0], months[1], months[2], months[3], months[4], months[5]],
            datasets: [{
                label: 'Skoda Octavia',
                data: prices,
                backgroundColor: [
                    'rgba(201, 9, 28, 0.72)',
                ],
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
})


