const uuid = require(`uuid/v4`);
const fs = require(`fs`);
const path = require(`path`);

class Course {
    constructor(title, price, imageUrl) {
        this.title = title;
        this.price = price;
        this.image = imageUrl;
        this.id = uuid();
    }

    async save() {
        const courses = await Course.getAll();
        console.log(courses);
    }

    static getAll() {

        return new Promise((res, rej) => {
            fs.readFile(
                path.join(__dirname, `../data/courses.json`),
                `utf-8`,
                (err, content) => {
                    if (err) {
                        reject(err);
                    } else {
                      console.log(content);
                        // resolve(JSON.parse(content));
                    }
                }
            )
        });
    }
}

module.exports = Course;