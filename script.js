function toggleList() {
    var x = document.getElementById("myLink");
    if (x.style.display === "block" || x.style.display === "") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

document.getElementById("upBtnTop").onclick = function() {
    window.scrollTo(0, 0);
};