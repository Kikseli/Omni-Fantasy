document.querySelectorAll(".user-link").forEach(link => {
  link.removeAttribute("title");
});

function formatTimestamp(timestamp) {
  const date = new Date(timestamp);

  return (
    `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} ` +
    `klo ${String(date.getHours()).padStart(2, "0")}:` +
    `${String(date.getMinutes()).padStart(2, "0")}`
  );
}

document.querySelectorAll("abbr.o-timestamp").forEach((el) => {
  const timestamp = Number(el.dataset.timestamp);

  if (!timestamp) {
    return;
  }

  el.textContent = formatTimestamp(timestamp);
});
