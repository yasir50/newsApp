let searchNews = () => {
  let input = document.getElementById("search");
  let cardDiv = document.getElementById("cardSelection");
  let query = input.value;
  cardDiv.innerHTML = "";
  if (query === "") {
    alert("Empty Field");
  }

  const api = `https://newsapi.org/v2/everything?q=${query}&from=2024-11-14&sortBy=publishedAt&apiKey=0497592c853d4a6baa73021d0320de69`;
  fetch(api)
    .then((res) => res.json())
    .then((results) => {
      console.log(results);
      results.articles.length === 0
        ? alert("Results not Found")
        : results.articles.map((e) => {
            cardDiv.innerHTML += `
          <div class="main">
          <div class="news-card">
          <img src="${e.urlToImage}" alt="News Image" />
          <div class="content">
          <h2>${e.title}</h2>
          <p>${e.description}</p> 
          <button onclick="window.location.href='${e.url}'">Read More</button>
          </div>
          </div>
          </div>
          `;
          });
    })
    .catch((e) => {
      console.log("Error:", e);
    });
};
