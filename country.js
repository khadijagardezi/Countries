let name = new URLSearchParams(
    window.location.search
).get("name");
  
fetch(
  `https://restcountries.com/v3.1/name/${name}`
)
  .then((response) => {
    return response.json();
  })
  .then(([country]) => {
    // console.log(country);
    let cardHTML = `<div class="row justify-content-center my-5">
      <div class="col-md-6 mx-5">
        <div class="product-shot text-center">
          <img src="${country.flags?.svg}" alt="${country.name?.common}" class="img-fluid shadow rounded">
        </div>
      </div>
      <div class="col-md-5 my-5">
        <div class="product-info">
          <h2 class="pb-3 border-bottom">${country.name?.common}</h2>
          <p><b>Native Name:</b> ${Object.values(country.name.nativeName)[0].common}</p>
          <p><b>Population:</b> ${country.population?.toLocaleString()}</p>
          <p><b>Region:</b> ${country.region}</p>
          <p><b>Capital:</b> ${country.capital[0]}</p>
          <p><b>Top Level Domain:</b> ${country.tld[0]}</p>
          <p><b>Currencies:</b> ${Object.values(country.currencies)[0].symbol}</p>
          <p><b>Languages:</b> ${Object.values(country.languages).join(" / ")
          }</p>
        </div>
      </div>
    </div>`;

      let countryCard = document.createElement("div");
            countryCard.innerHTML = cardHTML;
    // console.log(countryCard);
    let container = document.querySelector(".container");
    container.appendChild(countryCard);
  })
  .catch((error) => {
    console.error("Error fetching country data:", error);
  });
