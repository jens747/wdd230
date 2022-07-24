const templeDiv = document.querySelector(".temple-div");
const templeCard = document.querySelectorAll(".temple-card");
const templeCardDiv = document.querySelectorAll(".temple-card-div");

let addTempleCard = {
  largeTempleCard: async () => {
    try {
      const url = "json/temples.json";
      const req = new Request(url);
      const res = await fetch(req);
      const templeObj = await res.json();
      const templeData = templeObj["temples"];

      Object.values(templeData).forEach((temple, idx) => {
        const {
          name,
          address,
          email,
          phone,
          imgmain,
          closures,
          history,
          imgalternate,
          ordinances,
          services,
          url,
        } = temple;

        let listClosures = `
          <strong>2022</strong><br> ${closures["2022"].join("<br>")}<br><br>
        `;

        if (closures["2023"]) {
          listClosures += `
            <strong>2023</strong><br> ${closures["2023"].join("<br>")}<br>
          `;
        }

        let listHistory = `
          <strong>Announced</strong><br> ${history["Announced"]}<br>
          <br><strong>Groundbreaking</strong><br> ${history["Groundbreaking"]}<br>
          <br><strong>Dedicated</strong><br> ${history["Dedicated"]["date"]}, <a href="${history["Dedicated"]["prayer"]}">prayer</a><br>
        `;

        if (history["Rededicated"].length) {
          i = 0;
          listHistory += `<br><strong>Rededicated</strong><br> `;
          while (history["Rededicated"][i]) {
            listHistory += `${history["Rededicated"][i]["date"]}, <a href="${history["Rededicated"][i]["prayer"]}">prayer</a><br>`;
            i++;
          }
        }

        let listOrdinances = `
          <strong>Proxy Baptisms</strong><br> ${ordinances["Proxy Baptism"]}<br>
          <br><strong>Proxy Endowments</strong><br> ${ordinances["Proxy Endowment"]}<br>
          <br><strong>Proxy Initiatories</strong><br> ${ordinances["Proxy Initiatory"]}<br>
          <br><strong>Proxy Sealings</strong><br> ${ordinances["Proxy Sealing"]}<br>
        `;
        let listServices = services.join("<br>");

        // let secElement = document.createElement("section");
        // secElement.classList.add("temple-card");

        // let element = document.createElement("button");
        // element.innerText = "Like";
        // element.classList.add("like-temple");

        // templeDiv.appendChild(secElement);
        // secElement.appendChild(element);

        // element.addEventListener("click", () => {
        //   // if (window.localStorage.getItem("like") == "true") {
        //   //   window.localStorage.setItem("like", "false");
        //   // } else {
        //   //   window.localStorage.setItem("like", "true");
        //   // }
        //   console.log("click");
        //   window.localStorage.setItem("like", "true");
        //   element.classList.toggle("unlike-temple");
        // });

        templeCardDiv[idx].innerHTML += `
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
              <h4 class="temple-card-info">Services</h4>
              <p class="temple-card-info">${listServices}</p>
              <h4 class="temple-card-info">Ordinances</h4>
              <p class="temple-card-info">${listOrdinances}</p>
              <h4 class="temple-card-info">Closures</h4>
              <p class="temple-card-info">${listClosures}</p>
            <picture>
              <img src="${imgalternate}" alt="Second image of ${name}"/>
            </picture>
            <h4 class="temple-card-info">History</h4>
            <p class="temple-card-info"">${listHistory}</p>
            <h4 class="temple-card-info">Website</h4>
            <a class="temple-card-info" href="${url}">${name}</a>
        `;
      });
    } catch (error) {
      console.log(error);
    }
  },
};

addTempleCard.largeTempleCard();
