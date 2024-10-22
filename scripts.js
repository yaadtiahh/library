let books = [
  {
    'title': 'А что вы хотели от Бабы-яги', 
    'genre': 'Фантастика',
  },
  {
    'title': 'Метро 2033', 
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

let humor = [];
let love = [];
let fantasy = [];
let classic = [];
let all_genres = [];


for (let i = 0;i < books.length; i++) {
  if (all_genres.includes(books[i].genre) != true)  {
    all_genres.push(books[i].genre)
  }
}

let i = 0;
while (i < books.length) {
  all_genres.forEach(function(genre, index) {
    if (genre == books[i].genre && index == 0) {
      fantasy.push(books[i]);
    } else if (genre == books[i].genre && index == 1) {
      love.push(books[i]);
    } else if (genre == books[i].genre && index == 2) {
      humor.push(books[i]);
    } else if (genre == books[i].genre && index == 3) {
      classic.push(books[i]);   
  }
  })
  i++;
}

function sort_books(books_by_genre) {
  books_by_genre.sort((a, b) => a.title > b.title ? 1 : -1);
  console.log(books_by_genre)
}

sort_books(fantasy);
sort_books(love);
sort_books(humor);
sort_books(classic);