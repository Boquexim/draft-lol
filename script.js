
document.addEventListener("DOMContentLoaded", () => {
    const timerBar = document.getElementById("timer-bar");
    const bluePicks = document.getElementById("blue-picks");
    const redPicks = document.getElementById("red-picks");

    function renderPicks() {
        const picks = JSON.parse(sessionStorage.getItem("picks")) || { blue: [], red: [] };

        bluePicks.innerHTML = "";
        redPicks.innerHTML = "";

        picks.blue.forEach(champ => {
            const el = document.createElement("div");
            el.className = "pick";
            el.textContent = champ;
            bluePicks.appendChild(el);
        });

        picks.red.forEach(champ => {
            const el = document.createElement("div");
            el.className = "pick";
            el.textContent = champ;
            redPicks.appendChild(el);
        });
    }

    window.addEventListener("storage", (e) => {
        if (e.key === "lastAction" && timerBar) {
            timerBar.style.animation = "none";
            void timerBar.offsetWidth;
            timerBar.style.animation = "shrink 30s linear forwards";
            renderPicks();
        }
    });

    renderPicks();
});
