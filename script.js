function toggleList() {
    var x = document.getElementById("myLink");
    if (x.style.display === "block" || x.style.display === "") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}