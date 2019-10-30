"use strict";
// 12 module

// const API_KEY = '76ed63f80dba3e42bfe198c0806fa9ba';
// const IMG_SRC = 'https://image.tmdb.org/t/p/w500_and_h282_face/';
// const API_URL = 'https://api.themoviedb.org/3';

// const movieListContainer = document.querySelector('.movie-list');
// let currentPage = 1;
// const fetchMovieList = (page = 1) => {
//   currentPage = currentPage + 1;
//   return fetch(
//     `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`,
//   ).then(result => result.json());
// };
// const createMovieItem = ({ title, vote_average, vote_count, poster_path }) => {
//   return `<div class="movie-item">
//   <img src="${IMG_SRC + poster_path} " alt="${title}" class="movie-item__img" />
//   <h2 class="movie-item__title">${title}</h2>
//   <span class="movie-item__rating">Rating(${vote_count}): ${vote_average}</span>
// </div>`;
// };

// const createMovieList = movieList => {
//   return movieList.reduce((acc, movie) => {
//     return acc + createMovieItem(movie);
//   }, '');
// };
// const renderMovieList = movieList => {
//   // movieListContainer.innerHTML = createMovieList(movieList);
//   movieListContainer.insertAdjacentHTML(
//     'beforeend',
//     createMovieList(movieList),
//   );
// };
// const getMovies = page => {
//   fetchMovieList(page)
//     .then(data => {
//       console.log(data);
//       renderMovieList(data.results);
//     })
//     .catch(error => {
//       throw error;
//     });
// };
// const addInfinityScroll = () => {
//   window.addEventListener('scroll', () => {
//     const movieListBottom = movieListContainer.getBoundingClientRect().bottom;
//     const windowHeight = window.innerHeight;
//     // console.log(window.pageYOffset, movieListContainer.getBoundingClientRect());
//     if (movieListBottom / 2 <= windowHeight) {
//       // console.log('rich bottom');
//       getMovies(currentPage);
//     }
//   });
// };
// (function() {
//   getMovies();
//   fetchMovieList()
//     .then(data => {
//       console.log(data);
//       renderMovieList(data.results);
//     })
//     .catch(error => {
//       throw error;
//     });

//   addInfinityScroll();
// })();

// const searchForm = document.querySelector('.search');
// const searchInput = document.querySelector('.search__input');
// const getMovieListByName = async name => {
//   const result = await fetch(
//     `${API_URL}/search/movie?query=${name}&api_key=${API_KEY}`,
//   );
//   return await result.json();
// };

// // const setMovieListByName = async name => {
// //   console.log(await getMovieListByName(name));
// // };
// // // setMovieListByName();

// const setMovieListByName = async name => {
//   return await getMovieListByName(name);
// };
// const createMovieListItem1 = movie => {
//   return `<li><a href="">${movie.original_title}</a></li>`;
// };
// const createMovieList1 = movieList => {
//   return movieList.reduce((acc, movie) => {
//     return acc + createMovieListItem1(movie);
//   }, '');
// };
// const renderMovieList1 = movieList => {
//   const ul = document.querySelector('.search__result');
//   ul.innerHTML = createMovieList1(movieList);
// };
// // searchForm.addEventListener('submit', e => {
// //   e.preventDefault();

// //   setMovieListByName(searchInput.value);
// // });

// searchForm.addEventListener('submit', async e => {
//   e.preventDefault();

//   const { results } = await setMovieListByName(searchInput.value);
//   renderMovieList1(results);
// });

// 12 module Repeta

// const baseUrl = 'https://swapi.co/api/';
// const tableBody = document.querySelector('#swapi-planets tbody');

// fetch(baseUrl)
//   .then(response => {
//     console.log(response);
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   });

// fetch('https://swapi.co/api/people/5')
//   .then(response => {
//     console.log(response);
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   });
// fetch('https://swapi.co/api/planets/')
//   .then(response => {
//     console.log(response);
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//     const markup = data.results
//       .map(planet => tableRowTemplate(planet))
//       .join('');
//     tableBody.insertAdjacentHTML('beforeend', markup);
//   });

// 13 модуль 28/10

// const generator = function*() {
//   console.log('generator started');
//   yield 1;
//   console.log('generator return first value');
//   yield 2;
//   yield 3;
// };

// const bar = generator();

// console.log(bar.next());
// console.log(bar.next());
// console.log(bar.next());
// console.log(bar.next());

// const foo = async () => {
//   const user = await fetch('/fb.com');
//   console.log(user);
//   console.log(user);
//   console.log(user);
// };
