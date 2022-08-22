// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directors = moviesArray.map(e => e.director);
    return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let stevenDramaMovies = moviesArray.filter(e => {
        for (let i = 0; i < e.genre.length; i++) {
            if (e.genre[i] === 'Drama' && e.director === 'Steven Spielberg') return true;
        }
    })
    return stevenDramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length) return 0;
    let newArray = moviesArray.filter(e => e.score);
    let scores = newArray.reduce((sum, movie) => (sum + movie.score), 0);
    let finalAverage = Number((scores / moviesArray.length).toFixed(2));
    return finalAverage;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMovies = moviesArray.filter(e => {
        for (let i = 0; i < e.genre.length; i++) {
            if (e.genre[i] === 'Drama') return true;
        }
    })
    if (!dramaMovies.length) return 0;
    let dramaScores = dramaMovies.reduce((sum, movie) => (sum + movie.score), 0);
    let dramaAverages = Number((dramaScores / dramaMovies.length).toFixed(2));
    return dramaAverages;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let newArray = [];
    let years = moviesArray.map(e => e.year)
    years.sort((a, b) => a - b)
    for (let i = 0; i < years.length; i++) {
        for (let j = 0; j < moviesArray.length; j++) {
            if (years[i] === moviesArray[j].year && !newArray.includes(moviesArray[j])) {
                newArray.push(moviesArray[j]);
            }
        }
        newArray.sort((a, b) => {
            if (a.year === b.year) {
                return a.title.localeCompare(b.title);
            }
        })
    }
    return newArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let newArray = moviesArray.map(e => e.title);
    newArray.sort();
    if (newArray.length >= 20) {
        let shortArray = newArray.slice(0, 20)
        return shortArray;
    }
    return newArray;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
