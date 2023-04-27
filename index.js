
const moviesContainer = document.querySelector(".movies__container")
const cards =[ //массив 
    {
        name: 'Стивен Спилберг',
        career: 'Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр',
        films: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0',
        top_rated_film: 'Список Шиндлера'
    },
    {
        name: 'Кристофер Нолан',
        career: 'Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор',
        films: 'https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu',
        top_rated_film: 'Начало'
    },
    {
        name: 'Мартин МакДона',
        career: 'Сценарист, Режиссёр, Продюсер',
        films: 'https://www.film.ru/person/martin-makdonah',
        top_rated_film: 'Три билборда на границе Эббинга, Миссури'
    },
    {
        name: 'Алексей Балабанов',
        career: 'Режиссёр, Сценарист, Актёр, Продюсер',
        films: 'https://www.film.ru/person/aleksey-balabanov',
        top_rated_film: 'Брат'
    },
    {
        name: 'Питер Фаррелли',
        career: 'Продюсер, Режиссёр, Сценарист, Актёр',
        films: 'https://www.film.ru/person/piter-farrelli',
        top_rated_film: 'Зелёная книга'
    },
    {
        name: 'Юрий Быков',
        career: 'Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер',
        films: 'https://www.film.ru/person/yuriy-bykov',
        top_rated_film: 'Дурак'
    },
    {
        name: 'Жан-Марк Валле',
        career: 'Режиссер, Продюсер, Монтажёр, Актёр, Сценарист',
        films: 'https://www.film.ru/person/zhan-mark-valle',
        top_rated_film: 'Далласский клуб покупателей'
    },
    ];

    const cardList2 = document.querySelector(".top_rated_film"); //находим разметку в DOM, куда нужно поместить список фильмов

        // <div class="movies__container">
        //     <h1 class="movies__title">&#10024 &#10024 &#10024 Мои любимые режиссеры &#10024 &#10024 &#10024</h1>
        //     <span class="movies__name"></span>
        //     <span class="movies__career"></span>
        // </div>

    const createCard =(obj) =>{
        const block = document.createElement('div');
        block.className ="movies__container";
        const name = document.createElement('span');
        name.className ="movies__name";
        name.textContent = obj.name;
        const career = document.createElement('span');
        career.className ="movies__career";
        career.textContent = obj.career;
        const films = document.createElement("a");
        films.className = "films";
        films.href = obj.films;
        films.textContent = "Фильмография";

        const top_rated_film = document.createElement("p");
        top_rated_film.className = "top_rated_film";
        top_rated_film.textContent = obj.top_rated_film;

    
        //удочеряем элементы  в нужные нам элементы разметки
        block.append(name);  
        block.append(career);
        block.append(films);
        console.log(block);
        return block; // возвращаем готовый блок с разметкой и заполненный элементами из массива
    }
        const addCard =(objItem, container) =>{
        const item = createCard(objItem); // создаем функцию, которая будет добавлять новые блоки к уже созданным
        container.append(item);
        }

        cards.forEach((element)=>{
            addCard(element,moviesContainer);
        })

        const cards2 = cards.map(function (obj) {
            // создаем новый массив из объектов уже существующего (top_rated_film)
        return obj.top_rated_film;
        });
    
        document.addEventListener("DOMContentLoaded", () => {
            // создаем функцию, которая будет перебирать объекты массива по очереди и добавлять их в разметку Html
            cardList2.textContent = cards2.join(", ");
        });
        



    //createCard(cards);


