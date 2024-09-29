

fetch("https://restcountries.com/v3.1/all")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        // console.log(data);
         data.forEach(country => {
             let countryCard = document.createElement("a")
                countryCard.classList.add("card", "shadow");
                countryCard.style.width = "20rem";
                countryCard.href = `/country.html?name=${country.name.common}`;
             let countries = document.querySelector(".countries");
             let cardHTML = `
                <img class="card-img-top" src="${country.flags.svg}" alt="Card image cap">
                <div class="card-body">
                    <h3 class="card-title">${country.name.common}</h5>
                    <p><b>Population:</b> ${country.population.toLocaleString()}</p>
                    <p><b>Region</b> ${country.region}</p>
                    <p><b>Capital:</b> ${country.capital}</p>
                </div>`;

            countryCard.innerHTML = cardHTML;
             countries.appendChild(countryCard);
             
             //  search bar
             let search = document.querySelector("#search");
                search.addEventListener("input", (e) => {
                    let searchValue = e.target.value.toLowerCase();
                    let countryName = country.name.common.toLowerCase();
                    if (countryName.includes(searchValue)) {
                        countryCard.style.display = "block";
                    } else {
                        countryCard.style.display = "none";
                    }
                })
        })
    });
