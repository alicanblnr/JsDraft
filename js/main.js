
var elem = document.getElementById("header-of-login-form");
elem.addEventListener("click", clicked);

function clicked() {

    if (!document.getElementById("created-div")) {
        var created = document.createElement("div");
        created.id = "created-div";

        var createdP = document.createElement("p");
        createdP.innerText = "Email Gonderildi";

        created.appendChild(createdP);

        elem.appendChild(created);
        interval();
    }
}

function interval() {
    setTimeout(() => {
        var created = document.getElementById("created-div");
        created.remove();
    }, 3000);
}

var btn = document.getElementById("btn");
btn.addEventListener("click", btnClick);

function btnClick() {
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    if (user === "admin" && pass === "12345") {
        authResult("Giris Basarili")
    }
    else if (user === "" && pass === "")
        authResult("Bilgiler Bos Birakilamaz")
    else (user == ! "admin" && pass == ! "12345")
        authResult("Kullanici Adi veya Sifre Hatali")

}

function authResult(message) {
    if (!document.getElementById("created-div")) {
        var created = document.createElement("div");
        created.id = "created-div";

        var createdP = document.createElement("p");
        createdP.innerText = message;

        created.appendChild(createdP);

        elem.appendChild(created);
        interval();
    }
}

