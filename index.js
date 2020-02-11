const express = require(`express`);
const path = require(`path`);
const exphbs = require(`express-handlebars`);
const homeRoutes = require(`./routes/home`);
const addRoutes = require(`./routes/add`);
const coursesRoutes = require(`./routes/courses`);

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
app.use(`/`, homeRoutes);
app.use(`/add`, addRoutes);
app.use(`/courses`, coursesRoutes);

app.listen(PORT, () => {
  console.log(`Сервер слушает порт ${PORT}`);
});
