/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/


'use strict';

let numberOfFilms;

function start(){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?')
    while(numberOfFilms == '' || numberOfFilms == null|| isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?')
    }
}
start();

let personalMovieDB = {
    count:  numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    rememberMyFilms: () => {
        for (let i = 1; i <=2; i++){
            const  movie  = prompt('Один из последних просмотренных фильмов?'),
                   score = prompt('На сколько оцените его?');
             if (movie === null || score === null || movie === '' || score === '' ||  movie.length > 50){
                 i--
             }else {
                 personalMovieDB.movies[movie] = score
             }
         }
    },
    writeYourGenres: () => {
        for(let i = 1; i <= 3; i++){
            const ganre = prompt(`Ваш любимый жанр под номером ${i}`)
                if (ganre ==='' || ganre === null){
                    i--
                }else {
                    personalMovieDB.genres.push(ganre)
                }  
        }
        personalMovieDB.genres.forEach( (current, index) => console.log(`Любимый жанр #${index + 1} - это ${current}`) )
    },
    detectPersonalLevel: () => {
        if (personalMovieDB.count < 10){
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count > 30){
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: () => {
        if (!personalMovieDB.privat){
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: () => {
        personalMovieDB.privat = !personalMovieDB.privat;
    },
}

personalMovieDB.rememberMyFilms()
personalMovieDB.detectPersonalLevel()
personalMovieDB.writeYourGenres()
personalMovieDB.toggleVisibleMyDB()
personalMovieDB.showMyDB()






    
