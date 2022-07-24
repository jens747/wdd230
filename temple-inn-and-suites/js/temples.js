const templeDiv = document.querySelector(".temple-div");

let templeCard = {
  fetchTemples: async function () {
    try {
      const url = "json/temples.json";
      const req = new Request(url);
      const res = await fetch(req);
      const templeObj = await res.json();
      const temples = templeObj["temples"];

      // console.log(temples);
      Object.values(temples).forEach((temple) => {
        const { name, address, email, phone, imgmain } = temple;

        templeDiv.innerHTML += `
          <section class="temple-card">
            <picture>
              <img src="${imgmain}" alt="Image of ${name}"/>
            </picture>
              <h3>${name}</h3>
              <h4 class="temple-card-info">Address</h4>
              <p class="temple-card-info">${address}</p>
              <h4 class="temple-card-info">Email</h4>
              <p class="temple-card-info">${email}</p>
              <h4 class="temple-card-info">Phone</h4>
              <p class="temple-card-info">${phone}</p>
          </section>
        `;
      });
    } catch (err) {
      console.log(err);
    }
  },
};

const templeData = templeCard.fetchTemples();
