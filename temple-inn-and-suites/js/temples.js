const templeDiv = document.querySelector(".temple-div");

let templeCard = {
  fetchTemples: async function () {
    try {
      const url = "json/temples.json";
      const req = new Request(url);
      const res = await fetch(req);
      const templeObj = await res.json();
      const temples = templeObj["temples"];

      console.log(temples);
      Object.values(temples).forEach((temple) => {
        const { name, address, email, phone, imgmain } = temple;

        templeDiv.innerHTML += `
          <div class="temple-card">
            <picture>
              <img src="${imgmain}" alt="Image of ${name}"/>
            </picture>
              <p>${name}</p>
              <p>address: ${address}</p>
              <p>email: ${email}</p>
              <p>phone: ${phone}</p>
          </div>
        `;
      });
    } catch (err) {
      console.log(err);
    }
  },
};

templeCard.fetchTemples();
