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
}


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("upBtnTop").style.display = "block";
    } else {
        document.getElementById("upBtnTop").style.display = "none";
    }
}
