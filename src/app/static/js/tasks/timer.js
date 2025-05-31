(function () {
    const timerEl = document.getElementById("timer");
    if (!timerEl) return;

    let initial = parseInt(timerEl.dataset.elapsed, 10);
    if (isNaN(initial)) initial = 0;

    let base = initial;
    let start = Date.now();

    function format(sec) {
        const m = String(Math.floor(sec / 60)).padStart(2, "0");
        const s = String(sec % 60).padStart(2, "0");
        return `${m}:${s}`;
    }

    window.getElapsedSeconds = function () {
        return base + Math.floor((Date.now() - start) / 1000);
    };

    window.getSessionSeconds = function () {
        return Math.floor((Date.now() - start) / 1000);
    };

    window.resetTimer = function () {
        base += Math.floor((Date.now() - start) / 1000);
        start = Date.now();
    };

    window.setBaseTime = function (seconds) {
        base = seconds;
        start = Date.now();
    };

    setInterval(() => {
        timerEl.textContent = format(base + Math.floor((Date.now() - start) / 1000));
    }, 1000);
})();