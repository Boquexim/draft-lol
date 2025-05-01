
document.addEventListener("DOMContentLoaded", () => {
    const confirmBtn = document.getElementById("confirm-btn");
    const resetBtn = document.getElementById("reset-btn");
    const championGrid = document.getElementById("champion-grid");

    const champions = ["Ahri", "Zed", "Lux", "Darius", "Thresh"];
    let turn = 0;

    champions.forEach(champ => {
        const el = document.createElement("div");
        el.className = "champion-tile";
        el.textContent = champ;
        el.onclick = () => {
            const picks = JSON.parse(sessionStorage.getItem("picks")) || { blue: [], red: [] };
            const team = turn % 2 === 0 ? "blue" : "red";
            if (picks[team].length < 5) {
                picks[team].push(champ);
                sessionStorage.setItem("picks", JSON.stringify(picks));
                turn++;
            }
        };
        championGrid.appendChild(el);
    });

    if (confirmBtn) {
        confirmBtn.onclick = () => {
            sessionStorage.setItem("lastAction", Date.now());
        };
    }

    if (resetBtn) {
        sessionStorage.clear();
        location.reload();
    }
});
