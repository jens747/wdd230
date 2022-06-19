const cards = document.querySelector(".cards");

const fetchJSON = async () => {
  try {
    const jsonURL = "json/data.json";
    const req = new Request(jsonURL);
    const res = await fetch(req);
    const jsonObject = await res.json();
    const businesses = jsonObject["businesses"];

    console.log(businesses);

    businesses.forEach(displayCards);
  } catch (error) {
    console.log(error);
  }
};

fetchJSON();

const displayCards = (cardObj) => {
  let card = document.createElement("section");
  let name = document.createElement("h2");
  let category = document.createElement("h3");
  let addr = document.createElement("p");
  let phone = document.createElement("p");
  let url = document.createElement("a");
  let member = document.createElement("p");
  let logo = document.createElement("img");

  logo.setAttribute("src", cardObj.logo);
  logo.setAttribute("alt", `Logo image for ${cardObj.name}.`);
  logo.setAttribute("loading", "lazy");

  name.textContent = `${cardObj.name}`;
  name.className = "dir-name";

  category.textContent = `${cardObj.category}`;
  category.className = "dir-category";

  url.textContent = `${cardObj.url}`;
  url.className = "dir-url";
  url.href = `${cardObj.url}`;
  url.target = "_blank";
  url.rel = "noopener noreferrer";

  addr.textContent = `${cardObj.address}`;
  addr.className = "dir-addr";

  phone.textContent = `Phone: ${cardObj.phone}`;
  phone.className = "dir-phone";

  member.textContent = `${cardObj.member} member`;
  member.className = `dir-member ${cardObj.member.toLowerCase()}`;

  card.appendChild(logo);
  card.appendChild(name);
  card.appendChild(category);
  card.appendChild(url);
  card.appendChild(addr);
  card.appendChild(phone);
  card.appendChild(member);

  document.querySelector(".dir-cards").appendChild(card);
};

const gridBtn = document.querySelector("#grid");
const listBtn = document.querySelector("#list");
const main = document.querySelector("main");

gridBtn.addEventListener("click", function () {
  main.classList.remove("directory-list");
});

listBtn.addEventListener("click", function () {
  main.classList.add("directory-list");
});
