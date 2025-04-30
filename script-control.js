
document.addEventListener("DOMContentLoaded", () => {
    const confirmBtn = document.getElementById("confirm-btn");
    const resetBtn = document.getElementById("reset-btn");
    const championGrid = document.getElementById("champion-grid");

    const champions = ["Ahri", "Zed", "Lux", "Darius", "Thresh"];

    champions.forEach(champ => {
        const el = document.createElement("div");
        el.className = "champion-tile";
        el.textContent = champ;
        el.onclick = () => {
            localStorage.setItem("lastPick", champ);
            localStorage.setItem("lastAction", Date.now());
        };
        championGrid.appendChild(el);
    });

    if (confirmBtn) {
        confirmBtn.onclick = () => {
            localStorage.setItem("lastAction", Date.now());
        };
    }

    if (resetBtn) {
        localStorage.clear();
        location.reload();
    }
});
