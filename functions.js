document.querySelectorAll(".user-link").forEach(link => {
  link.removeAttribute("title");
});

function formatTimestamps() {
  document.querySelectorAll("abbr.o-timestamp").forEach((el) => {
    const timestamp = Number(el.dataset.timestamp);

    if (!timestamp) {
      return;
    }

    const date = new Date(timestamp);

    const formatted =
      `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} ` +
      `klo ${String(date.getHours()).padStart(2, "0")}:` +
      `${String(date.getMinutes()).padStart(2, "0")}`;

    if (el.textContent !== formatted) {
      el.textContent = formatted;
    }
  });
}

formatTimestamps();

new MutationObserver(() => {
  formatTimestamps();
}).observe(document.body, {
  childList: true,
  subtree: true
});
