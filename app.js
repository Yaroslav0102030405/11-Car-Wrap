// створення аплікейшин сервера
// він слухає наши вхідні з'єднання на url
// та з наших шаблонах динамічно рендерить готову html на кожен запрос

const products = require('./products.json');
// створення сервера шаг 1
const express = require('express');

const exphbs = require('express-handlebars');

const PORT = process.env.PORT || 4444;
// шаг 2
const app = express();

// раздача статичного файлу
app.use(express.static('public'));

app.set('view engine', 'hbs');
app.engine(
  'hbs',
  exphbs.engine({
    extname: 'hbs',
  }),
);

// створюєм колбек функцію на якійсь маршрут
app.get('/', (req, res) => {
  // console.log('Це головна сторінка');
  // res.send({ name: 'Mango' });
  res.render('home', { pageTitle: 'Головна' });
});

app.get('/about', (req, res) => {
  // console.log('<h1>це сторінка про нас</h1>');
  // res.send('<h1>це сторінка про нас</h1>');
  res.render('about', { cssFileName: 'about', pageTitle: 'О нас' });
});

app.get('/products', (req, res) => {
  res.render('products', {
    products,
    cssFileName: 'products',
    pageTitle: 'Товари',
  });
});

// перехід на динамічну сторінку
app.get('/product/:productId', (req, res) => {
  console.log(req.params);
  const product = products.find(p => p.id === req.params.productId);

  res.render('product', { product });
});

//  шаг 3
app.listen(PORT, () => {
  console.log(`Aplication server ${PORT}`);
});

// в терміналі заускаємо сервер командою node app.js

// npm i express-handlebars - додаємо собі в проект шаблоник для сторинок

// npm i nodemon -D - щоб сервес автоматично після змін сам оновляв сторінку а не ми це робили вручну
// він автоматично перезапускає сервер
