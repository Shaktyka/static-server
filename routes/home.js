const {Router} = require(`express`);
const router = Router();

router.get(`/`, (req, res) => {
  // res.sendFile(path.join(__dirname, `views`, `index.html`));
  res.render(`index`, {
    title: `Главная страница`,
    isHome: true
  });
});

module.exports = router;
