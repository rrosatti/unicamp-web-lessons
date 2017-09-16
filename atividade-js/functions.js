function changeImage(imgId) {
    img = "img/sun1.jpg";
    if (document.getElementById(imgId).getAttribute("src") == img) {
        img = "img/moon1.jpg";
    }
    document.getElementById(imgId).setAttribute("src", img);
}

function displayName(imgId) {
    img = "img/sun1.jpg";
    if (document.getElementById(imgId).getAttribute("src") == img) {
        document.getElementById("name").innerHTML="I'm the Sun.";
    } else {
        document.getElementById("name").innerHTML="I'm the Moon";
    }
}
