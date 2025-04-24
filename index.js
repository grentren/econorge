
window.transitionToPage = function(href) {
    document.body.style.opacity = 0;
    sessionStorage.setItem("fade", "true");
    setTimeout(() => { 
        window.location.href = href;
    }, 400);
};  

document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add("loaded");
    if (sessionStorage.getItem("fade") === "true") {
        document.body.style.opacity = 0;
        setTimeout(() => {
            document.body.style.opacity = 1;
            sessionStorage.removeItem("fade");
        }, 50);
    }
});

document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
});
document.addEventListener('gesturechange', function (e) {
    e.preventDefault();
});
document.addEventListener('gestureend', function (e) {
    e.preventDefault();
});