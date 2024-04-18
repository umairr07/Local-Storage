let txtArea = document.getElementById("textarea");

txtArea.addEventListener("input", function () {
    localStorage.setItem("text", txtArea.value);
});

if (localStorage.getItem("text")) {
    txtArea.value = localStorage.getItem("text");
}