// элементы в DOM можно получить при помощи функции querySelector
const fruitsList = document.querySelector('.fruits__list'); // список карточек
const shuffleButton = document.querySelector('.shuffle__btn'); // кнопка перемешивания
const filterButton = document.querySelector('.filter__btn'); // кнопка фильтрации
const sortKindLabel = document.querySelector('.sort__kind'); // поле с названием сортировки
const sortTimeLabel = document.querySelector('.sort__time'); // поле с временем сортировки
const sortChangeButton = document.querySelector('.sort__change__btn'); // кнопка смены сортировки
const sortActionButton = document.querySelector('.sort__action__btn'); // кнопка сортировки
const kindInput = document.querySelector('.kind__input'); // поле с названием вида
const colorInput = document.querySelector('.color__input'); // поле с названием цвета
const weightInput = document.querySelector('.weight__input'); // поле с весом
const addActionButton = document.querySelector('.add__action__btn'); // кнопка добавления

// список фруктов в JSON формате
let fruitsJSON = `[
{"kind": "Мангустин", "color": "фиолетовый", "weight": 13},
{"kind": "Дуриан", "color": "зеленый", "weight": 35},
{"kind": "Личи", "color": "розово-красный", "weight": 17},
{"kind": "Карамбола", "color": "желтый", "weight": 28},
{"kind": "Тамаринд", "color": "светло-коричневый", "weight": 22}
]`;

// преобразование JSON в объект JavaScript
let fruits = JSON.parse(fruitsJSON);

/*** ОТОБРАЖЕНИЕ ***/

// отрисовка карточек

let arrStyle = ['fruit_violet', 'fruit_green', 'fruit_carmazin', 'fruit_yellow', 'fruit_lightbrown'];


function display() {
  // TODO: очищаем fruitsList от вложенных элементов,
  // чтобы заполнить актуальными данными из fruits
  fruitsList.innerHTML = '';
  for (let i = 0; i < fruits.length; i++) {
    for (let m = 0; m < arrStyle.length; m++) {
      if (m == i) break;
      let styleF = JSON.stringify(arrStyle[m]);
      let jsonF = JSON.stringify(fruits[i]);
      let regular = /,/g;
      let result = jsonF.replace(regular, "<br>");
      let li = document.createElement('li');
      li.innerHTML = '<li class=' + styleF + '><div class="fruit__info">' + result + '</div></li>';
      fruitsList.appendChild(li);
    }

  }
};

// TODO: формируем новый элемент <li> при помощи document.createElement,
// и добавляем в конец списка fruitsList при помощи document.appendChild


// первая отрисовка карточек

display();

/*** ПЕРЕМЕШИВАНИЕ ***/

// генерация случайного числа в заданном диапазоне

// перемешивание массива
function random(n) {
  return Math.floor(Math.random() * Math.floor(n));
};

function shuffleFruits() {
  for (let i = 0; i < fruits.length; i++) {
    var j = random(fruits.length);
    var k = random(fruits.length);
    var t = fruits[j];
    fruits[j] = fruits[k];
    fruits[k] = t;
  }
  return fruits;
};

shuffleButton.addEventListener('click', () => {
  shuffleFruits();
  display();
});

/*** ФИЛЬТРАЦИЯ ***/

// фильтрация массива
const filterFruits = () => {
  fruits.filter((item) => {
    // TODO: допишите функцию
  });
};

filterButton.addEventListener('click', () => {
  filterFruits();
  display();
});

/*** СОРТИРОВКА ***/

let sortKind = 'bubbleSort'; // инициализация состояния вида сортировки
let sortTime = '-'; // инициализация состояния времени сортировки

const comparationColor = (a, b) => {
  // TODO: допишите функцию сравнения двух элементов по цвету
};

const sortAPI = {
  bubbleSort(arr, comparation) {
    // TODO: допишите функцию сортировки пузырьком
  },

  quickSort(arr, comparation) {
    // TODO: допишите функцию быстрой сортировки
  },

  // выполняет сортировку и производит замер времени
  startSort(sort, arr, comparation) {
    const start = new Date().getTime();
    sort(arr, comparation);
    const end = new Date().getTime();
    sortTime = `${end - start} ms`;
  },
};

// инициализация полей
sortKindLabel.textContent = sortKind;
sortTimeLabel.textContent = sortTime;

sortChangeButton.addEventListener('click', () => {
  // TODO: переключать значение sortKind между 'bubbleSort' / 'quickSort'
});

sortActionButton.addEventListener('click', () => {
  // TODO: вывести в sortTimeLabel значение 'sorting...'
  const sort = sortAPI[sortKind];
  sortAPI.startSort(sort, fruits, comparationColor);
  display();
  // TODO: вывести в sortTimeLabel значение sortTime
});

/*** ДОБАВИТЬ ФРУКТ ***/

addActionButton.addEventListener('click', () => {
  // TODO: создание и добавление нового фрукта в массив fruits
  // необходимые значения берем из kindInput, colorInput, weightInput
  display();
});

