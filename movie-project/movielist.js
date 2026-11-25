const movieList = document.getElementById("container");
const favouriteMovies = [
  {
    no: 1,
    title: "Pirates of the Caribbean",
    imgUrl: "https://image.tmdb.org/t/p/w500/z8onk7LV9Mmw6zKz4hT6pzzvmvl.jpg",
    rating: 8.1,
    year: "(2003)",
    director: "Gor Verbinski",
  },
  {
    no: 2,
    title: "The Odysey",
    imgUrl:
      "https://media.themoviedb.org/t/p/w600_and_h900_face/5rhTDKUhPYvpdQIijFIs5VoWsON.jpg",
    rating: 8.4,
    year: "(2026)",
    director: "Christopher Nolan",
  },
  {
    no: 3,
    title: "Lucy",
    imgUrl: "https://image.tmdb.org/t/p/w500/d0PibPzCK4fVikjoD1PqHovbvkt.jpg",
    rating: 6.4,
    year: 2014,
    director: "Luc Besson",
  },
  {
    no: 4,
    title: "Spider-Man 3",
    imgUrl: "https://image.tmdb.org/t/p/w500/qFmwhVUoUSXjkKRmca5yGDEXBIj.jpg",
    rating: 6.3,
    year: 2007,
    director: "Sam Raimi",
  },
  {
    no: 5,
    title: "Interstellar",
    imgUrl: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    rating: 8.4,
    year: 2014,
    director: "Christopher Nolan",
  },
  {
    no: 6,
    title: "Inception",
    imgUrl: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    rating: 8.8,
    year: 2010,
    director: "Christopher Nolan",
  },
  {
    no: 7,
    title: "Ford v Ferrari",
    imgUrl: "https://image.tmdb.org/t/p/w500/6ApDtO7xaWAfPqfi2IARXIzj8QS.jpg",
    rating: 8.1,
    year: 2019,
    director: "James Mangold",
  },
  {
    no: 8,
    title: "Avengers: Age of Ultron",
    imgUrl: "https://image.tmdb.org/t/p/w500/4ssDuvEDkSArWEdyBl2X5EHvYKU.jpg",
    rating: 7.3,
    year: 2015,
    director: "Joss Whedon",
  },
  {
    no: 9,
    title: "Léon: The Professional",
    imgUrl: "https://image.tmdb.org/t/p/w500/yI6X2cCM5YPJtxMhUd3dPGqDAhw.jpg",
    rating: 8.5,
    year: 1994,
    director: "Luc Besson",
  },
  {
    no: 10,
    title: "The Dark Knight",
    imgUrl: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    rating: 9.0,
    year: 2008,
    director: "Christopher Nolan",
  },
];

favouriteMovies.map((movies) => {
  const box = document.createElement("div");
  const img = document.createElement("img");
  img.src = movies.imgUrl;
  const title = document.createElement("h3");
  title.textContent = movies.title;
  const rating = document.createElement("p");
  rating.textContent = `⭐ ${movies.rating}/10 IMDb`;
  const director = document.createElement("p");
  director.textContent = `Director: ${movies.director}`;
  const year = document.createElement("p");
  year.textContent = `Release year: ${movies.year}`;

  box.appendChild(img);
  box.appendChild(title);
  box.appendChild(rating);
  box.appendChild(director);
  box.appendChild(year);

  movieList.appendChild(box);
});
