
const API_KEY = "0cdc608c-0bdc-494e-ae6c-bec3b627499b";

const months = [
  "JANUARY",
  "FEBRUARY",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUST",
  "SEPTEMBER",
  "OCTOBER",
  "NOVEMBER",
  "DECEMBER",
];
const month = new Date().getMonth();
const currMonth = months[month];
const currYear = new Date().getFullYear();

//todo Movie Premieres
const filmContenerPrem = document.querySelector(".container__films__premiere");
const liNavPrem = document.querySelector(".li-premieres");

const getPmiers = async () => {
  try {
    const response = await fetch(
      `https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=${currYear}&month=${currMonth}`,
      {
        method: "GET",
        headers: {
          "X-API-KEY": API_KEY,
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    console.log(data);

    filmContenerPrem.innerHTML +=
      '<p class="films__premieres-p">Премьеры Tекущего Mесяца</p>';
    data.items.forEach((elem) => {
      filmContenerPrem.innerHTML += `
      <div class="film__card">
      <div class="film__card-rating">7</div>
      <button class="film__cardd-add__favorite">
        <img
          src="https://cdn-icons-png.flaticon.com/128/2589/2589197.png"
          alt=""
          class="favorite__icon"
        />
      </button>
      <img
        src="${elem.posterUrl}" alt="${elem.nameRu}"
        class="film__card-img"
      />
      <p class="film__card-title">${elem.nameRu}</p>
      <p class="film__card-genres">${elem.genres
        .map((item, x) => ` ${item.genre}`)
        .filter((_, x) => x < 3)}</p>
    </div>`;
    });
  } catch (error) {
    console.error("Error:", error);
  }
};

liNavPrem.addEventListener("click", () => {
  liNavPrem.classList.toggle("nav__active");
  filmContenerPrem.classList.toggle("hidden");

  if (liNavPrem.classList.contains("nav__active")) {
    getPmiers();
  } else {
    filmContenerPrem.innerHTML = "";
    console.clear();
  }
});
//todo most Anticipated Movies

const api_closeRelised =
  "https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=CLOSES_RELEASES&page=1";

const filmContenerAnti = document.querySelector(".container__films__anti__top");

const getAnti = async () => {
  try {
    const response = await fetch(api_closeRelised, {
      method: "GET",
      headers: {
        "X-API-KEY": API_KEY,
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    console.log(data);

    filmContenerAnti.innerHTML +=
      '<p class="films__top-anti-p">Топ Oжидаемых Фильмов</p>';

    data.items.forEach((elem) => {
      filmContenerAnti.innerHTML += `<div class="film__card">
      <div class="film__card-rating">${Math.round(elem.ratingKinopoisk)}</div>
        <button class="film__cardd-add__favorite">
          <img
            src="https://cdn-icons-png.flaticon.com/128/2589/2589197.png"
            alt=""
            class="favorite__icon"
          />
        </button>
        <img
          src="${elem.posterUrl}" alt="${elem.nameRu}"
          class="film__card-img"
        />
        <p class="film__card-title">${elem.nameRu}</p>
        <p class="film__card-genres">${elem.genres
          .map((item, x) => ` ${item.genre}`)
          .filter((_, x) => x < 3)}</p>
      </div>`;
    });
  } catch (error) {
    console.error("Error:", error);
  }
};

const liNavAnti = document.querySelector(".li-anticipated");

liNavAnti.addEventListener("click", () => {
  liNavAnti.classList.toggle("nav__active");
  filmContenerAnti.classList.toggle("hidden");

  if (liNavAnti.classList.contains("nav__active")) {
    getAnti();
  } else {
    filmContenerAnti.innerHTML = "";
    console.clear();
  }
});

//todo get top movies

const filmContenerTop = document.querySelector(".container__films__top");
const liNavTop = document.querySelector(".li-top");

const getTop = async () => {
  try {
    const response = await fetch(
      "https://kinopoiskapiunofficial.tech/api/v2.2/films/collections",
      {
        method: "GET",
        headers: {
          "X-API-KEY": API_KEY,
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    console.log(data);

    filmContenerTop.innerHTML +=
      '<p class="films__top-p">Tоп Лучших Фильмов</p>';
    data.items.forEach((elem) => {
      filmContenerTop.innerHTML += `

      <div class="film__card">
      <div class="film__card-rating">${Math.round(elem.ratingKinopoisk)}</div>
      <button class="film__cardd-add__favorite">
        <img
          src="https://cdn-icons-png.flaticon.com/128/2589/2589197.png"
          alt=""
          class="favorite__icon"
        />
      </button>
      <img
        src="${elem.posterUrl}" alt="${elem.nameRu}"
        class="film__card-img"
      />
      <p class="film__card-title">${elem.nameRu}</p>
      <p class="film__card-genres">${elem.genres
        .map((item, x) => ` ${item.genre}`)
        .filter((_, x) => x < 3)}</p>
    </div>`;
    });
  } catch (error) {
    console.error("Error:", error);
  }
};

liNavTop.addEventListener("click", () => {
  liNavTop.classList.toggle("nav__active");
  filmContenerTop.classList.toggle("hidden");

  if (liNavTop.classList.contains("nav__active")) {
    getTop();
  } else {
    filmContenerTop.innerHTML = "";
    console.clear();
  }
});

//todo new releases moves

const filmContenerReleases = document.querySelector(
  ".container__films__new__relised"
);

const getReleases = async () => {
  try {
    const response = await fetch(
      `https://kinopoiskapiunofficial.tech/api/v2.1/films/releases?year=${currYear}&month=${currMonth}`,
      {
        method: "GET",
        headers: {
          "X-API-KEY": API_KEY,
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    console.log(data);

    filmContenerReleases.innerHTML +=
      '<p class="films__releases-p">Цифровые Релизы Текущего Месяца</p>';

    data.releases.forEach((elem) => {
      filmContenerReleases.innerHTML += `<div class="film__card">
      <div class="film__card-rating">${Math.round(elem.rating)}</div>
      <button class="film__cardd-add__favorite">
        <img
          src="https://cdn-icons-png.flaticon.com/128/2589/2589197.png"
          alt=""
          class="favorite__icon"
        />
      </button>
      <img
        src="${elem.posterUrl}" alt="${elem.nameRu}"
        class="film__card-img"
      />
      <p class="film__card-title">${elem.nameRu}</p>
      <p class="film__card-genres">${elem.genres
        .map((item, x) => ` ${item.genre}`)
        .filter((_, x) => x < 3)}</p>
    </div>`;
    });
  } catch (error) {
    console.error("Error:", error);
  }
};

const liNavReleas = document.querySelector(".li-releases");

liNavReleas.addEventListener("click", () => {
  liNavReleas.classList.toggle("nav__active");
  filmContenerReleases.classList.toggle("hidden");

  if (liNavReleas.classList.contains("nav__active")) {
    getReleases();
  } else {
    filmContenerReleases.innerHTML = "";
    console.clear();
  }
});

//todo add favorite
const liNavFavor = document.querySelector(".li-favorite");
const filmContenerFavor = document.querySelector(".container__films__favorite");
liNavFavor.addEventListener("click", () => {
  liNavFavor.classList.toggle("nav__active");
  filmContenerFavor.classList.toggle("hidden");

  if (liNavFavor.classList.contains("nav__active")) {
    filmContenerFavor.innerHTML = `<p class="films__favorites-p">избранные</p>`;
  }
});

document.addEventListener("click", (e) => {
  const targetButton = e.target.closest(".film__cardd-add__favorite");

  if (targetButton) {
    const filmCard = targetButton.closest(".film__card");

    if (filmCard) {
      const favoriteIcon = targetButton.querySelector(".favorite__icon");

      if (
        favoriteIcon.src ===
        "https://cdn-icons-png.flaticon.com/128/2589/2589197.png"
      ) {
        favoriteIcon.src =
          "https://cdn-icons-png.flaticon.com/128/5011/5011077.png";

        filmContenerFavor.appendChild(filmCard.cloneNode(true));
        const item = filmCard.cloneNode(true);
        localStorage.setItem("favItem", item);
        console.log(favItem);
      } else {
        favoriteIcon.src =
          "https://cdn-icons-png.flaticon.com/128/2589/2589197.png";

        filmContenerFavor.removeChild(filmCard);
      }
    }
  }
});

//todo search

const searchInp = document.querySelector(".nav__input");
const searchResultsContainer = document.querySelector(
  ".container__search__results"
);

searchInp.addEventListener("input", async () => {
  const KEYWORD = searchInp.value.trim();
  const API_URL_KEYWORD = `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${KEYWORD}&page=1`;

  try {
    const response = await fetch(API_URL_KEYWORD, {
      method: "GET",
      headers: {
        "X-API-KEY": API_KEY,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(response.status);
    }

    const data = await response.json();

    searchResultsContainer.innerHTML = "";

    data.films.forEach((elem) => {
      const filmCard = document.createElement("div");
      filmCard.classList.add("film__card");

      filmCard.innerHTML = `
        <div class="film__card-rating">7</div>
        <button class="film__cardd-add__favorite">
          <img src="https://cdn-icons-png.flaticon.com/128/2589/2589197.png" alt="" class="favorite__icon" />
        </button>
        <img src="${elem.posterUrl}" alt="${
        elem.nameRu
      }" class="film__card-img" />
        <p class="film__card-title">${elem.nameRu}</p>
        <p class="film__card-genres">${elem.genres
          .map((item) => ` ${item.genre}`)
          .filter((_, x) => x < 3)}</p>
      `;

      searchResultsContainer.appendChild(filmCard);
    });
  } catch (error) {
    console.error("Error:", error);
  }
});
