const BASE_URL = 'http://localhost:3000';

function updateBookId(update, bookid) {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(update),
  };

  return fetch(`${BASE_URL}/books/${bookid}`, options).then(responce =>
    responce.json(),
  );
}

updateBookId({ title: 'Велика книга по html' }, 1);
