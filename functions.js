document.querySelectorAll("abbr.o-timestamp").forEach((el) => {
  const timestamp = Number(el.dataset.timestamp);

  if (!timestamp) {
    return;
  }

  const date = new Date(timestamp);

  const text =
    `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} ` +
    `klo ${String(date.getHours()).padStart(2, "0")}:` +
    `${String(date.getMinutes()).padStart(2, "0")}`;

  el.textContent = text;
});