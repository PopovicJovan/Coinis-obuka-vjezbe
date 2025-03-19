let searchInputValue = document.getElementById("search");
let movies;


function addMoviesToDiv(movies, moviesDIv){
    let moviesDiv = document.getElementById("movies");
    moviesDiv.innerHTML = movies.filter(m => m.title.toLowerCase().includes(searchInputValue.value.toLowerCase())).map(movie => `
    <div class="movie-card">
        <img src="${movie.img}" alt="img"/>
        <div class="movie-card-border">
            <h2>${movie.title}</h2>
            <p>Year: ${movie.year}</p>
            <p>Genre: ${movie.genre}</p>
            <p>IMDb Rating: ${movie.imdb_rating}</p>
        </div>
    </div>`)
}
let moviesDiv = document.getElementById("movies");


searchInputValue.addEventListener('input', () => {
    if (!movies) return;
    addMoviesToDiv(movies, moviesDiv);
})




try{
    fetch("https://jsonblob.com/api/jsonBlob/1351950892655632384/")
    .then(response => response.json())
    .then(data => {
        movies = data.movies;
        addMoviesToDiv(movies, moviesDiv);
    })
}catch{
    console.log("error")
}

