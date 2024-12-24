const BASE_URL = 'http://localhost:3000/books';

function removeBook(bookId) {
  const url = `${BASE_URL}/books/${bookId}`;

  const options = {
    method: 'DELETE',
  };
  return fetch(url, options).then(responce => responce.json());
}

removeBook(2);
