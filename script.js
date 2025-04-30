
document.addEventListener("DOMContentLoaded", () => {
    const timerBar = document.getElementById("timer-bar");
    window.addEventListener("storage", (e) => {
        if (e.key === "lastAction" && timerBar) {
            timerBar.style.animation = "none";
            void timerBar.offsetWidth;
            timerBar.style.animation = "shrink 30s linear forwards";
        }
    });
});
