const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.end(`
    <div>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
      <h1>Main title versel, understend?</h1>
    </div>
`)
})

app.get('/about', (req, res) => {
  res.end(`
    <div>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
      <h1>About page versel, understend?</h1>
    </div>
`)
})

app.listen(PORT, ()=> {
  console.log('Сервер запущен')
});
