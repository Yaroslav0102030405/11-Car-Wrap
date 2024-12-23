export default function onSearch(e) {
  e.preventDefault();

  const searchQueryInput = e.currentTarget.elements.query.value;

  const options = {
    headers: {
      Authorization: '2b084a585a6744c9a99186e76694f8db',
    },
  };

  const url = `https://newsapi.org/v2/everything?q=${searchQueryInput}&language=en&pageSize=6&page=1`;

  fetch(url, options)
    .then(response => response.json())
    .then(console.log)
    .catch(error => console.log(error));
}
