window.onscroll = function() {
  const nav = document.querySelector("#navigation-menu");

  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
};

const newsSource = document.querySelector("#news-source");
const newsBox = document.querySelector("#news-box");

function cleanSummary(text) {
  text = text
    .replace(/\s+/g, " ")
    .trim();

  const lastSpace = text.lastIndexOf(" ");

  if (lastSpace > 0) {
    text = text.substring(0, lastSpace);
  }

  return text + " ...";
}

newsSource.onload = function() {
  const doc = newsSource.contentDocument;
  const selector = ".item.thread";

  const timer = setInterval(() => {
    const threads = doc.querySelectorAll(selector);

    if (threads.length) {
      newsBox.innerHTML = "";

      [...threads].slice(0, 3).forEach(thread => {
        const copy = thread.cloneNode(true);
        copy.classList.add("news-thread");

        const latestCell = copy.querySelector("td.latest");

        if (latestCell) {
          latestCell.childNodes.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE) {
              node.textContent = node.textContent.replace("by ", "- ");
            }
          });
        }

        const mainCell = copy.querySelector("td.main");

        if (mainCell) {
          const summary = mainCell.getAttribute("title");
          mainCell.removeAttribute("title");

          if (summary) {
            const preview = document.createElement("div");
            preview.className = "news-preview";
            preview.textContent = cleanSummary(summary);

            mainCell.appendChild(preview);
          }
        }

        newsBox.appendChild(copy);
      });

      document.querySelector("#read-more").style.display = "block";

      clearInterval(timer);
    }
  }, 200);
};