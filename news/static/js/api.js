// fetches top 28 articles most popular this month from the dev.to api and displays them on the page
const popularThisMonth = () => {
  const articlesContainer = document.getElementById('articlesContainer');

  // clears the articles container
  articlesContainer.innerHTML = '';
  // can adjust per_page value to get more or less articles
  // can adjust tags to get articles for different topics
  fetch('https://dev.to/api/articles?per_page=28&tags=css, ui, software, python, java, javascript, html, django, development, node, databases, developer tools, mobile, design, ai, productivity, webdev, programming&top=30')
    .then(response => response.json())
    .then(data => {
      // created a card for each article, appended it to the articles container, and added the article data to the card
      data.forEach(article => {
        const card = document.createElement('div');
        card.classList.add('col', 'mb-4');
        card.innerHTML = `
        <div class="card" style="width: 18rem">
        <a href="${article.url}" class="article-link" target="_blank">
          <img
            src="${article.social_image}"
            class="card-img-top"
            alt="${article.title}"
          />
        </a>
        <div class="card-body">
          <a href="${article.url}" class="article-link" target="_blank">
            <h5 class="card-title">${article.title}</h5>
          </a>
          <br />
          <p class="card-text">
            ${article.readable_publish_date} | ${article.reading_time_minutes}
            minute reading time
          </p>
  
          <div class="bottom-info">
            <div class="row">
              <div class="col-4 d-flex align-items-center justify-content-center">
                <a
                  href="${article.url}"
                  class="like-link article-link"
                  target="_blank"
                >
                  <i class="bi bi-suit-heart bi-suit-heart-fill"></i>
                  <span class="like-count"
                    >${article.positive_reactions_count}</span
                  >
                </a>
              </div>
              <div class="col-4 d-flex align-items-center justify-content-center">
                <a
                  href="${article.url}#comments"
                  class="comment-link article-link"
                  target="_blank"
                >
                  <i class="bi bi-chat-dots"></i>
                  <span class="comment-count">${article.comments_count}</span>
                </a>
              </div>
              <div class="col-4 d-flex align-items-center justify-content-center">
                <a
                  href="${article.user.website_url}"
                  class="article-link"
                  target="_blank"
                >
                  <img
                    src="${article.user.profile_image}"
                    class="rounded-circle"
                    width="30"
                    height="30"
                    alt="${article.user.name}"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      `;
        articlesContainer.appendChild(card);
      });
    })
    .catch(error => {
      console.error('Error fetching articles:', error);
    });
}

// runs on page load since it is the default option
popularThisMonth();

// fetches top 28 most popular articles today from the dev.to api and displays them on the page
const popularToday = () => {
  const articlesContainer = document.getElementById('articlesContainer');

  // clear the articles container
  articlesContainer.innerHTML = '';

  // can adjust per_page value to get more or less articles
  // can adjust tags to get articles for different topics
  fetch('https://dev.to/api/articles?per_page=28&tags=css, ui, software, python, java, javascript, html, django, development, node, databases, developer tools, mobile, design, ai, productivity, webdev, programming')
    .then(response => response.json())
    .then(data => {
      data.forEach(article => {
        const card = document.createElement('div');
        card.classList.add('col', 'mb-4');
        card.innerHTML = `
        <div class="card" style="width: 18rem">
        <a href="${article.url}" class="article-link" target="_blank">
          <img
            src="${article.social_image}"
            class="card-img-top"
            alt="${article.title}"
          />
        </a>
        <div class="card-body">
          <a href="${article.url}" class="article-link" target="_blank">
            <h5 class="card-title">${article.title}</h5>
          </a>
          <br />
          <p class="card-text">
            ${article.readable_publish_date} | ${article.reading_time_minutes}
            minute reading time
          </p>
  
          <div class="bottom-info">
            <div class="row">
              <div class="col-4 d-flex align-items-center justify-content-center">
                <a
                  href="${article.url}"
                  class="like-link article-link"
                  target="_blank"
                >
                  <i class="bi bi-suit-heart bi-suit-heart-fill"></i>
                  <span class="like-count"
                    >${article.positive_reactions_count}</span
                  >
                </a>
              </div>
              <div class="col-4 d-flex align-items-center justify-content-center">
                <a
                  href="${article.url}#comments"
                  class="comment-link article-link"
                  target="_blank"
                >
                  <i class="bi bi-chat-dots"></i>
                  <span class="comment-count">${article.comments_count}</span>
                </a>
              </div>
              <div class="col-4 d-flex align-items-center justify-content-center">
                <a
                  href="${article.user.website_url}"
                  class="article-link"
                  target="_blank"
                >
                  <img
                    src="${article.user.profile_image}"
                    class="rounded-circle"
                    width="30"
                    height="30"
                    alt="${article.user.name}"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      `;
        articlesContainer.appendChild(card);
      });
    })
    .catch(error => {
      console.error('Error fetching articles:', error);
    });
}


// fetches top 28 articles most popular all time from the dev.to api and displays them on the page
const popularAllTime = () => {
  const articlesContainer = document.getElementById('articlesContainer');

  articlesContainer.innerHTML = '';
  // can adjust per_page value to get more or less articles
  // can adjust tags to get articles for different topics
  fetch('https://dev.to/api/articles?per_page=28&tags=css, ui, software, python, java, javascript, html, django, development, node, databases, developer tools, mobile, design, ai, productivity, webdev, programming&top=1000000')
    .then(response => response.json())
    .then(data => {
      data.forEach(article => {
        const card = document.createElement('div');
        card.classList.add('col', 'mb-4');
        card.innerHTML = `
        <div class="card" style="width: 18rem">
        <a href="${article.url}" class="article-link" target="_blank">
          <img
            src="${article.social_image}"
            class="card-img-top"
            alt="${article.title}"
          />
        </a>
        <div class="card-body">
          <a href="${article.url}" class="article-link" target="_blank">
            <h5 class="card-title">${article.title}</h5>
          </a>
          <br />
          <p class="card-text">
            ${article.readable_publish_date} | ${article.reading_time_minutes}
            minute reading time
          </p>
  
          <div class="bottom-info">
            <div class="row">
              <div class="col-4 d-flex align-items-center justify-content-center">
                <a
                  href="${article.url}"
                  class="like-link article-link"
                  target="_blank"
                >
                  <i class="bi bi-suit-heart bi-suit-heart-fill"></i>
                  <span class="like-count"
                    >${article.positive_reactions_count}</span
                  >
                </a>
              </div>
              <div class="col-4 d-flex align-items-center justify-content-center">
                <a
                  href="${article.url}#comments"
                  class="comment-link article-link"
                  target="_blank"
                >
                  <i class="bi bi-chat-dots"></i>
                  <span class="comment-count">${article.comments_count}</span>
                </a>
              </div>
              <div class="col-4 d-flex align-items-center justify-content-center">
                <a
                  href="${article.user.website_url}"
                  class="article-link"
                  target="_blank"
                >
                  <img
                    src="${article.user.profile_image}"
                    class="rounded-circle"
                    width="30"
                    height="30"
                    alt="${article.user.name}"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      `;

        articlesContainer.appendChild(card);
      });
    })
    .catch(error => {
      console.error('Error fetching articles:', error);
    });
}

// handles the calling of the appropriate function based on the selected option
const selectOption = () => {
  let selectedValue = document.querySelector('select').value;
  if (selectedValue === 'today') {
    popularToday()
  } else if (selectedValue === 'thisMonth') {
    popularThisMonth();
  }
  else if (selectedValue === 'allTime') {
    popularAllTime()
  }
}

// handles the dark-mode class toggling and the icon change when the dark mode button is clicked
document.addEventListener('DOMContentLoaded', () => {
  const darkModeButton = document.querySelector('.darkModeButton');
  const body = document.body;

  darkModeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    // switches the between the moon icon and sun icon when clicked
    if (body.classList.contains('dark-mode')) {
      darkModeButton.innerHTML = '<i class="bi bi-sun-fill"></i>';
    } else {
      darkModeButton.innerHTML = '<i class="bi bi-moon-fill"></i>';
    }
  });
});


/* references: 
https://developers.forem.com/api/v0
My own work from Level 2 task 18 
*/