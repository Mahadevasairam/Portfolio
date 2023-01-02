function menu() {
    document.getElementById("navbar").style.display = "flex";
    document.getElementById("navbar").style.zIndex = 2;
    document.getElementById("menu").style.display = "none";
    document.getElementById("wrong").style.display = "flex";
}
function wrong() {
    document.getElementById("navbar").style.display = "none";
    document.getElementById("menu").style.display = "flex";
    document.getElementById("wrong").style.display = "none";
}