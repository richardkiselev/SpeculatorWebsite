async function loadArticles() {
  const res = await fetch('/pages/articles/0index.json');
  const articles = await res.json();

  const grid = document.getElementById('article-grid');

  articles.forEach(article => {
    const card = document.createElement('a');
    card.className = 'article-card';

    card.href = `/pages/articles/view.html?file=${encodeURIComponent(article.file)}`;

    card.innerHTML = `
      <img class="article-image" src="${article.image}" alt="${article.title}">
      <div class="article-content">
        <h3>${article.title}</h3>
        <span class="article-date">${article.date}</span>
        <p class="article-desc">${article.description}</p>
      </div>
    `;

    grid.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', loadArticles);