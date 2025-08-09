// Save data from Page 1
function saveData() {
    const name = document.getElementById("name").value;
    const file = document.getElementById("photo").files[0];

    if (!name || !file) {
        alert("Please enter name and select a photo!");
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        localStorage.setItem("userName", name);
        localStorage.setItem("userPhoto", e.target.result);
        window.location.href = "page2.html";
    };
    reader.readAsDataURL(file);
}

// Load data on Page 2
function loadPage2() {
    const name = localStorage.getItem("userName");
    const photo = localStorage.getItem("userPhoto");
    if (name && photo) {
        document.getElementById("userName").innerText = name;
        document.getElementById("userPhoto").src = photo;
    }
}

// Load data on Page 3
function loadPage3() {
    const name = localStorage.getItem("userName");
    const photo = localStorage.getItem("userPhoto");
    if (name && photo) {
        document.getElementById("finalName").innerText = name;
        document.getElementById("finalPhoto").src = photo;
    }
}
