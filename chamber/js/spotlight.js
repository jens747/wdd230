const spotlight = document.querySelectorAll(".spotlight");

const fetchJSON = async () => {
  try {
    const jsonURL = "json/data.json";
    const req = new Request(jsonURL);
    const res = await fetch(req);
    const jsonObject = await res.json();
    const businesses = jsonObject["businesses"];

    let spotbiz = shuffleAr(businesses);

    addSpotlight(spotbiz);
  } catch (error) {
    console.log(error);
  }
};

fetchJSON();

// Source: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
const shuffleAr = (bizAr) => {
  return bizAr
    .map((element) => ({
      element,
      sort: Math.random(),
    }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ element }) => element)

    .filter((Ar) => Ar.member == "Gold" || Ar.member == "Silver");
};

const addSpotlight = (cardObj) => {
  spotlight.forEach((element, idx) => {
    element.innerHTML = `
      <h3>${cardObj[idx].name}</h3>
      <img class="textImg" src="${cardObj[idx].logo}" alt="Logo image for ${cardObj[idx].name}."></img>
      <p>${cardObj[idx].category}</p>
      <hr />
      <address>
        <a href="${cardObj[idx].url}">${cardObj[idx].url}</a>
        <p>
          Phone: 1 ${cardObj[idx].phone}
        </p>
      </address>
    `;
  });
};
