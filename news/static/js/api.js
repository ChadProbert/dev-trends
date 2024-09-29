// Fetches top 28 articles most popular this month from the dev.to API and displays them on the page
const popularThisMonth = async () => {
  const articlesContainer = document.getElementById("articlesContainer");

  // Clears the articles container
  articlesContainer.innerHTML = "";

  try {
    // You can adjust the 'per_page' param value to get more or less articles
    // You can adjust the 'tags' param value to get articles for different topics
    const response = await fetch(
      "https://dev.to/api/articles?per_page=28&tags=css,ui,software,python,java,javascript,html,django,development,node,databases,developer tools,mobile,design,ai,productivity,webdev,programming&top=30"
    );
    const data = await response.json();

    for (const article of data) {
      const card = document.createElement("div");
      card.classList.add("col", "mb-4");

      // Check if accessing article.social_image returns a valid image
      let apiImage = article.social_image;
      let validImage = placeholderImage; // Default to placeholder

      try {
        const res = await fetch(apiImage);
        if (res.ok) validImage = apiImage; // Use the actual image returned from API if accessible
      } catch {
        // Fallback to placeholder image that was set in line 86 of index.html
      }

      card.innerHTML = `
        <div class="card" style="width: 18rem">
          <a href="${article.url}" class="article-link" target="_blank">
            <img src="${validImage}" height="150" class="card-img-top" alt="${article.title}" loading="lazy" />
          </a>
          <div class="card-body">
            <a href="${article.url}" class="article-link" target="_blank">
              <h5 class="card-title">${article.title}</h5>
            </a>
            <p class="card-text">
              ${article.readable_publish_date} | ${article.reading_time_minutes} minute reading time
            </p>
            <div class="bottom-info row">
              <div class="col-6 d-flex align-items-center justify-content-center">
                <a href="${article.url}" class="like-link article-link" target="_blank">
                  <i class="bi bi-suit-heart bi-suit-heart-fill"></i>
                  <span class="like-count">${article.positive_reactions_count}</span>
                </a>
              </div>
              <div class="col-6 d-flex align-items-center justify-content-center">
                <a href="${article.url}#comments" class="comment-link article-link" target="_blank">
                  <i class="bi bi-chat-dots"></i>
                  <span class="comment-count">${article.comments_count}</span>
                </a>
              </div>
            </div>
          </div>
        </div>`;
      articlesContainer.appendChild(card);
    }
  } catch (error) {
    console.error("Error fetching articles:", error);
  }
};

popularThisMonth();

// Fetches top 28 most popular articles today from the dev.to API and displays them on the page
const popularToday = async () => {
  const articlesContainer = document.getElementById("articlesContainer");

  // Clear the articles container
  articlesContainer.innerHTML = "";

  try {
    const response = await fetch(
      "https://dev.to/api/articles?per_page=28&tags=css,ui,software,python,java,javascript,html,django,development,node,databases,developer tools,mobile,design,ai,productivity,webdev,programming"
    );
    const data = await response.json();

    for (const article of data) {
      const card = document.createElement("div");
      card.classList.add("col", "mb-4");

      let apiImage = article.social_image;
      let validImage = placeholderImage; // Default to placeholder

      try {
        const res = await fetch(apiImage);
        if (res.ok) validImage = apiImage;
      } catch (error) {
       console.log("Error fetching image:", error);
      }

      card.innerHTML = `
        <div class="card" style="width: 18rem">
          <a href="${article.url}" class="article-link" target="_blank">
            <img src="${validImage}" height="150" class="card-img-top" alt="${article.title}" loading="lazy" />
          </a>
          <div class="card-body">
            <a href="${article.url}" class="article-link" target="_blank">
              <h5 class="card-title">${article.title}</h5>
            </a>
            <p class="card-text">
              ${article.readable_publish_date} | ${article.reading_time_minutes} minute reading time
            </p>
            <div class="bottom-info row">
              <div class="col-6 d-flex align-items-center justify-content-center">
                <a href="${article.url}" class="like-link article-link" target="_blank">
                  <i class="bi bi-suit-heart bi-suit-heart-fill"></i>
                  <span class="like-count">${article.positive_reactions_count}</span>
                </a>
              </div>
              <div class="col-6 d-flex align-items-center justify-content-center">
                <a href="${article.url}#comments" class="comment-link article-link" target="_blank">
                  <i class="bi bi-chat-dots"></i>
                  <span class="comment-count">${article.comments_count}</span>
                </a>
              </div>
            </div>
          </div>
        </div>`;
      articlesContainer.appendChild(card);
    }
  } catch (error) {
    console.error("Error fetching articles:", error);
  }
};


// Fetches top 28 most popular articles of all time from the dev.to API and displays them on the page
const popularAllTime = async () => {
  const articlesContainer = document.getElementById("articlesContainer");

  // Clears the articles container
  articlesContainer.innerHTML = "";

  try {
    const response = await fetch(
      "https://dev.to/api/articles?per_page=28&tags=css,ui,software,python,java,javascript,html,django,development,node,databases,developer tools,mobile,design,ai,productivity,webdev,programming&top=100000"
    );
    const data = await response.json();

    for (const article of data) {
      const card = document.createElement("div");
      card.classList.add("col", "mb-4");

      let apiImage = article.social_image;
      let validImage = placeholderImage; // Default to placeholder

      try {
        const res = await fetch(apiImage);
        if (res.ok) validImage = apiImage;
      } catch {
        // Fallback to placeholder image that was set in line 86 of index.html
      }

      card.innerHTML = `
        <div class="card" style="width: 18rem">
          <a href="${article.url}" class="article-link" target="_blank">
            <img src="${validImage}" height="150" class="card-img-top" alt="${article.title}" loading="lazy" />
          </a>
          <div class="card-body">
            <a href="${article.url}" class="article-link" target="_blank">
              <h5 class="card-title">${article.title}</h5>
            </a>
            <p class="card-text">
              ${article.readable_publish_date} | ${article.reading_time_minutes} minute reading time
            </p>
            <div class="bottom-info row">
              <div class="col-6 d-flex align-items-center justify-content-center">
                <a href="${article.url}" class="like-link article-link" target="_blank">
                  <i class="bi bi-suit-heart bi-suit-heart-fill"></i>
                  <span class="like-count">${article.positive_reactions_count}</span>
                </a>
              </div>
              <div class="col-6 d-flex align-items-center justify-content-center">
                <a href="${article.url}#comments" class="comment-link article-link" target="_blank">
                  <i class="bi bi-chat-dots"></i>
                  <span class="comment-count">${article.comments_count}</span>
                </a>
              </div>
            </div>
          </div>
        </div>`;
      articlesContainer.appendChild(card);
    }
  } catch (error) {
    console.error("Error fetching articles:", error);
  }
};

// Changes the articles displayed based on user selection
const selectOption = () => {
  const selectBox = document.querySelector("select");
  const selectedValue = selectBox.options[selectBox.selectedIndex].value;

  switch (selectedValue) {
    case "thisMonth":
      popularThisMonth();
      break;
    case "today":
      popularToday();
      break;
    case "allTime":
      popularAllTime();
      break;
    default:
      popularThisMonth();
  }
};

// Handles the dark-mode class toggling and the icon change when the dark mode button is clicked
document.addEventListener("DOMContentLoaded", () => {
  const darkModeButton = document.querySelector(".darkModeButton");
  const body = document.body;

  darkModeButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    // Switches the between the moon icon and sun icon when clicked
    darkModeButton.innerHTML = body.classList.contains("dark-mode")
      ? '<i class="bi bi-sun-fill"></i>'
      : '<i class="bi bi-moon-fill"></i>';
  });
});

/* References:
https://developers.forem.com/api/v0
My own work from Level 2 task 18
*/