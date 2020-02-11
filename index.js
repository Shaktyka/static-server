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
app.set(`views`, `views`); // где лежат все шаблоны

app.use(express.static(`public`)); // сделали папку public статической

app.get(`/`, (req, res) => {
  // res.sendFile(path.join(__dirname, `views`, `index.html`));
  res.render(`index`, {
    title: `Главная страница`,
    isHome: true
  });
});

app.get(`/courses`, (req, res) => {
  res.render(`courses`, {
    title: `Курсы`,
    isCourses: true
  });
});

app.get(`/add`, (req, res) => {
  res.render(`add`, {
    title: `Добавить новый курс`,
    isAdd: true
  });
});

app.listen(PORT, () => {
  console.log(`Сервер слушает порт ${PORT}`);
});
