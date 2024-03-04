const searchInput = document.getElementsByClassName("search-input")[0];
const searchResultsContainer = document.querySelector("#searchResults");
const section = document.getElementsByTagName("section")[0];
const main = document.getElementsByTagName("main")[0];
const searchBtn = document.getElementsByClassName("search-icon")[0];
let debounceTimer;

searchBtn.addEventListener("click", function () {
  clearTimeout(debounceTimer);

  // Set a new debounce timer
  debounceTimer = setTimeout(() => {
    const searchTerm = searchInput.value.trim().toLowerCase();

    const xhr = new XMLHttpRequest();

    xhr.open("GET", "product.json", true);
    console.log(xhr);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);

        // Filter products based on the search term
        const searchResults = data.filter(
          (product) =>
            product.title.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.brand.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm)
        );

        renderSearchResults(searchResults);
      }
    };

    xhr.send();
  });
});

function renderSearchResults(searchResults) {
  console.log(searchResultsContainer);
  section.style.display = "none";
  main.style.display = "none";
  searchResultsContainer.style.display = "flex";
  searchResultsContainer.innerHTML = "";

  if (searchResults.length === 0) {
    searchResultsContainer.innerHTML = "<p>No results found.</p>";
  } else {
    searchResults.forEach((result) => {
      const resultCard = createResultCard(result);
      searchResultsContainer.appendChild(resultCard);
    });
  }
}

function createResultCard(result) {
  const card = document.createElement("div");
  card.classList.add("resultCard");
  card.innerHTML = `
  <div id=${result.id}>
                <h2>${result.title}</h2>
                <div class="product-data">
                    <div class="product-img">                                                                
                        <img
                            src=${result.images} />
                    </div>
                    <p class="product-description">
                        ${result.description}
                    </p>
                    <p class="product-rating"><span>Rating: </span>${
                      result.rating
                    }</p>
                    <span class="product-price"><span>Price: </span>$${result.price.toFixed(
                      2
                    )}</span>
                </div>
                <button class="add-btn">Add To Cart</button>
            </div>
      
    `;
  return card;
}
