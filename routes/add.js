const {Router} = require(`express`);
const Course = require(`../models/course`);
const router = Router();

router.get(`/`, (req, res) => {
  res.render(`add`, {
    title: `Добавить новый курс`,
    isAdd: true
  });
});

router.post(`/`, (req, res) => {
  const course = new Course(req.body.title, req.body.price, req.body.url);
  course.save();
  res.redirect(`/courses`);
});

module.exports = router;
