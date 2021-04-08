/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
        "Арго",
    ]
};

const promoBg = document.querySelector('.promo__bg')
const promo = document.getElementsByClassName('promo__adv')
const ganre = promoBg.querySelector('.promo__genre')
const promoBlocks = promo[0].getElementsByTagName('img')
const promoBlocksAll = document.querySelectorAll('.promo__adv img')
const filmList = document.querySelector('.promo__interactive-list')

promoBlocksAll.forEach(current => current.remove())

ganre.innerHTML = 'Драма'

promoBg.style.backgroundImage = "url('img/bg.jpg')"

console.log(filmList);

filmList.innerHTML = ''
movieDB.movies.sort().forEach((current, index) => {
    filmList.innerHTML += `<li class="promo__interactive-item">${index + 1}. ${current}
        <div class="delete"></div>
    </li>`
})