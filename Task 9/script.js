/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite klasę "Movie", kuri sukuria objektus su 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnis nei 100 000 000 mln USD, tada gražins true, kitu atveju false.
------------------------------------------------------------------------------------------------------ */

class Movie{
  constructor(title, director, budget){
    this.title = title;
    this.director = director;
    this.budget = budget;
    return this.wasExpensive();
  }
  wasExpensive(){
    return this.budget > 100000000 ? true : false;
  }
}

const movies = [
  new Movie('Harry Potter', 'Chris Columbus', 250000000),
  new Movie('Redirected', 'Emilis Velyvis', 2700000),
  new Movie('Narnia', 'Andrew Adamson', 225000000),
  new Movie('Mad Max', 'George Miller AO', 350000)
];

console.log(movies);

console.log(movies[0].wasExpensive());
console.log(movies[1].wasExpensive());
console.log(movies[2].wasExpensive());
console.log(movies[3].wasExpensive());