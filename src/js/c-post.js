const BASE_URL = 'http://localhost:3000';

const newBook = {
  title: 'Sass',
  views: 100,
};

function addBook(book) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  };
  return fetch(`${BASE_URL}/books`, options).then(responce => responce.json());
}

addBook(newBook).then(book => console.log(book));
addBook({ title: 'Redux', views: 100 });
