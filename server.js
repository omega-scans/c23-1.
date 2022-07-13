const express = require('express');
const path = require('path');
const fileupload = require('express-fileupload');

let initial_path = path.join(__dirname, "public");

const app = express();
app.use(express.static(initial_path));
app.use(fileupload());

app.get('/', (req, res) => {
    res.sendFile(path.join(initial_path, "index.html"));
})

app.get('/editor', (req, res) => {
    res.sendFile(path.join(initial_path, "editor.html"));
})
app.get('/sci-tech', (req, res) => {
    res.sendFile(path.join(initial_path, "categories/science-&-technology.html"));
})
app.get('/personal', (req, res) => {
    res.sendFile(path.join(initial_path, "categories/personal.html"));
})
app.get('/education', (req, res) => {
    res.sendFile(path.join(initial_path, "categories/education.html"));
})
app.get('/essays', (req, res) => {
    res.sendFile(path.join(initial_path, "categories/essays.html"));
})
app.get('/food', (req, res) => {
    res.sendFile(path.join(initial_path, "categories/food.html"));
})
app.get('/health-fitness', (req, res) => {
    res.sendFile(path.join(initial_path, "categories/health-fitness.html"));
})
app.get('/motivation', (req, res) => {
    res.sendFile(path.join(initial_path, "categories/motivation.html"));
})
app.get('/mythology', (req, res) => {
    res.sendFile(path.join(initial_path, "categories/mythology.html"));
})
app.get('/personal', (req, res) => {
    res.sendFile(path.join(initial_path, "categories/personal.html"));
})
app.get('/movies', (req, res) => {
    res.sendFile(path.join(initial_path, "categories/movies.html"));
})
app.get('/photography', (req, res) => {
    res.sendFile(path.join(initial_path, "categories/photography.html"));
})
app.get('/project', (req, res) => {
    res.sendFile(path.join(initial_path, "categories/project.html"));
})
app.get('/travel', (req, res) => {
    res.sendFile(path.join(initial_path, "categories/travel.html"));
})
// upload link
app.post('/upload', (req, res) => {
    let file = req.files.image;
    let date = new Date();
    // image name
    let imagename = date.getDate() + date.getTime() + file.name;
    // image upload path
    let path = 'public/uploads/' + imagename;

    // create upload
    file.mv(path, (er, result) => {
        if(er){
            throw er;
        } else{
            // our image upload path
            res.json(`uploads/${imagename}`)
        }
    })
})

app.get("/admin", (req, res) => {
    res.sendFile(path.join(initial_path, "dashboard.html"));
})

app.get("/:blog", (req, res) => {
    res.sendFile(path.join(initial_path, "blog.html"));
})
app.get("/:blog/editor", (req, res) => {
    res.sendFile(path.join(initial_path, "editor.html"));
})

app.use((req, res) => {
    res.json("404");
})

app.listen(process.env.PORT || 3000, () => {
    console.log('listening......');
})