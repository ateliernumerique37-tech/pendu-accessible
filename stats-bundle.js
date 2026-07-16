(() => {
  // js/stats-page.js
  var FIREBASE_CONFIG = {
    projectId: "pendu-accessible-stats",
    appId: "1:1037187434250:web:0cf7c74cf5e5f0f1aa5cf3",
    apiKey: "AIzaSyCYA1WW_jp6YmkYHbRhcYCEq5AmayVPJmo",
    authDomain: "pendu-accessible-stats.firebaseapp.com"
  };
  function $(id) {
    return document.getElementById(id);
  }
  function formatNumber(n) {
    return n.toLocaleString("fr-FR", { maximumFractionDigits: 1 });
  }
  function showState(id) {
    ["stats-loading", "stats-empty", "stats-error", "stats-content"].forEach((s) => {
      $(s).hidden = s !== id;
    });
  }
  async function loadStats() {
    try {
      if (!firebase.apps.length) firebase.initializeApp(FIREBASE_CONFIG);
      const db = firebase.firestore();
      const snapshot = await db.collection("stats_daily").get();
      if (snapshot.empty) {
        showState("stats-empty");
        return;
      }
      let total = 0;
      let earliestDay = null;
      snapshot.forEach((doc) => {
        const data = doc.data();
        total += data.count || 0;
        const dayDate = /* @__PURE__ */ new Date(doc.id + "T00:00:00");
        if (!earliestDay || dayDate < earliestDay) earliestDay = dayDate;
      });
      const today = /* @__PURE__ */ new Date();
      const todayMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate());
      const msPerDay = 24 * 60 * 60 * 1e3;
      const daysElapsed = Math.max(1, Math.round((todayMidnight - earliestDay) / msPerDay) + 1);
      const perDay = total / daysElapsed;
      render({
        total,
        daysElapsed,
        earliestDay,
        perDay,
        perWeek: perDay * 7,
        perMonth: perDay * 30.44,
        perYear: perDay * 365.25
      });
    } catch {
      showState("stats-error");
    }
  }
  function render({ total, daysElapsed, earliestDay, perDay, perWeek, perMonth, perYear }) {
    $("stat-total").textContent = formatNumber(total);
    $("stat-since").textContent = earliestDay.toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
    $("stat-days").textContent = formatNumber(daysElapsed);
    $("stat-days-label").textContent = daysElapsed > 1 ? "jours" : "jour";
    $("stat-per-day").textContent = formatNumber(perDay);
    $("stat-per-week").textContent = formatNumber(perWeek);
    $("stat-per-month").textContent = formatNumber(perMonth);
    $("stat-per-year").textContent = formatNumber(perYear);
    showState("stats-content");
  }
  document.addEventListener("DOMContentLoaded", loadStats);
})();
