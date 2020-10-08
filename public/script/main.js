$(document).ready(function() {
    $('#toggleMenu').on('click', () => {
        document.getElementById("sidepanel").style.width = "250px";
    });
    $('#closeSidemenu').on('click', () => {
        document.getElementById("sidepanel").style.width = "0";
    });
});