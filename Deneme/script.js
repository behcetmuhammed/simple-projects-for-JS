function displayCountry(country) {
  const request = new XMLHttpRequest();

  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    const data = JSON.parse(this.responseText);

    setCountry(data);
    console.log(data); //
    const countries = data[0].borders ? data[0].borders.toString() : "";

    const req = new XMLHttpRequest();
    req.open("GET", `https://restcountries.com/v3.1/alpha?codes=${countries}`);
    req.send();

    req.addEventListener("load", function () {
      const borderData = JSON.parse(this.responseText);
      console.log(borderData); //
      setCountry(borderData);
    });
  });
}

function setCountry(data) {
  for (let country of data) {
    const html = `
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${
                  country.flags.png
                }" alt="Card image cap">
                <div class="card-body">
                      <h5 class="card-title">${country.name.common}</h5>
                      <div class = "card-body">
                            <ul>
                                <li> Population: ${(
                                  country.population / 1000000
                                ).toFixed(1)}</li>
                                <li> Capital: ${country.capital}</li>
                            </ul>
                       </div>
                      <a href="${
                        country.maps.googleMaps
                      }" class="btn btn-primary">Map</a>
                </div>
            </div>`;

    document
      .querySelector(".container .row")
      .insertAdjacentHTML("beforeend", html);
  }
}

displayCountry("Turkey");
