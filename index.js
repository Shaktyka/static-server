const express = require(`express`);
const path = require(`path`);
const exphbs = require(`express-handlebars`);

const app = express();
const PORT = process.env.PORT || 3000;

const hbs = exphbs.create({
  defaultLayout: `main`,
  extname: `hbs`
});

app.engine(`hbs`, hbs.engine); // регистрируем в Express, что вообще есть такой движок
app.set(`view engine`, `hbs`); // начинаем его использовать
app.set(`views`, `views`); // где лежать все шаблоны

app.use(express.static(`public`)); // сделали папку public статической

app.get(`/`, (req, res) => {
  // res.sendFile(path.join(__dirname, `views`, `index.html`));
  res.render(`index`);
});

app.get(`/about`, (req, res) => {
  // res.sendFile(path.join(__dirname, `views`, `about.html`));
  res.render(`about`);
});

app.listen(PORT, () => {
  console.log(`Сервер слушает порт ${PORT}`);
});
