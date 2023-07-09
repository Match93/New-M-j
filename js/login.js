async function onLoginClick() {
    const login = document.getElementById("login").value;
    const password = document.getElementById("password").value;

    let body = {
        login: login,
        password: password
    };

    const response = await fetch("https://localhost:7295/api/user/login", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    });
    response.json().then(data => {
        console.log(data);
        location.href = 'menu_admin.html';
    });
}