// console.log(fetch("https://www.omdbapi.com/?i=tt3896198&apikey=ba040381"))

async function main() {

  let keyword = 'fast';

  const movieCardTemplate = document.querySelector("[movie-data-template]")

  const response = await fetch(`https://www.omdbapi.com/?apikey=ba040381&s=${keyword}`);
  const movieData = await response.json();
  const movieListEl = document.querySelector(".movie__list");


  const movies = movieData.Search


  console.log(movieData)

  // movieListEl.innerHTML = movies
  //   .map(
  //     (movies) =>
  //       `<div class="movie__card">
  //         <div class="movie__card--container">
  //           <h3>${movies.title}</h3>
  //           <p><b>Year:</b>${movies.year}</p>
  //           <p><b>Rating:</b>xxxxx</p>
  //           <p><b>Runtime:</b>xxxxx</p>
  //           <p><b>Genre:</b>xxxxx</p>
  //         </div>
  //       </div>`
  //   )
  //   .join("");
}

main();