/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
   
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
    const input = document.querySelector(".adding__input")
    const inputButton = document.querySelector('.promo__interactive .add')
    const checkBox = document.querySelector('[type="checkbox"]')
    
    promoBlocksAll.forEach(current => current.remove())
    
    ganre.innerHTML = 'Драма'
    
    promoBg.style.backgroundImage = "url('img/bg.jpg')"
    
    console.log(filmList);
    
    
    function showMoiveList(){ 
        filmList.innerHTML = ''
        movieDB.movies.sort().forEach((current, index) => {
           
            filmList.innerHTML += `
             <li class="promo__interactive-item">${index + 1}. ${current}
                <div class="delete"></div>
             </li>`
        })
        document.querySelectorAll('.delete').forEach((current) => {
            current.addEventListener('click', event => {
              delete movieDB.movies[event.target.parentElement.innerHTML.slice(0, 1) - 1]
                event.target.parentElement.remove()
                showMoiveList()
            }) 
            console.log(movieDB.movies);
        })
    }

    inputButton.addEventListener('submit', event => {
        event.preventDefault()
        let inputValue = input.value
            if (inputValue.length > 21){
                inputValue = `${inputValue.slice(0, 21)}...`
                
            }
        movieDB.movies.push(inputValue)
        showMoiveList()
            if (checkBox.checked){
                console.log('Добавляем любимый фильм');
            }
    })
    

    showMoiveList()
})
