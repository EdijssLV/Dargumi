function toggleDiv() {
    var div = document.getElementById("myDiv");
    var style = window.getComputedStyle(div);
    if (style.display === "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
}