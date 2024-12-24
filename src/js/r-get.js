const BASE_URL = 'http://localhost:3000/books';

function fetchBooks() {
  fetch(`${BASE_URL}`).then(responce => responce.json());
}

fetchBooks();

function fetchBooksId(id) {
  fetch(`${BASE_URL}/${id}`).then(responce => responce.json());
}

fetchBooksId(2);
fetchBooksId(3);
