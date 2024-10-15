let books = [
  {
    'title': 'А что вы хотели от Бабы-яги', 
    'genre': 'Фантастика',
  },
  {
    'title': 'Баба-яга Бессмертная', 
    'genre': 'Фантастика',
  },
  {
    'title': 'Ангел во плоти', 
    'genre': 'Роман',
  },
  {
    'title': 'Алексей и Антонина', 
    'genre': 'Юмор',
  },
  {
    'title': 'Одиннадцать минут', 
    'genre': 'Проза',
  },
  {
    'title': 'Метро 2033', 
    'genre': 'Фантастика',
  },
  {
    'title': 'Рабыня страсти', 
    'genre': 'Роман',
  },
  {
    'title': 'Будь моей', 
    'genre': 'Роман',
  },
  {
    'title': 'Мастер и Маргарита', 
    'genre': 'Проза',
  },
  {
    'title': 'Аэродром', 
    'genre': 'Юмор',
  }
];

let i = 0;
let humor = [];
let love = [];
let fantasy = [];
let classic = [];
let all_genres = [];

while (i < books.length) {
    books.forEach(function(currentValue, index) {
        if (currentValue.genre == "Фантастика" && index == i) {
            fantasy.push(currentValue);
        } else if (currentValue.genre == "Проза" && index == i) {
            classic.push(currentValue);
        } else if (currentValue.genre == "Роман" && index == i) {
            love.push(currentValue);
        } else if (currentValue.genre == "Юмор" && index == i) {
            humor.push(currentValue);
        }
        i++
    })
}

function sort_books(){
    fantasy.sort();
    love.sort();
    classic.sort();
    humor.sort();
}

sort_books()
console.log(fantasy)
console.log(love)
console.log(classic)
console.log(humor)